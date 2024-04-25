import User from "../model/user_model.js";

export const userController = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const findUser = await User.findById(loggedInUserId).select("-password");

    if (!findUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(findUser);
  } catch (error) {
    console.error("Error in userController: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
