const userController = require("../controllers/userController.js");

const resolvers = {
    Query: {
    users: async () => await userController.getAllUsers(),
    user: async ( _, { id }) => await userController.getUserById(id),
    },
    Mutation: {
        createUser: async (_, { name, cpf, email, password, image }) => {
            return await userController.createUser(name, cpf, email, password, image);
        },
        updateUser: async (_, { id, name, cpf, email, password, image}) => {
            return await userController.updateUser(id, name, cpf, email, password, image);
        },
        deleteUser: async (_, { id }) => {
            return await userController.deleteUser(id);
        },
    },
};

module.exports = resolvers;