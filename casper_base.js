var require = patchRequire(require); // when writing your own modules and requiring Casper JS files, the patchRequire function needs to be called to 'patch' the Phantom JS require so it will work with Casper JS.
var casper = require('casper').create();

// monitoring console log messages in the browser
casper.on('remote.message', function(msg) { // listens for console logs in the browser
	console.log('the remote message is: ' + msg);
});

module.exports = casper;