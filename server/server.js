const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.resolve(__dirname, 'public'), {
	fallthrough: false,
}));

app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

const PORT = process.env.PORT || process.env.port || 3000;
app.listen({
	port: PORT
}, function () {
	console.log(`Exercise Server listens on port ${PORT}`);
});
