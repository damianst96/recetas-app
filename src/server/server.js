const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// let db = require("./data/models");
// const Op = db.Sequelize.Op;

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.get('/api/guiso-monito', (req, res) => {
    res.json({ 
        id: 1,
        title: 'Guiso de Fideos Moñito',
        image: "img/guiso de fideos moñito.jpg",
        ingredients: [
            "Fideos Moñito: medio paquete",
            "Corte de carne económico: aprox. 500grs (puede ser de vaca o de cerdo)",
            "Puré de tomate: 1 lata o 1 caja",
            "Cebolla: 1",
            "Zanahoria: 1",
            "Ajo: 2 dientes",
            "Sal, Orégano, Pimentón y Ají Molido: a gusto"
        ],
        description: ["Esta receta es un homenaje a un hincha de Talleres que dijo que haría un guiso de fideos moñito en una cena romántica con su señora. No dudo ni un solo segundo en responder a la pregunta.",
            "Esto es algo económico y muy sencillo ideal para el invierno. Primero vamos a picar la carne y la vamos a saltear vuelta y vuelta con aceite en una cacerola grande. Al mismo tiempo picamos la cebolla, zanahoria y ajo. Cuando la carne esté sellada la reservamos y salteamos las verduras con sal hasta que estén blandas.",
            "Volvemos a colocar la carne y luego incorporamos el puré de tomate y un poco de agua o caldo hasta cubrir.	Dejamos cocinar por 40 minutos aproximadamente y al final agregamos los fideos moñito, mezclamos todo hasta que	los fideos estén un poco menos cocidos que al dente y apagamos el fuego. Servir bien caliente.",
            "Esta es una de las recetas más personalizables que existen. Se pueden agregar o reemplazar ingredientes como gusten: se puede agregar vino, legumbres, chorizo colorado, pollo...el cielo es el límite."
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});