const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/characters", (req, res) => {
    const characters = [];
    characters[0] = {
        name: "Drake Parker",
        actor: "Drake Bell",
        relation: "Son",
        img: "images/drake.jpg",
    };

    characters[1] = {
        name: "Josh Nichols",
        actor: "Josh Peck",
        relation: "Step Brother",
        img: "images/josh.jpg",
    };

    characters[2] = {
        name: "Audrey",
        actor: "Nancy Sullivan",
        relation: "Drake and Megan's Biological Mother",
        img: "images/audrey.jpg",
    };

    characters[3] = {
        name: "Walter Nichols",
        actor: "Jonathan Goldstein",
        relation: "Josh's Biological Dad",
        img: "images/walter.jpg",
    };

    characters[4] = {
        name: "Megan Parker",
        actor: "Miranda Cosgrove",
        relation: "Daughter",
        img: "images/miranda.jpg",
    };

    characters[5] = {
        name: "Crazy Steve",
        actor: "Jerry Trainor",
        relation: "Movie Theater Employee",
        img: "images/steve.png",
    };

    res.json(characters);
});

app.listen(3000, () => {
    console.log("listening");
});