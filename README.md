# prm-request
  Slim promise wrapper for http.request

```shell
npm install --save prm-request
```

## Examples

```js
const prmRequest = require('prm-request');

let options =
{
	host: 'google.com'
};

let response = await prmRequest(options);

//If you pass a callback as second argument it will be called with the created request
let response = await prmRequest(options, (request) =>
{
	request.write('My post data');
	request.end();
	//If request is called without callback, request.end() is called automatically
});
```

## API

### `request(options, [requestCreated])`

#### arguments

- `options: object, same as used for http.request`
- `requestCreated: function, called after the request is created`  

#### returns

- `Promise`
