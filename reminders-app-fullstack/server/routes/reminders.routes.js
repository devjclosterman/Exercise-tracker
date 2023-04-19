const Controller = require("../controllers/reminders.controller");

module.exports = app => {
    app.get('/api/all', Controller.index);
    app.get("/api/:_id", Controller.findOne)
    app.post('/api/create', Controller.create);
    app.put('/api/:_id', Controller.update);
    app.delete('/delete/:_id', Controller.delete);
}