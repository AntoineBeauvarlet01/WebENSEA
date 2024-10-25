const express = require("express")
const router = express.Router()


const db = require("../database")
const { getAllUsers, createNewUser, updateUser, deleteUser, getUsersID,page } = require("../controllers/usersControllers")

// GET: Retrieve all users (unchanged)
router.get("/users", getAllUsers );

// GET: Retrieve all users (unchanged)
router.get("/users/:id", getUsersID );

// POST: Create a new user
router.post("/users",createNewUser);
  
// PUT: Update an existing user
router.put("/users/:id", updateUser);

// DELETE: Delete a user
router.delete("/users/:id", deleteUser);

//page
router.get('/page', page);
  

module.exports = router