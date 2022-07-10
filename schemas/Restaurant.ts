import { timestamp, text, select } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Restaurant = list({
  // access:
  // ui
  fields: {
    name: text({ isRequired: true }),
    createdBy: text(),
    location: select({
      isRequired: true,
      options: [
        { label: 'Montreal', value: 'MONTREAL' },
        { label: 'Toronto', value: 'TORONTO' },
      ],
    }),
    createdAt: timestamp({ ui: { createView: { fieldMode: 'hidden' } } }),
    updatedAt: timestamp({ ui: { createView: { fieldMode: 'hidden' } } }),
    desc: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
  },
  hooks: {
    resolveInput: ({ resolvedData, operation }) => {
      if (operation === 'create')
        return { ...resolvedData, createdAt: Date.now() };
      if (operation === 'update')
        return { ...resolvedData, updatedAt: Date.now() };
    },
  },
});
