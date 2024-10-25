const db = require("./database")

// Données à insérer
const users = [
    { id: 1,  firstName: "John", lastName: "Doe" },
    { id: 2,  firstName: "Jane", lastName: "Smith" },
    { id: 3,  firstName: "Emily", lastName: "Johnson" },
    { id: 4,  firstName: "Michael", lastName: "Brown" },
    { id: 5,  firstName: "Sarah", lastName: "Davis" },
    { id: 6,  firstName: "David", lastName: "Wilson" },
    { id: 7,  firstName: "Laura", lastName: "Miller" },
    { id: 8,  firstName: "James", lastName: "Moore" },
    { id: 9,  firstName: "Olivia", lastName: "Taylor" },
    { id: 10,  firstName: "Daniel", lastName: "Anderson" },
    { id: 11,  firstName: "Sophia", lastName: "Thomas" },
    { id: 12,  firstName: "Christopher", lastName: "Jackson" },
    { id: 13,  firstName: "Antoine", lastName: "BEAUVARLET" },
]
const usersArray = require("./routes/users"); // Import de usersArray
// Fonction pour insérer les utilisateurs
function insertUsers() {
    users.forEach((user) => {
        db.run(
            `INSERT INTO users (firstName, lastName) VALUES (?, ?)`,
            [user.firstName, user.lastName],
            (err) => {
                if (err) {
                    console.error("Erreur lors de l'insertion de l'utilisateur :", err.message)
                } else {
                    console.log(`Utilisateur inséré : ${user.firstName} ${user.lastName}`)
                    // Ajouter l'utilisateur au tableau usersArray
                    usersArray.push(user);

                }
            }
        )
    })
}

// Exécuter la fonction d'insertion
insertUsers()