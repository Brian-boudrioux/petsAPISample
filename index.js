const express = require("express");
const app = express();
const port = 3001;
const pets = require("./pets.json");

app.use(express.json());


app.get("/", ({res}) => {
    res.send("Welcome to the pets API !");
});

app.get("/pets", (req, res) => {
    if (req.query.limit) {
        const data = pets.filter((pet, index) => index < parseInt(req.query.limit));
        res.json(data);
    }
    else {
        res.json(pets);
    }
});

app.get("/pets/:id", (req, res) => {
    const element = pets.find((elmt) => elmt.id == req.params.id);

    if (element) {
        res.json(element);
    }
    else {
        res.sendStatus(404);
    }
})

app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});

