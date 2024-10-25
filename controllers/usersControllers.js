const db = require("../database")

exports.getAllUsers = function (req, res) {
	db.all("SELECT * FROM users", [], (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
		} else {
			res.json(rows)
		}
	})
}


exports.createNewUser = function (req, res)  {
    try {
        const {  firstName, lastName } = req.body;


        // regex pour alphanumérique seulement
        function isAlphanumeric(str) {
            const regex = /^[a-zA-Z0-9]+$/
            console.log(regex.test(str))
            return regex.test(str)
        }


        // Validate user data (optional but recommended)
        if ( !firstName || !lastName  ) 
            return res.status(400).json({ error: "Le prénom et le nom de famille sont requis !" });
        if ( firstName === "Claire")
            return res.status(400).json({ error: "Weird name" });
        if (!isAlphanumeric(firstName))
            return res.status(400).json({ error: "Ce nom n'est pas autorisé !" })
    
        db.run(
            "INSERT INTO users (firstName, lastName) VALUES (?, ?)",
            [firstName, lastName],
            function (err) {
                if (err) {
                    res.status(500).json({ error: err.message })
                } else {
                    res.status(201).json({ id: this.lastID, firstName })
                }
            }
        )
      
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}