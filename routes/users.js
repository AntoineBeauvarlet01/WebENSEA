const express = require("express")
const router = express.Router()

usersArray = [      { id: 1,  firstName: "Sophia", lastName: "Thomas" },
                    { id: 2,  firstName: "Christopher", lastName: "Jackson" },
                    { id: 3,  firstName: "Antoine", lastName: "BEAUVARLET" },
]

const db = require("../database")
const { getAllUsers, createNewUser, updateUser } = require("../controllers/usersControllers")

// GET: Retrieve all users (unchanged)
router.get("/users", getAllUsers );

// POST: Create a new user
router.post("/users",createNewUser);
  
// PUT: Update an existing user
router.put("/users/:id", updateUser);

// DELETE: Delete a user
router.delete("/users/:id", (req, res) => {
try {
    const userId = parseInt(req.params.id);
    const userIndex = usersArray.findIndex(usersArray => usersArray.id === userId);

    if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
    }

    usersArray.splice(userIndex, 1);
    res.json({ message: "User deleted" });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
}
});




module.exports = usersArray;
module.exports = router