import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = () => {
  try {
    res.status(200).json({ message: "register" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    res.status(200).json({ message: "login" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
