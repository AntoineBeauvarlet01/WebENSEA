pour lancer : 
node .\index.js

npm start

recupérer la liste des users :

    GET          http://localhost:3000/api/users


ajout un user avec body :

    POST         http://localhost:3000/api/users/          

    body : 
    {
        "id": 4,
        "firstName": "George RUSH",
        "lastName": "Saint-Pierre"
    }

changer un user :

PUT          http://localhost:3000/api/users/  "numID"
    {
        "firstName": "George RUSH",
        "lastName": "ST-Pierre"
    }


DELET        http://localhost:3000/api/users/  "numID"