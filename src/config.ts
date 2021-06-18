import envSchema from "env-schema";
import S from "fluent-json-schema";

const schema = S.object()
  .prop("PORT", S.number().required())
  .prop("LOG_LEVEL", S.string().default("info"))
  .prop("PRETTY_PRINT", S.string().default(true));

export type Config = {
  logger: boolean;
  PORT: number;
  LOG_LEVEL: string;
  PRETTY_PRINT: boolean;
};

export default envSchema({
  schema,
  dotenv: true,
}) as Config;
