module.exports = [
    {
        method: '*',
        path: '/users',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/users/{username}',
        handler: (request, h) => {
            // Get path data
            const { username } = request.params;
            return `Hello, ${username}!`;
        },
    },
    {
        method: 'GET',
        // add in the end path to set dafault value
        // previviously
        // path: '/users-check/{username}',
        // then to be
        path: '/users-check/{username?}',
        handler: (request, h) => {
            // Add default value
            const { username = "Stranger" } = request.params;
            return `Hello, ${username}!`;
        },
    },
    {
        method: 'GET',
        path: '/users',
        handler: (request, h) => {
            // Get query data
            const { name, location } = request.query;
            return `${name} lives in ${location}`;
        },
    },
];