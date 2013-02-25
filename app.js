var nconf = require('nconf');

nconf.file('settings.json')
     .env();

var username = nconf.get('username'),
    password = nconf.get('password');

console.log(username, ', your password is:', password);