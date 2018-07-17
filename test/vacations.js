'use strict';

// requires for testing
const Code        = require('code');
const expect      = Code.expect;
const Lab         = require('lab');
const lab         = exports.lab = Lab.script();

// use some BDD verbage instead of lab default
const describe    = lab.describe;
const it          = lab.it;

// require hapi server
const Server = require('../index.js');

// tests
describe('functional tests - vacations', () => {

    it('should get vacations', async () => {

        const response = await Server.inject({
            method: 'GET',
            url: '/vacations'
        });
        expect(response.statusCode).to.equal(200);
    });

});
