const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String!
    id: ID!
    age: Int!
    team: Nationality!
    friends: [User]
    favoriteMovie: [Movies!]!
  }

  enum Nationality {
    CANADA
    INDIA
    PAKISTAN
  }

  type Movies {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movies!]!
    movie(name: String!): Movies!
  }
`;

module.exports = { typeDefs };
