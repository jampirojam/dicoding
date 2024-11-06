import { server as _server } from '@hapi/hapi'
import routes from '../route/routes.js'

const init = async () => {
    const server = _server({
        port: 5000,
        host: 'localhost',
        // use cors for global server
        routes: {
            cors: {
                origin: ['*']
            }
        }
    })

    server.route(routes)

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

export default init
