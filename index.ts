import EnvConstants from "./constants/env.constants";
import { DBCONNECT } from "./database";
import { server } from "./server";

const PORT = EnvConstants.PORT;

DBCONNECT(() => {
  server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}⚡`);
  });
});
