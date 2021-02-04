module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/movies', require('./base.routes.js'))
    app.use('/details/:movie_id', require('./base.routes.js'))
}