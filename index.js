const express = require('express');
const bodyParser = require('massive');
const massive = require('massive');
const app = express();
require ('dotenv').config();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('Server listening on port ${port}.')});

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
})
.catch(err => console.log(err));

app.post('api/products',products_controller.create)
app.get('api/products',products_controller.getAll)
app.get('api/products/:id', prodcuts_controller.getOne)
app.put('api/products/:id', products_controller.update)
app.delete('api/products/:id', products_controller.delete)