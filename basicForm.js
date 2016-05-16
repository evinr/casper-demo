var casper = require('casper').create();
//filling out the form and then verifying
casper.start('https://www.google.com/search?q=a&tbm=isch', function () {
	this.fill('form',{q:'b'}, true); // where the objects keys map to the name value on the input
})

casper.wait(1000, function() { //introducing a delay for the page to return
	this.capture('./output/a-b.png');
})
casper.run();