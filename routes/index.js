module.exports = (app) => {
  // Base URLS
  app.use("/", require("./base.routes.js"))

  // Custom URLS
  app.use("/movies", require("./movies.routes.js"))
}
