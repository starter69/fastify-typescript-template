import { test } from "tap";
import createServer from "../src/server";

void test('GET "/favicon.ico"', async ({ same }) => {
  const app = await createServer({ logger: false });

  const response = await app.inject("/favicon.ico");

  same(response.statusCode, 200);
  same(response.headers["content-type"], "image/x-icon");
});
