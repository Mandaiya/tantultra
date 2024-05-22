import { config } from "dotenv";
import { cleanEnv, str } from "envalid";

await config({ export: true });

export default cleanEnv(Deno.env.toObject(), {
  6066551482:AAEw8W4KJv7BxRlhI18mwvL6yKpIvJbAZcg: str(),
  mongodb://clw9dzo3w0027aun26j0we9yi:7hWjvmMAhz2YAsbYnMXloPhM@clw9dzo3y008jn2au26sotiwc:27017/?readPreference=primary&ssl=false: str(),
});
