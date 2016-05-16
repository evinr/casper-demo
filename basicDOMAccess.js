var casper = require('casper').create();
casper.start('https://www.google.com/search?q=a&tbm=isch', function () {
	var title = this.evaluate(function() {
		return document.title;
	})
	console.log(title)
})
casper.run();