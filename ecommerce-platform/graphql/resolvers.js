const User = require('../models/User');

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await User.findById(id);
    },
    getAllUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      const newUser = new User({ name, email });
      await newUser.save();
      return newUser;
    },
    updateUser: async (_, { id, name, email }) => {
      return await User.findByIdAndUpdate(id, { name, email }, { new: true });
    },
    deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;