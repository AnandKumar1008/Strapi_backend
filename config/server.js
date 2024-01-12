module.exports = ({ env }) => ({
  url: env("PUBLIC_URL"),
  host: env("HOST"),
  port: env.int("PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS"),
  },
});
