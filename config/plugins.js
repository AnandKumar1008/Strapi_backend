module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  migrations: {
    enabled: false,
    config: {
      autoStart: false,
      migrationFolderPath: "migrations",
    },
  },
  // ...
});
