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
