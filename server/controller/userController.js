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
    console.log(error);
    res.status(500).json({ error: error });
  }
};
