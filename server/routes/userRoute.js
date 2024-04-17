import express from "express";
import { create, getAllUsers } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", getAllUsers);

export default route;
