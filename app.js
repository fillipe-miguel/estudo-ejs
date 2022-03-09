const PORT = 3000;
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

let users = [
	{
		id: 0,
		name: 'Fernando',
		phone: '(51)99525-5448',
		endereco: 'Rua castelo branco, n°234',
	},
	{
		id: 1,
		name: 'Robson',
		phone: '(51)99123-5238',
		endereco: 'Rua fernando de noronha, n°24',
	},
	{
		id: 2,
		name: 'Adriana',
		phone: '(51)93091-2934',
		endereco: 'Rua porto-alegre, n°1234',
	},
];

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	// O objeto passado aqui tem que ser a mesma key passada no documento view!!!!!
	res.render('home', { users });
});

app.get('/about', (req, res) => {
	res.render('about');
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
