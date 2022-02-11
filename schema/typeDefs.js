const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String!
    id: ID!
    age: Int!
    team: Nationality!
    friends: [User]
  }

  enum Nationality {
    CANADA
    INDIA
    PAKISTAN
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }
`;

module.exports = { typeDefs };
