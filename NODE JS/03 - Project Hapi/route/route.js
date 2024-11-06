const mainRoute = require('./main/main_route.js');
const userRoute = require('./user/user_route.js')

module.exports = [].concat(
    mainRoute,
    userRoute
);