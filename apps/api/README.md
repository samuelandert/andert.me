# WunderGraph simple example

#### Getting started

```shell
npm install && npm start
```

#### Get all Countries

```shell
curl -X GET http://localhost:9991/app/main/operations/Contries
```

#### Get Andorra

```shell
curl --location -g --request GET 'http://localhost:9991/app/main/operations/Countries?wg_variables={ "filter": {"code": { "eq": "AD" } } }' \
--header 'Content-Type: application/json'
```

#### Call your custom GraphQL server

```shell
curl -X GET http://localhost:9991/app/main/operations/Hello
```




