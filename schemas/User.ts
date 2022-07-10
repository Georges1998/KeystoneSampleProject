import { password, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const User = list({
  // access:
  // ui
  fields: {
    username: text({ isRequired: true, isUnique: true }),
    password: password(),
  },
});
