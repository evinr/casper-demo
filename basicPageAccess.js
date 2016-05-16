var casper = require('casper').create();
//basic access to the page
casper.start('https://www.google.com/search?q=a&tbm=isch', function () {
	var title = this.evaluate(function() {
		return document.title;
	})
	console.log(title)
})
casper.run();

//basic access to the page using built in casper methods
casper.start('https://www.google.com/search?q=a&tbm=isch', function () {
	var title = this.getTitle();
	var url = this.getCurrentUrl();
	console.log(title);
	console.log(url);
})
casper.run();

// passing in arguments into the context of the page
casper.start('https://www.google.com/search?q=a&tbm=isch', function () {
	var message = 'the current page title is: ';
	var title = this.evaluate(function(message) {
		return message + document.title;
	}, message)
	console.log(title)
})
casper.run();

// monitoring console log messages in the browser
casper.on('remote.message', function(msg) { // listens for console logs in the browser
	console.log('the remote message is: ' + msg);
})
casper.start('https://www.google.com/search?q=a&tbm=isch', function () {
	var title = this.evaluate(function() {
		console.log(document.title);// outputs to the headless browser console
	})
})
casper.run();