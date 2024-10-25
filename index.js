const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js")

//MIDDLEWARE
app.use(express.json());
//USER endpoint
app.use("/api/", usersRouter)

app.get("/", (req, res) => {
 //   res.json({        msg: "hello from API"    })
    console.log('node seed.js')
})

app.listen(port, () => {console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);});