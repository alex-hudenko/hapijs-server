'use strict';

// requires for testing
const Code = require('code');
const expect = Code.expect;
const Lab = require('lab');
const lab = exports.lab = Lab.script();

// use some BDD verbage instead of lab default
const describe = lab.describe;
const it = lab.it;

// require hapi server
const Server = require('../index.js');

// tests
describe('functional tests - products', () => {

    it('should get users', async () => {

        // make API call to self to test functionality end-to-end
        const response = await Server.inject({
            method: 'GET',
            url: '/users'
        });
        expect(response.statusCode).to.equal(200);
        expect(response.result).to.have.length(1);
        const user = response.result[0];
        expect(user).to.equal({ id: 1, email: 'test@test.com', firstName: 'Test', lastName: 'Testov' });
    });

    it('should not allow to create users', async () => {

        const response = await Server.inject({
            method: 'POST',
            url: '/users',
            payload: { email: 'test@test.com', firstName: 'Test', lastName: 'Testov' }
        });
        expect(response.statusCode).to.not.equal(200);
    });


});
