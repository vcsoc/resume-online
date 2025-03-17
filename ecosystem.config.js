module.exports = {
    apps: [
      {
        name: "resume-online",
        script: "server.js",
        watch: ["index.html", "timeline.yaml", "server.js"],
        ignore_watch: ["node_modules", "*.log"],
        watch_options: {
          followSymlinks: false,
        },
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };