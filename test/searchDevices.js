var WeMo = require('../wemo');

// Search All Devices
var client = WeMo.Search();
client.on('found', function(device) {
	console.log(device);
	setTimeout(function() {
		client.stop();
	}, 3000);
});
