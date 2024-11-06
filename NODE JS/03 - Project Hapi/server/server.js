const Hapi = require('@hapi/hapi');
const routes = require('../route/route.js');

const init = async () => {
    // set server
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // add route route
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

module.exports = init;