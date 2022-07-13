const router = require('express').Router();         //accedemos a las rutas definidas para el servidor
const Peliculas = require('../modelos/Peliculas');    //utilizamos el esquema de Animales

router.get('/', (req,res) =>{           //ruta GET inicial
    res.redirect('todos');               //redireccionado a la vista inicio.hbs
});

router.get('/todos', async (req,res) =>{                //ruta GET para todos los animales                             
    const peliculas = await Peliculas.find().lean();      //busca en la BD todos los animales  
    res.render('todos', {peliculas});                    //redireccionado a la vista todos.hbs
});


router.get('/genero', async (req,res) =>{                //ruta GET para todos los paises                             
    const genero = await Peliculas.distinct('genero');      //busca los distintos paises  
    res.render('genero', {genero});                    //redireccionado a la vista paises.hbs
});

router.get('/todos/genero/:genero', async (req,res) =>{    //ruta GET para todos los animales filtrando por pais
    const generos = await Peliculas.find({'genero':req.params.genero}).lean();      
                //busca filtando por el parámetro que recibe por :pais en la ruta  (se para por req.params.pais)
    res.render('todos', {generos});                    //redireccionado a la vista todos.hbs (pero filtada)
});

router.get('/todos/ordenadoA', async (req,res) =>{      //ruta GET para todos los animales ordenados                            
    const peliculas = await Peliculas.find().sort({titulo:-1}).lean();      //ordena ascendentemente los animales  
    res.render('todos', {peliculas});                    //redireccionado a la vista todos.hbs
});

router.get('/todos/ordenadoB', async (req,res) =>{      //ruta GET para todos los animales ordenados                            
    const peliculas = await Peliculas.find().sort({titulo:1}).lean();      //ordena descendentemente los animales  
    res.render('todos', {peliculas});                    //redireccionado a la vista todos.hbs
});
router.post('/delete', async (req,res) =>{                //ruta GET para todos los animales                             
    const peliculas = await Peliculas.find().lean();      //busca en la BD todos los animales  
    res.render('todos', {peliculas});                    //redireccionado a la vista todos.hbs
});
router.get('/insert', async (req,res) =>{
    res.render('insert');     
});
router.post('/insert/add', async (req,res) =>{
    const peliculas = Peliculas(req.body)
    await peliculas.save()
    res.redirect("/")
});
router.get('/edit', async (req,res) =>{
    const peliculas = await Peliculas.find().lean();
    res.render('edit', {peliculas});      
});
router.get('/edit/update/:id', async (req,res) =>{
    const peliculas = await Peliculas.findById(req.params.id).lean()
    res.render('update', { peliculas });          
});
router.post('/edit/update/:id', async (req,res) =>{
    const {id} = req.params
    await Peliculas.findByIdAndUpdate(id, req.body)
    res.redirect("/")        
});
router.get('/delete', async (req,res) =>{
    const peliculas = await Peliculas.find().lean();
    res.render('delete', {peliculas});      
});
router.get('/delete/:id', async (req,res) =>{
    const {id} = req.params;
    await Peliculas.findByIdAndDelete(id);
    res.redirect("/");
});


module.exports = router;           //exporta las rutas para ser utilizada por otras páginas