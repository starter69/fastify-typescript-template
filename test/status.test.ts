import { test } from "tap";
import createServer from "../src/server";

void test('GET "/status" route', async ({ same }) => {
  const app = await createServer({ logger: false });

  const response = await app.inject("/status");

  same(response.statusCode, 200);
  same(response.json().status, "ok");
});
