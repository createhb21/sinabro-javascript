import { start } from "./src/router";
import { routes, getInitialHTML } from "./src/routes";

export { getInitialHTML };

if (typeof window !== "undefined") {
  console.log("starting the client-side routing...");
  start({
    routes,
  });
}
