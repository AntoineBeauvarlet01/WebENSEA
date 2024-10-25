const express = require("express")
const router = express.Router()

usersArray = [      { id: 1,  firstName: "Sophia", lastName: "Thomas" },
                    { id: 2,  firstName: "Christopher", lastName: "Jackson" },
                    { id: 3,  firstName: "Antoine", lastName: "BEAUVARLET" },
]

const db = require("../database")
const { getAllUsers, createNewUser, updateUser, deleteUser } = require("../controllers/usersControllers")

// GET: Retrieve all users (unchanged)
router.get("/users", getAllUsers );

// POST: Create a new user
router.post("/users",createNewUser);
  
// PUT: Update an existing user
router.put("/users/:id", updateUser);

// DELETE: Delete a user
router.delete("/users/:id", deleteUser);

module.exports = router