const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User{
        id: ID!
        name: String!
        cpf: String!
        email: String!
        password: String!
        image: String!
    }

    type Query {
        users: [User]   
        user(id: ID!): User
    }

    type Mutation{
        createUser(name: String!, cpf: String!, email: String!, password: String!, image: String!): User
        updateUser(id: ID!, name: String, cpf: String, email: String, password: String, image: String): User
        deleteUser(id: ID!): Boolean
    }
`;

module.exports = { typeDefs };