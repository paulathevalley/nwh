import { config } from "@keystone-6/core";
import { lists } from "./src/keystone/schema";

export default config({
  db: {
    provider: "sqlite",
    url: "file:./keystone.db",
  },
	server: {
		// We're using a custom port for this example so Astro and Keystone can run at the same time
		port: 4000,
	},
  lists: lists,
});
