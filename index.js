

const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI();

console.log('Create Ripple account...');

let account = api.generateAddress();

console.log('----------------------------------');
console.log('Address: ' + account.address);
console.log('Secret key: ' + account.secret);
console.log('----------------------------------');

console.log('Account created successfully');

