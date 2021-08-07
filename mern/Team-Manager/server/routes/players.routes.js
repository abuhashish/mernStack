const PersonController = require('../controller/player.route');
module.exports = function(app){
    app.post('/api/player', PersonController.createPlayer);
    app.get('/api/players', PersonController.getAllPlayer);
    app.get('/api/player/:id', PersonController.getPlayer);
    app.put('/api/player/:id',PersonController.updatePlayer);
    app.delete('/api/player/:id',PersonController.deletePlayer);
}