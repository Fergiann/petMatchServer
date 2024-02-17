const express = require("express")

const usersRouter = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser} = require("../controllers/users.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

usersRouter.get("/", getUsers );
usersRouter.get("/:id", getUser );
usersRouter.post("/",  createUser);
usersRouter.patch("/:id", updateUser);
usersRouter.delete("/:id",  deleteUser);

module.exports = usersRouter;
