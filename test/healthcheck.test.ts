import { test } from "tap";
import createServer from "../src/server";

void test('GET "/health" route', async ({ same }) => {
  const app = await createServer({ logger: false });

  const response = await app.inject("/health");

  same(response.statusCode, 200);
  same(response.json().status, "ok");
});
