const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

app.use(fileUpload());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.send('<h1>SERVER</h1>');
});
app.use('/uploads', express.static(__dirname + '/uploads'));
app.post('/upload', (req, res) => {
	const obj = Object.assign({}, req.files);

	const imageFile = obj.file;
	imageFile.mv(`${__dirname}/uploads/${imageFile.name}`, function (err) {
		if (err) {
			return res.status(500).send(err);
		}

		res.json({file: `/uploads/${imageFile.name}`});
	});
});

const PORT = 7255;
app.listen(PORT, () => {
	console.log('PORT ', PORT);
	console.log(__dirname);
});
