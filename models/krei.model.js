const sql = require('../databases/db.config.js');

exports.getUrl = (result) => {
    sql.query(`SELECT * FROM URL`, (err, res) => {
        if (err) {
            console.log("error: " + err);
            result(err, null);
            return;
        }


        if (res.length) {
            console.log("found URL: " + res);
            result(null, res);
            return;
        }


        result({kind: "not_found"}, null);
    })
}