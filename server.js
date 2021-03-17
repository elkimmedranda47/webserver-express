const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));



const port = process.env.PORT || 3000;





//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');






app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Elkim medranda',
        // anio: new Date().getFullYear(),

    });
});


app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Elkin Andres',
        // anio: new Date().getFullYear(),
        about_img: 'assets/img/img1.jpg',
        nosotro: 'We Are The Champions'

    });
});


app.listen(port, () => {
    console.log(`Escuchando por el peticiones en el puerto ${port}`);
})