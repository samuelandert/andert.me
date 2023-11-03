import {defineHook} from '@directus/extensions-sdk';
import {createError} from '@directus/errors';
import crypto from 'crypto';

const InvalidEmailAddressError = createError('INVALID_PAYLOAD_ERROR', 'Please specify a valid email address', 500);
export default defineHook((
  {
    filter,
    action
  }, {
    services,
    database,
    env
  }) => {
  filter('login_challenges.items.create', async (payload: any, meta, ctx) => {
    const emailAddress: string = payload?.email;
    const UsersService = services.UsersService;

    const usersService = new UsersService({knex: database, schema: ctx.schema, accountability: ctx.accountability});
    console.log(`usersService: ${JSON.stringify(usersService)}`);

    // Verify it's a valid email address format
    const isValidEmail: boolean = validateEmail(emailAddress);
    if (!isValidEmail) {
      throw new InvalidEmailAddressError();
    }

    // Generate a random challenge
    payload.challenge = crypto.randomBytes(16).toString('base64url');

    return payload;
  });
  action('login_challenges.items.create', (meta, ctx) => {
    // TODO: Send mail
    /*
    mailService.send({
      to: meta.payload.email,
      from: 'noreply@directus.io',
      subject: `Login at ${"Hello World"}`,
      text: `Here's your one time code: ${meta.payload.challenge}`
    });
     */
  });
});

function validateEmail(email: string): boolean {
  if (!email) return false;
  const re: any = /\S+@\S+\.\S+/;
  return re.test(email);
}
