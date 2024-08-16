const userService = require("./UserService");

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);

    return res.status(200).send({ message: "User Created" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const createMultipleUser = async (req, res) => {
  try {
    const user = await userService.createMultipleUser(req.body);
    return res.status(201).send({ message: "Users Created Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { createUser, createMultipleUser, getAllUsers };
