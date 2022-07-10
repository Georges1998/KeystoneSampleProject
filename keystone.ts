import 'dotenv/config';

import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  statelessSessions,
  withItemData,
} from '@keystone-next/keystone/session';

import { User } from './schemas/User';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long the cookie lives in the browser
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'username',
  secretField: 'password',
  initFirstItem: {
    fields: ['username', 'password'],
  },
  // TODO: add in initial roles here
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true, // we can remove this if we don't care about the credentials
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // TODO: add data seeding here
    },
    lists: createSchema({
      // Schema goes here :D
      User,
    }),

    ui: {
      // show the ui only for people who are logged in
      isAccessAllowed: ({ session }) => {
        console.log('session', session);
        return !!session;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // what data to store in the session
      User: `id username`,
    }),
  })
);
