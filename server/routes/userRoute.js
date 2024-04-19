import express from "express";
import {
  create,
  deleteUser,
  getAllUsers,
  updateUserStatus,
  userLogin,
} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", getAllUsers);
route.delete("/deleteUser/:id", deleteUser);
route.put("/updateUserStatus", updateUserStatus);

route.post("/login", userLogin);

export default route;
