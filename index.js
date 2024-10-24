const express = require('express');
const app = express();
const port = 3000;

//MIDDLEWARE
app.use(express.json());
//USER endpoint
const usersRouter = require("./routes/users.js")
app.use("/api/", usersRouter)



app.listen(port, () => {console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);});

app.get("/", (req, res) => {
    res.json({
        msg: "hello from API"
    })
})
app.post("/", (req, res) => {
    console.log(req.body);
    
	res.json({
		msg: "ici le post !!!",
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

// POST : Créer un nouvel utilisateur
app.post("/users", (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const newId = users.length + 1; // Générer un ID unique en fonction de la longueur du tableau
        const newUser = { id: newId, firstName, lastName };
        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        
    }

});

// DELETE : Supprimer un utilisateur
app.delete("/usersd/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({   
 error: 'Utilisateur non trouvé' });
    }

    users.splice(userIndex, 1);
    res.json({ message: 'Utilisateur supprimé' });
});