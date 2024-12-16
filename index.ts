import EnvConstants from "./constants/env.constants";
import { DBCONNECT } from "./database";
import CreateServer from "./server";

const PORT = EnvConstants.PORT;
const server = CreateServer();

DBCONNECT(() => {
  server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}⚡`);
  });
});
