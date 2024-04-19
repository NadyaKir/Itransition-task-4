import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }

    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAllUsers = async (_, res) => {
  try {
    const userData = await User.find();

    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (Array.isArray(userId)) {
      const deletedUsers = await User.deleteMany({ _id: { $in: userId } });

      if (deletedUsers.deletedCount === 0) {
        return res.status(404).json({ msg: "Users not found" });
      }

      return res.status(200).json({ msg: "Users deleted successfully" });
    } else {
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        return res.status(404).json({ msg: "User not found" });
      }

      return res.status(200).json({ msg: "User deleted successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const userIds = req.body.userIds;
    const status = req.body.status;

    if (Array.isArray(userIds)) {
      const updatedUsers = await User.updateMany(
        { _id: { $in: userIds } },
        { $set: { status } }
      );

      return res.status(200).json({ msg: "Users updated successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const userLogin = async (req, res) => {
  const secretKey = uuidv4();
  const { email, password, lastLoginDate } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    if (user.status === "blocked") {
      return res.status(403).json({ error: "Your account is blocked" });
    }

    await User.updateOne({ _id: user._id }, { lastLoginDate });

    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
