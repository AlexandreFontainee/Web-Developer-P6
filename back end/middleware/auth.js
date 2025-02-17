const jwt = require("jsonwebtoken");
const Sauce = require("../models/Sauce");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_NEW_TOKEN_ASSIGNED");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      // Si userId existe, vérifier par rapport au userId dans le token
      throw "Invalid user ID";
    } else if (req.method === "DELETE" || req.method === "PUT") {
      // Si c'est un DELETE ou PUT, vérifier si le créateur de la sauce est bien le user depuis token
      Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
          if (sauce.userId !== userId) {
            res.status(401).json({
              error: "requête non autorisé",
            });
          } else {
            next();
          }
        })
        .catch((error) => res.status(404).json({ error: error.message }));
    } else {
      next();
    }
  } catch(error){
    console.log(error);
    res.status(401).json({
      error: "requête non autorisé",
    });
  }
};