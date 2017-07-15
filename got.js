#!/usr/bin/env node
var program = require('commander');
program
  .version('0.0.1')
  .description('got is your ultimate game of thrones terminal app, getting know of next episode air date , getting character\'s quote and search for character\'s specifications is helpers you can use of   ')
  .command('nxtep', 'next episode air date').alias('ne')
  .command('quote', 'get character\'s quote').alias('q')
  .command('whois <name>', 'get character\'s details').alias('w')
  .parse(process.argv);
if(!program.args){
	program.help()
}
