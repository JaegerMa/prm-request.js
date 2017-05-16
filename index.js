'use strict';

const http = require('http');
const https = require('https');

function request(options, requestCreated)
{
	if(!options || typeof(options) !== 'object')
		throw new Error('options must be an object');
	if(requestCreated && typeof(requestCreated) !== 'function')
		throw new Error('requestCreated must be a function or null');

	return new Promise((resolve, reject) =>
	{
		let request;
		if(options.protocol === 'http')
		{
			request = http.request(options, resolve);
		}
		else if(options.protocol === 'https')
		{
			request = https.request(options, resolve);
		}
		else
		{
			reject('Unknown protocol ' + options.protocol);
			return;
		}

		request.on('error', reject);

		if(requestCreated)
			requestCreated(request);
		else
			request.end();
	});
}

module.exports = request;
