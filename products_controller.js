module.exports = {
    create:(req,res,next) =>{
        const dbInstance = req.app.get('db');
        const { name, description, price, imageurl } = req.body;

        dbInstance.create_product()
        .then(() => res.sendStatus(200))
        .catch(err=>{res.status(500).send({errorMessage: 
        "How are you gentlemen? All your base are belong to us."+
        "You have no chance to survive, make your time. Ha ha ha." })
    console.log(err)})},
   

    update: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
        dbInstance.read_product()
        .then(() => res.sendStatus(200))
        .catch(err=>{res.status(500).send({errorMessage: 
        "How are you gentlemen? All your base are belong to us."+
        "You have no chance to survive, make your time. Ha ha ha." })
    console.log(err)})},
    

    delete: (req,res,next) =>{
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.read_products()
        .then(() => res.sendStatus(200))
        .catch(err=>{res.status(500).send({errorMessage: 
        "How are you gentlemen? All your base are belong to us."+
        "You have no chance to survive, make your time. Ha ha ha." })
    console.log(err)})},

    getOne: (req,res,next) =>{
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.update_roduct()
        .then(() => res.sendStatus(200))
        .catch(err=>{res.status(500).send({errorMessage: 
        "How are you gentlemen? All your base are belong to us."+
        "You have no chance to survive, make your time. Ha ha ha." })
    console.log(err)})},

    getAll: (req,res,next) =>{
        const dbInstance = req.app.get('db');

        dbInstance.delete_product()
        .then(() => res.sendStatus(200))
        .catch(err=>{res.status(500).send({errorMessage: 
        "How are you gentlemen? All your base are belong to us."+
        "You have no chance to survive, make your time. Ha ha ha." })
    console.log(err)})}
}