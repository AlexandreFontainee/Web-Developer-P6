const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// routes
const userRoutes = require('./routes/userRoutes');

mongoose.connect('mongodb+srv://alexandre:NewPassword44@cluster0.k8pza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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
app.use("/api/auth", userRoutes);

// routes 



module.exports = app;
