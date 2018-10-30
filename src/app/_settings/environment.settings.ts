' use strict';
export const environment = {
    production: false,
    protocol: 'http',
    server: 'localhost',
    port: '4000',
    baseUri: '/api/v1',
    baseFullUri: this.protocol + "://" + this.server + ":" + this.port + this.baseUri,
    planUri: '',
    loginUri: '',

};