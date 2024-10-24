const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);});

app.get("/", (req, res) => {
    res.json({
        msg: "hello from API"
    })
    res.json({
        msg: "hello from API"
    })
})

const users = [
	{ id: 1, firstName: 'John', lastName: 'Doe', role: 'admin' },
	{ id: 2, firstName: 'Jane', lastName: 'Smith', role: 'user' },
	{ id: 3, firstName: 'Alice', lastName: 'Johnson', role: 'moderator' },
	{ id: 4, firstName: 'Bob', lastName: 'Brown', role: 'user' },
	{ id: 5, firstName: 'Charlie', lastName: 'Davis', role: 'admin' }
];
// GET : LIRE tous les utilisateurs
app.get("/users", (req, res) => {
	res.json(users)
})