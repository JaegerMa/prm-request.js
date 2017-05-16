'use strict';

const http = require('http');

function request(options, requestCreated)
{
	if(!options || typeof(options) !== 'object')
		throw new Error('options must be an object');
	if(requestCreated && typeof(requestCreated) !== 'function')
		throw new Error('requestCreated must be a function or null');

	return new Promise((resolve, reject) =>
	{
		let request = http.request(options, resolve);
		request.on('error', reject);

		if(requestCreated)
			requestCreated(request);
		else
			request.end();
	});
}

module.exports = request;
