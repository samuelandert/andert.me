const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

import {
    createDirectus,
    readUsers,
    createUser,
    rest,
    staticToken,
    createItem,
    updateUser,
    login,
    readItem, readItems
} from '@directus/sdk';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/request_challenge', async (req: any, res: any) => {
    res.status(200).send("Hello World");
});
app.post('/request_challenge', async (req: any, res: any) => {
    try {
        const email = req.body.email;
        const client = createDirectus('http://localhost:8055')
        .with(staticToken('yJ3KGq8s75oyGLgPWpCJe2RhM9nWL5e8'))
        .with(rest());

        const challenge = await client.request(createItem('login_challenges', {
            email: email
        }));


        res.send(challenge.challenge);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
});

app.get('/verify_access_token', async (req: any, res: any) => {
    const token = req.headers.authorization;
    console.log("verify_access_token.token", token);
    try {
        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, '6116487b-cda1-52c2-b5b5-c8022c45e263', (err: any, decoded: any) => {
                if (err) {
                    reject(err);
                }
                resolve(decoded);
            });
        });
        return res.status(500).send(decoded);
    } catch (e) {
        return res.status(500).send(e);
    }
});

app.get('/login/:challenge', async (req: any, res: any) => {
    try {
        const client = createDirectus('http://localhost:8055')
        .with(staticToken('yJ3KGq8s75oyGLgPWpCJe2RhM9nWL5e8'))
        .with(rest());

        const foundChallenge: any = await client.request(readItems('login_challenges', {
            filter: {
                challenge: req.params.challenge
            }
        }));

        if (foundChallenge.length === 0) {
            res.status(500).send("Challenge not found");
            return;
        }

        console.log("foundChallenge", foundChallenge);

        const password = crypto.randomBytes(16).toString('base64url');

        const foundUser = await client.request(readUsers({
            filter: {
                email: foundChallenge.email
            }
        }));
        console.log("foundUser", foundUser);

        let user: any = null;
        if (foundUser.length === 0) {
            console.log("creating user");
            user = await client.request(createUser({
                first_name: "New",
                last_name: "User",
                email: foundChallenge.email,
                password: password,
            }));
        } else {
            console.log("updating user");
            user = await client.request(updateUser(foundUser[0].id, {
                password: password
            }));
        }

        const loginResult = await client.request(login(user.email, password));
        res.cookie('access_token', loginResult.access_token, {maxAge: loginResult.expires, httpOnly: true, domain: 'localhost'});
        res.status(200).send(loginResult);
    } catch (e) {
        res.status(500).send((<any>e).message + " " + (<any>e).stack);
    }
});


const server = app.listen("8080");
server.on('listening', () => {
    console.log("listening on 8080");
});
