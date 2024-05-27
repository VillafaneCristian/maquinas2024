const express = require ('express');
const path = require ('path');
const methodOverride = require ('method-override');
const session = require ('express-session'); 
const app = express();

/*********** middleware para que express vea a la carpeta public como carpeta de archivos publicos ***************/
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

/**********middleware para poder usar los metodos PUT y DELETE sobreescribiendo el metodo POST ***/
app.use(methodOverride('_method')); 

/* middleware para que se pueda capturar la información que viene en los formularios en el body */
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/******************** seteo del middleware express-session **********************/
app.use(session({
    secret: 'Its a secret',
    resave: false
}));

/*seteo de ejs como template engine y de la carpeta views como la carpeta de contendrá las vistas */
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views')); // se define cual será la carpeta que contendran las vistas


/************* Ruteo a main (ruta principal de la aplicación) *******************************/
const mainRoutes = require ('./routes/mainRoutes.js');
app.use('/', mainRoutes);


/* ponemos a escuchar el servidor en el puerto 3000 */
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

