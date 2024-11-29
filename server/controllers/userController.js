// ==============================userRegister===============================
const userRegister = (req, res) => {
  try {
    return res.json({ success: true, message: "user register success" });
  } catch (error) {
    return res.json({ success: false, message: "user register error" });
  }
};
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
