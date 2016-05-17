var casper = require('./casper_base');
var utils = require('utils');

casper.on('resource.received', function (resource) {
	// utils.dump(resource);
	// utils.dump(resource.url);
	// Only print out the bad network requests
	if (resource.stage === 'end' && resource.status > 400) {
		utils.dump(resource.url);
	}
});

casper.start('https://www.google.com');

casper.run();