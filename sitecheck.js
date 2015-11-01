#!/usr/bin/env node

var chalk = require('chalk');
var request = require('sync-request');
var args = require('minimist')(process.argv.slice(2), { alias: { h: 'help', v: 'version' }});
var log = console.log;

// Args
if (args.help || (args._.length === 0 && !args.version)) {
	log('Usage:');
	log('    sitecheck [url]');
	log('');
	log('Options:');
	log('    -h, --help         show help');
	log('    -v, --version      show version');
	process.exit();
}
if (args.version) {
	log(require('./package.json').version);
	process.exit();
}

// Start checking
args._.forEach(function(url) {
	url = "http://" + url;
	log(chalk.blue('Check url: ' + url));

	// Check general availability
	try {
		var res = request('GET', url);
		log(chalk.green(' ✔ Site is available'));
	} catch(ex) {
		log(chalk.red(' ✘ Site is not available'));
	}

	// Check if if www/naked domain is redirecting
	try {
		// var res = request('GET', url, { followRedirects: false });
		// log(res.statusCode);

		// TODO
	} catch(ex) {

	}

	// TODO

});
