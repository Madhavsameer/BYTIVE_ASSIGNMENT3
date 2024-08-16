const User = require("./UserModel");

const createUser = async (userData) => {
  try {
    let { id, name, email, phone, website, username, address, company } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User Already Exist With Email : ", email);
    }

    const user = await User.create({ id, name, email, phone, website, username, address, company });

    console.log("Created User ", user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createMultipleUser = async (users) => {
  for (let user of users) {
    await createUser(user);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  createMultipleUser,
  getAllUsers,
};
