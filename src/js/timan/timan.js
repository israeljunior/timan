#!/usr/bin/env node

const program = require('commander')
const moment = require('moment')
const timezone = require('moment-timezone')

const space = '     '

function getTime(zone, format) {
	format = format === '24h' ? 'HH:mm' : 'LT'

	console.log()

	console.log('\x1b[35m%s\x1b[0m', space + 'Here')
	console.info(space + moment().format(format))
	
	console.log()

	if(zone) {
		console.log('\x1b[35m%s\x1b[0m', space + zone)
		console.info(space + moment().tz(zone).format(format + ' z'))
	}
	
	console.log()
}

program
	.version('0.0.2')
	.description('Get timezone in terminal')

program
	.command('now [zone]')
	.option('-f, --format <format>', 'format time', )
	.action((env, options) => {
		getTime(env, options.format)
	})
	

program
	.parse(process.argv);
