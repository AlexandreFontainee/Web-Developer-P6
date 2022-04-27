const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// gestion des chemins de fichiers
const path = require("path");

require('dotenv').config();
const log = process.env.Mongoose_Log;


// routes
const userRoutes = require('./routes/userRoutes');
const sauceRoutes = require("./routes/sauces");

mongoose.connect(log,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
//     next()
// })


// app.use(bodyParser.json());
app.use(express.json());
app.use(cors({origin: "http://127.0.0.1:8081"}));

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);
// routes 


module.exports = app;
