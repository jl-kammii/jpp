const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Importez votre fichier JSON Swagger ici
const swaggerJS = require("swagger-jsdoc");
const option = swaggerJS(swaggerDocument);
const port = 3000;
const version = 'v1';
const router = require('./routes/routes');
const app = express();
const db = require('./DB/dbConnect')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api/${version}`, router);

// Middleware pour afficher la documentation Swagger
app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(option));

db.sync({ force: true }).then(() => {
  console.log('DBConnect est synchronisé')
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  const data = require('./model/data.json');
  const Music = require('./model/Music');
  data.forEach(async (music) => {
    await Music.create(music);
  })
})