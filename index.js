'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello, world!';
    }
});

server.route({
    method: 'GET',
    path: '/users',
    handler: (request, h) => {

        return [{ id: 1, email: 'test@test.com', firstName: 'Test', lastName: 'Testov' }];
    }
});

server.route({
    method: 'GET',
    path: '/vacations',
    handler: (request, h) => {

        return [];
    }
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

module.exports = server;
