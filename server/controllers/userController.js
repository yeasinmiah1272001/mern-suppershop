// import userModel from
import validator from "validator";
import userModel from "../models/userModels.js";
import bcrypt from "bcrypt";
// ==============================userRegister===============================
// ==============================userRegister===============================
// ==============================userRegister===============================
const userRegister = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = await req.body;
    // console.log(req.body);
    const existingUser = await userModel.findOne({ email });
    // console.log("exis", existingUser);

    if (!name) {
      return res.json({ success: false, message: "pleace enter your name" });
    }
    if (!email) {
      return res.json({ success: false, message: "pleace enter your eamil" });
    }
    if (!password) {
      return res.json({
        success: false,
        message: "pleace enter your password",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter your valid email" });
    }
    if (existingUser) {
      return res.json({ success: true, message: "user already exisit" });
    }
    if (password.length < 8) {
      return res.json({ success: true, message: "password must 8 chr" });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptPassword = await bcrypt.hash(password, salt);
    // console.log(encryptPassword);

    const newUser = new userModel({
      name,
      email,
      password: encryptPassword,
      isAdmin: isAdmin || false,
    });
    console.log("new", newUser);
    await newUser.save();

    return res.json({ success: true, message: "user register success" });
  } catch (error) {
    return res.json({ success: false, message: "user register error" });
  }
};
// ==============================userLogin===============================
// ==============================userLogin===============================
// ==============================userLogin===============================
const userLogin = (req, res) => {
  try {
    return res.json({ success: true, message: "user Login success" });
  } catch (error) {
    return res.json({ success: false, message: "user Login error" });
  }
};

// ==============================admin Login===============================
const adminLogin = (req, res) => {
  try {
    return res.json({ success: true, message: "admin login success" });
  } catch (error) {
    return res.json({ success: false, message: "admin login error" });
  }
};

// ==============================userUpdated===============================
const userUpdate = (req, res) => {
  try {
    return res.json({ success: true, message: "user updated success" });
  } catch (error) {
    return res.json({ success: false, message: "user updated error" });
  }
};

// ==============================User delete===============================
const userDelete = (req, res) => {
  try {
    return res.json({ success: true, message: "user delete success" });
  } catch (error) {
    return res.json({ success: false, message: "user delete error" });
  }
};
// ==============================getAllUser===============================
const userList = (req, res) => {
  try {
    return res.json({ success: true, message: "user List success" });
  } catch (error) {
    return res.json({ success: false, message: "user List error" });
  }
};

export {
  userList,
  userLogin,
  userRegister,
  userUpdate,
  adminLogin,
  userDelete,
};
