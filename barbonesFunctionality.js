var casper = require('casper').create();
casper.echo('wat it do!', 'INFO');
casper.echo('Check yo self!', 'WARNING');
casper.exit();