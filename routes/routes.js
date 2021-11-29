const UserRoutes = require("./UserRoutes");

module.exports = function routes(app){
    app.use('/', UserRoutes);
}

