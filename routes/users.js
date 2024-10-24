const express = require("express")
const router = express.Router()

usersArray = [  
    { id: 1, firstName: 'John', lastName: 'Doe', role: 'admin' },
	{ id: 2, firstName: 'Jane', lastName: 'Smith', role: 'user' },
	{ id: 3, firstName: 'Alice', lastName: 'Johnson', role: 'moderator' },
	{ id: 4, firstName: 'Bob', lastName: 'Brown', role: 'user' },
	{ id: 5, firstName: 'Charlie', lastName: 'Davis', role: 'admin' }
]

// GET: Retrieve all users (unchanged)
router.get("/users", (req, res) => {
    res.json(usersArray);
  });
  
  // POST: Create a new user
  router.post("/users", (req, res) => {
    try {
      // Validate user data (optional but recommended)
      const { firstName, lastName, role } = req.body;
      if (!firstName || !lastName || !role) {
        return res.status(400).json({ error: "Missing required user data" });
      }
  
      // Generate a unique ID (consider using a more robust method like UUID)
      const newId = usersArray.length ? usersArray[usersArray.length - 1].id + 1 : 1;
  
      const newUser = { id: newId, firstName, lastName, role };
      usersArray.push(newUser);
  
      res.status(201).json(newUser); // Created
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
// PUT: Update an existing user
router.put("/users/:id", (req, res) => {
try {
    const userId = parseInt(req.params.id);
    const { firstName, lastName, role } = req.body;

    const userIndex = usersArray.findIndex(user => user.id === userId);
    if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
    }

    // Validate updated user data (optional but recommended)

    usersArray[userIndex] = { ...usersArray[userIndex], firstName, lastName, role };
    res.json(usersArray[userIndex]); // Updated user
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
}
});

// DELETE: Delete a user
router.delete("/users/:id", (req, res) => {
try {
    const userId = parseInt(req.params.id);
    const userIndex = usersArray.findIndex(user => user.id === userId);

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

module.exports = router