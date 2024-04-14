module.exports = {
  apps: [
    {
      name: "app-name",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      cwd: "./",
    },
  ],
};
