const PersonController = require('../controllers/authors.controller');
module.exports = function(app){
    app.post('/api/author', PersonController.createAuthor);
    app.get('/api/authors', PersonController.getAllAuthor);
    app.get('/api/author/:id', PersonController.getAuthor);
    app.put('/api/author/:id',PersonController.updateAuthor);
    app.delete('/api/author/:id',PersonController.deleteAuthor);
}