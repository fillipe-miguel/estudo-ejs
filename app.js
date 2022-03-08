const PORT = 3000;
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

let user = {
	id: 0,
	name: 'Fernando',
	phone: '(51)99525-5448',
	endereco: 'Rua castelo branco, n°234',
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('view', user);
});

// OLD BOY

// let render = (data, object) => {
// 	for (let key in object) {
// 		data = data.replace(`{{{${key}}}}`, user[key]);
// 	}
// 	return data;
// };

// app.get('/', (req, res) => {
// 	fs.readFile('./public/index.html', 'utf-8', (err, data) => {
// 		if (!err) {
// 			res.send(render(data, user));
// 		}
// 	});
// });

app.listen(PORT, () => {
	console.log(`Server rodando na porta ${PORT}`);
});
