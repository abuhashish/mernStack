const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.post('/api/product', PersonController.createProduct);
    app.get('/api/products', PersonController.getAllProduct);
    app.get('/api/product/:id', PersonController.getProduct);
    app.put('/api/product/:id',PersonController.updateProduct);
    app.delete('/api/product/:id',PersonController.deleteProduct);
}