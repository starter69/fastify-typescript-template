import createServer from "./server";
import config from "./config";

const PORT = Number(config.PORT) || 3000;
const app = await createServer(config);

await app.listen(PORT);
