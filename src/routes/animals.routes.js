const express = require("express")

const animalRouter = express.Router();
const { getAnimals, getAnimal, createAnimal, updateAnimal, deleteAnimal} = require("../controllers/animal.controller");
const { isAuth } = require("../middlewares/auth.middleware");

animalRouter.get("/", getAnimals );
animalRouter.get("/:id", getAnimal );
animalRouter.post("/", [isAuth], createAnimal);
animalRouter.patch("/:id", updateAnimal);
animalRouter.delete("/:id", [isAuth], deleteAnimal);

module.exports = animalRouter;
