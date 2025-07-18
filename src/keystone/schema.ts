// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, select } from "@keystone-6/core/fields";
import type { Lists } from ".keystone/types";

// https://keystonejs.com/docs/config/lists
export const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    },
  }),
} satisfies Lists;
