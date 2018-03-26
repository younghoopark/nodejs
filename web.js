const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => res.send('Hello World!'))

var seq = 0


app.get('/update', function(req, res) {
	fs.appendFile('update.txt', JSON.stringify(req.query)+"\n", function (err) {
		if (err) throw err
		console.log("%j", req.query)
		res.end("Got "+ String(seq++) + " "+ JSON.stringify(req.query))
	});
})

app.get('/get', function(req, res){
		fs.readFile('update.txt', 'utf-8', function(err, data){
			res.end(data);
		});
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
