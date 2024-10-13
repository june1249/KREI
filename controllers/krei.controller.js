const Krei = require('../models/krei.model.js');

exports.getUrl = (req, res) => {
    Krei.getUrl((err, data) => {
        if (err) {
            console.log("err: ", err.kind);
            if (err.kind === "not_found") {
                res.send(null);
            } else {
                res.status(500).send({
                   message: `Error retriving URL with is_used ${req.params.is_used}.` 
                });
            }
        } else {
            res.send(data);
        }
    });
}