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

// app.get('/api/data', (req, res) => {
//     res.json({ message: 'Hello from Express!' });
// });


// GUISO DE FIDEOS MOÑITO
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
        ],
		type: "Salado",
		style: "Guisos",
		difficulty: "Fácil",
		country: "Argentina"
    });
});

// ALTO GUISO
app.get('/api/alto-guiso', (req, res) => {
    res.json({ 
        id: 2,
        title: 'Alto Guiso',
        image: "img/alto guiso.jpg",
        ingredients: [
            "Corte de carne económico: aprox. 600grs (puede ser de vaca o de cerdo)",
            "Fideos, Arroz o legumbres: aprox. 250grs",
            "Puré de tomate: 1 lata o 1 caja",
            "Cebolla: 1",
            "Zanahoria: 1",
            "Ajo: 2 dientes",
            "Sal, Orégano, Pimentón y Ají Molido: a gusto"
        ],
        description: ["Voy a empezar contando una historia que cambió mi vida: el 7 de agosto del 2011 fue la fecha 1 del Torneo Apertura del fútbol argentino y Lanús le ganó 1-0 a San Lorenzo de visitante en el Nuevo Gasómetro. Lo más	importante no fue la victoria sino una frase de un hincha del 'granate' que quedó para el recuerdo:",
            "15 pesos sale un paty acá, con 15 pesos...con 15 pesos me hago alto guiso.",
            "Para la mayoría de la gente es insólito que una frase tan simple como esa signifique tanto. Resulta que en la época 15 pesos argentinos para un paty de cancha era mucho dinero y para un alto guiso no estabas muy lejos en dinero. Fue tanto lo que generó que se hicieron memes, temas musicales y hasta se creó el 'Indice Alto Guiso'	para medir la inflación en relación al precio del guiso.",
            "Incluso encontraron al señor Alto Guiso muchos años después de la histórica frase. Una historia bien argentina	sobre la inflación.",
            "Ahora vamos a la receta. Realmente no hay mucho para explicar, el primer paso es cortar la carne en cubitos y sellarla en una cacerola grande, mientras tanto cortar las verduras. Cuando la carne esté sellada reservar.",
            "Sin lavar la olla agregar las verduras y saltearlas con sal, luego volver a agregar la carne junto con el puré de tomate y un poco de agua o caldo hasta cubrir. Dejar cocinar por aproximadamente 40 minutos hasta que el líquido se reduzca. Servir muy caliente apenas apagado el fuego.",
            "Esta es una de las recetas más personalizables que existen. Se pueden agregar o reemplazar ingredientes como gusten: se puede agregar vino, legumbres, chorizo colorado, pollo...el cielo es el límite."
        ],
		type: "Salado",
		style: "Guisos",
		difficulty: "Fácil",
		country: "Argentina"
    });
});

// CHEESECAKE
app.get('/api/cheesecake', (req, res) => {
	res.json({
		id: 3,
		title: "Cheesecake",
		image: "img/new-york-cheesecake.jpg",
		ingredients: [
			"Ingrediente 1",
			"Ingrediente 2",
			"Ingrediente 3",
			"Ingrediente 4",
			"Ingrediente 5",
			"Ingrediente 6",
			"Ingrediente 7",
			"Ingrediente 8",
		],
		description: [
			"Descripción 1",
			"Descripción 2",
			"Descripción 3",
			"Descripción 4",
			"Descripción 5",
		],
		type: "Dulce",
		style: "Tortas",
		difficulty: "Media",
		country: "Estados Unidos"
	})
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});