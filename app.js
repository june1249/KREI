const express = require('express');
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

dotenv.config({ path: path.join(__dirname, 'env/.env.develop') })

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello');
});

require('./routes/krei.route.js')(app);

app.listen(5000, () => {
    console.log('server is running');
});