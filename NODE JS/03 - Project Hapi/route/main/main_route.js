module.exports = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            // request payload
            // use postman to run
            const { username, password } = request.payload;
            if (password !== 'password') {
                // use detail response
                const response = h.response('fail');
                response.code(404);
                response.type('text/plain');
                response.header('X-Custom', 'some-value');
                return response;
            }
            
            // use chain notation
            return h.response('success')
            .code(201)
            .type('text/plain')
            .header('X-Custom', 'some-value');
        },
    },
];