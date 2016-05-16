var casper = require('casper').create();
casper.start('https://www.google.com/search?q=a&tbm=isch', function () {
	this.capture('./output/screenshot.png');
})
casper.run();