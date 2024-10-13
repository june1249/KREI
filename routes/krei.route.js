module.exports = app => {
    const kreiCtrl = require('../controllers/krei.controller.js');
    app.get("/krei", kreiCtrl.getUrl);
}