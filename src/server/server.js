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

// Middleware para servir React (carpeta build)
const buildPath = path.join(__dirname, "../../build");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(buildPath, "index.html");
});

// app.get('/api/data', (req, res) => {
//     res.json({ message: 'Hello from Express!' });
// });

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
        descriptionShort: "15 peso' sale un paty acá, con 15 peso' me hago Alto Guiso",
        description: ["Voy a empezar contando una historia que cambió mi vida: el 7 de agosto del 2011 fue la fecha 1 del Torneo Apertura del fútbol argentino y Lanús le ganó 1-0 a San Lorenzo de visitante en el Nuevo Gasómetro. Lo más	importante no fue la victoria sino una frase de un hincha del 'granate' que quedó para el recuerdo:",
            "15 pesos sale un paty acá, con 15 pesos...con 15 pesos me hago alto guiso.",
            "Para la mayoría de la gente es insólito que una frase tan simple como esa signifique tanto. Resulta que en la época 15 pesos argentinos para un paty de cancha era mucho dinero y para un alto guiso no estabas muy lejos en dinero. Fue tanto lo que generó que se hicieron memes, temas musicales y hasta se creó el 'Indice Alto Guiso'	para medir la inflación en relación al precio del guiso.",
            "Incluso encontraron al señor Alto Guiso muchos años después de la histórica frase. Una historia bien argentina	sobre la inflación.",
            "Ahora vamos a la receta. Realmente no hay mucho para explicar, el primer paso es cortar la carne en cubitos y sellarla en una cacerola grande, mientras tanto cortar las verduras. Cuando la carne esté sellada reservar.",
            "Sin lavar la olla agregar las verduras y saltearlas con sal, luego volver a agregar la carne junto con el puré de tomate y un poco de agua o caldo hasta cubrir. Dejar cocinar por aproximadamente 40 minutos hasta que el líquido se reduzca. Servir muy caliente apenas apagado el fuego.",
            "Esta es una de las recetas más personalizables que existen. Se pueden agregar o reemplazar ingredientes como gusten: se puede agregar vino, legumbres, chorizo colorado, pollo...el cielo es el límite."
        ],
		altImage: "img/alto-guiso.jpg",
		type: "Salado",
		style: "Guisos",
		difficulty: "Fácil",
		country: "Argentina"
    });
});

app.get('/api', (req, res) => {
    const { title } = req.query;
    const allRecipes = [ 
        // GUISO DE FIDEOS MOÑITO
        {   
            id: 1,
            link: "/guiso-moñito",
            title: 'Guiso de Fideos Moñito',
            image: "img/guiso de fideos moñito.jpg",
            altImage: "img/jony de primero de mayo.jpeg",
            ingredients: [
                "Fideos Moñito: medio paquete",
                "Corte de carne económico: aprox. 500grs (puede ser de vaca o de cerdo)",
                "Puré de tomate: 1 lata o 1 caja",
                "Cebolla: 1",
                "Zanahoria: 1",
                "Ajo: 2 dientes",
                "Sal, Orégano, Pimentón y Ají Molido: a gusto"
            ],
            descriptionShort: "Una receta en homenaje a Johnny el hincha de Talleres, manjar de los dioses con los mejores fideos",
            description: ["Esta receta es un homenaje a un hincha de Talleres que dijo que haría un guiso de fideos moñito en una cena romántica con su señora. No dudó ni un solo segundo la respuesta.",
                "Esto es algo económico y muy sencillo ideal para el invierno. Primero vamos a picar la carne y la vamos a saltear vuelta y vuelta con aceite en una cacerola grande. Al mismo tiempo picamos la cebolla, zanahoria y ajo. Cuando la carne esté sellada la reservamos y salteamos las verduras con sal hasta que estén blandas.",
                "Volvemos a colocar la carne y luego incorporamos el puré de tomate y un poco de agua o caldo hasta cubrir.	Dejamos cocinar por 40 minutos aproximadamente y al final agregamos los fideos moñito, mezclamos todo hasta que	los fideos estén un poco menos cocidos que al dente y apagamos el fuego. Servir bien caliente.",
                "Esta es una de las recetas más personalizables que existen. Se pueden agregar o reemplazar ingredientes como gusten: se puede agregar vino, legumbres, chorizo colorado, pollo...el cielo es el límite."
            ],
            type: "Salado",
            style: "Guisos",
            difficulty: "Fácil",
            country: "Argentina"            
        },

        // ALTO GUISO
        {
            id: 2,
            link: "/alto-guiso",
            title: 'Alto Guiso',
            image: "img/alto guiso.jpg",
            altImage: "img/alto-guiso.jpg",
            ingredients: [
                "Corte de carne económico: aprox. 600grs (puede ser de vaca o de cerdo)",
                "Fideos, Arroz o legumbres: aprox. 250grs",
                "Puré de tomate: 1 lata o 1 caja",
                "Cebolla: 1",
                "Zanahoria: 1",
                "Ajo: 2 dientes",
                "Sal, Orégano, Pimentón y Ají Molido: a gusto"
            ],
            descriptionShort: "15 peso' sale un paty acá, con 15 peso' me hago Alto Guiso",
            description: ["Voy a empezar contando una historia que cambió mi vida: el 7 de agosto del 2011 fue la fecha 1 del Torneo Apertura del fútbol argentino y Lanús le ganó 1-0 a San Lorenzo de visitante en el Nuevo Gasómetro. Lo más	importante no fue la victoria sino una frase de un hincha del 'granate' que quedó para el recuerdo:",
                "15 pesos sale un paty acá, con 15 pesos...con 15 pesos me hago alto guiso.",
                "Para la mayoría de la gente es insólito que una frase tan simple como esa signifique tanto. Resulta que en la época 15 pesos argentinos para un paty de cancha era mucho dinero y para un alto guiso no estabas muy lejos en dinero. Fue tanto lo que generó que se hicieron memes, temas musicales y hasta se creó el 'Indice Alto Guiso'	para medir la inflación en relación al precio del guiso.",
                "El señor Alto Guiso se llama Ezequiel Espinoza, incluso apareció muchos años después de la histórica frase y ,contrario a lo que se cree por su fama repentina, siempre se mostró como una persona muy humilde. Una historia bien argentina sobre la inflación.",
                "Ahora vamos a la receta. Realmente no hay mucho para explicar, el primer paso es cortar la carne en cubitos y sellarla en una cacerola grande, mientras tanto cortar las verduras. Cuando la carne esté sellada reservar.",
                "Sin lavar la olla agregar las verduras y saltearlas con sal, luego volver a agregar la carne junto con el puré de tomate y un poco de agua o caldo hasta cubrir. Dejar cocinar por aproximadamente 40 minutos hasta que el líquido se reduzca. Servir muy caliente apenas apagado el fuego.",
                "Esta es una de las recetas más personalizables que existen. Se pueden agregar o reemplazar ingredientes como gusten: se puede agregar vino, legumbres, chorizo colorado, pollo...el cielo es el límite."
            ],
            altImage: "img/alto-guiso.jpg",
            type: "Salado",
            style: "Guisos",
            difficulty: "Fácil",
            country: "Argentina"
        },

        // CHEESECAKE
        {
            id: 3,
            link: "/cheesecake",
            title: "Cheesecake",
            image: "img/new-york-cheesecake.jpg",
            altImage: "",
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
            descriptionShort: "Si se prepara correctamente, esta es la mejor torta del mundo. No tengo dudas",
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
        },

        // BUDIN DE PAN
        {
            id: 4,
            link: "/budin-de-pan",
            title: "Budín de Pan",
            image: "img/budin de pan2.jpg",
            altImage: "img/budin de pan.jpg",
            ingredients: [
                "Pan: 500 grs",
                "Leche: 1 litro",
                "Huevos: 4",
                "Azúcar: 200 grs para el budín y 200 para el caramelo",
                "Esencia de vainilla: c/n",
            ],
            descriptionShort: "La mejor manera de aprovechar el pan viejo con pocos ingredientes",
            description: [
                "Este se va a transformar en uno de tus postres favoritos. Con pan viejo y muy pocos ingredientes podés hacer un postre de calidad de restaurante por muy poco dinero. Llevalo a un asado familiar y te van a amar.",
                "Empezamos cortando el pan en pedacitos con la mano y lo bañamos en 1 litro de leche, lo dejamos reposar en la heladera mientras preparamos el resto.",
                "Descripción 3",
                "Descripción 4",
                "Descripción 5",
            ],
            type: "Dulce",
            style: "Postres",
            difficulty: "Media",
            country: "Argentina"
        },

        // MENÚ CHICKEN KITCHEN
        {
            id: 5,
            link: "/chicken-kitchen",
            title: "Menú Chicken Kitchen",
            image: "img/chicken kitchen logo.png",
            altImage: "img/chicken kitchen menu 4.jpg",
            ingredients: [
                
            ],
            descriptionShort: "Chicken Kitchen busca ofrecer opciones rápidas de pollo pero saludables",
            description: [
                "Chicken Kitchen es una cadena de comida rápida de Florida especializada en pollo, pero busca ofrecer opciones saludables que te van a gustar mucho.",
                "El 'Chop-Chop' es un nombre interesante para uno de sus platos estrella, combinando pollo grillado con arroz en un bowl y distintas variantes.",
                "También tienen los 'wrapitos' que son algo parecido pero en una tortilla. Para los más simples tienen pechugas de pollo con acompañamientos o ensaladas.",
                "Les dejo el menú para que se inspiren en cocinar algo rico."
            ],
            type: "Menú",
            style: "",
            difficulty: "",
            country: "Estados Unidos"
        },

        // CHIVITO URUGUAYO
        {
            id: 6,
            link: "/chivito",
            title: "Chivito Uruguayo",
            image: "img/chivito al pan.jpg",
            altImage: "img/chivito al plato.jpg",
            ingredients: [
                "Pan para sandwich",
                "Carne cortada fina (nalga, lomo o cuadrada)",
                "Tiras de bacon",
                "Jamón cocido y queso de máquina",
                "Hojas de lechuga",
                "Tomate en rodajas",
                "Huevo frito",
                "Ensalada rusa",
                "Papas fritas"
            ],
            descriptionShort: "El Chivito Uruguayo es un sandwich increíble que es una de las comidas más típicas del país vecino",
            description: [
                "Esta preparación es impresionante, los uruguayos le pusieron absolutamente todo junto a un sandwich: lechuga, tomate, jamón, queso, huevo frito, bacon, ensalada rusa...una maravilla. También se puede hacer al plato que es mi forma de chivito favorita.",
                "La clave de este sandwich es tener todos los ingredientes preparados para poder armarlo en poco tiempo, está en dificultad media porque son muchos ingredientes para preparar.",
                "Lo primero que tenemos que hacer es preparar la ensalada rusa que va a ser uno de los acompañamientos, también las papas fritas y el huevo frito. Luego simplemente cortamos la lechuga, el tomate y preparamos el jamón y el queso.",
                "Por último cocinamos la carne con el bacon 'vuelta y vuelta' más el queso para que se derrita, clave tostar el pan para más sabor. Ensamblamos el sandwich con la carne abajo y por encima todo lo demás: queso, jamón, tomate, lechuga y huevo frito. Acompañamos con las papas fritas y la ensalada rusa al costado.",
                "También se puede hacer sin pan con un proceso muy parecido. Algunos uruguayos le ponen pickles...por favor no hagan eso.",
                "A disfrutar esta maravilla. ¡Vamo' arriba! ¡Uruguay nomá!"
            ],
            type: "Salado",
            style: "Sandwiches",
            difficulty: "Media",
            country: "Uruguay"
        },

        // ASADO
        {
            id: 7,
            link: "/asado",
            title: "Asado",
            image: "img/asado.jpg",
            altImage: "img/asado2.jpg",
            ingredients: [
                "Bolsa de carbón",
                "Chorizo: 2 unidades",
                "Morcilla: 2 unidades",
                "Asado de tira: 500 grs",
                "Vacío: 500 grs",
                "Pan: c/n",
                "Chimichurri y salsa criolla"
            ],
            descriptionShort: "El asado es un placer de los dioses, la mejor comida de Argentina y Uruguay",
            description: [
                "El asado no es simplemente cocinar carne a la parrilla, es un motivo para reunir a la familia y a los amigos acompañado de picada, mates, charlas, truco y más.",
                "No hay una forma específica de hacer el asado ya que hay muchas parrillas, cortes de carne y más variantes. Acá voy a mostrar un asado clásico para dos personas pero se pueden agregar más cortes que voy a hablar más adelante.",
                "Para prender el fuego hay que colocar una buena cantidad de papel de diario junto a una buena cantidad de madera y carbón. El papel es lo que prende rápido y la madera es lo que debe agarrar el fuego para que la brasa se pueda hacer. Es importante mantener la brasa bien encendida y que no se apague para poder cocinar la carne.",
                "Si no tenemos pollo (que es de lo que más tarda en hacerse) primero vamos a colocar el vacío o cualquiera de los cortes más gruesos junto con el chorizo, luego el asado de tira que no tarda mucho. Al final se cocina la morcilla que es simplemente calentarla en la parrilla.",
                "En el medio uno la pasa bien con familia o amigos. Como guarnición se pueden hacer papas fritas o ensalada que son los acompañamientos más típicos, se sirve idealmente junto con chimichurri y salsa criolla.",
                "Otros cortes para el asado pueden ser: pollo, tapa de asado, chinchulín, riñón, molleja o provoleta. Hay un mundo inmenso en esta maravilla."
            ],
            type: "Salado",
            style: "Carne",
            difficulty: "Difícil",
            country: "Argentina"
        },

        // PIZZA CASERA
        {
            id: 8,
            link: "/pizza",
            title: "Pizza casera",
            image: "img/pizza.jpg",
            altImage: "img/pizza2.jpg",
            ingredients: [
                "Harina 00: 500 grs",
                "Agua: 330 ml",
                "Azúcar: 1 cucharada",
                "Levadura: 5 grs",
                "Sal: 5 grs",
                "Salsa de tomate: a gusto",
                "Queso mozzarella: a gusto"
            ],
            descriptionShort: "La pizza es una comida increíble muy importante en Argentina y es muy sencilla de hacer en casa",
            description: [
                "Descripción 1",
                "Descripción 2",
                "Descripción 3",
                "Descripción 4",
                "Descripción 5",
                "Descripción 6"
            ],
            type: "Salado",
            style: "Panes y Pizzas",
            difficulty: "Media",
            country: "Italia"
        },
    ];
  
    const filteredRecipes = title
      ? allRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(title.toLowerCase())
        )
      : allRecipes;
  
    return res.json({ recipes: filteredRecipes });
});

export default function handler(req, res) {
  res.status(200).json({ msg: "Hola desde la API en Vercel 🚀" });
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});