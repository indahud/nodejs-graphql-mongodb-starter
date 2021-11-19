const { gql } = require('apollo-server-express');

// We define Queries and Mutation Here

const typeDefs = gql`
  type Cars {
    id: ID!
    model: String
    year: Int
    company: String
  }

  type Query {
    getCar(id: ID!): Cars
    getAllCars: [Cars]
  }

  type Mutation {
    addCar(model: String!, year: Int!, company: String!): Cars
    removeCar(id: ID!): Cars
    updateCar(id: ID!, model: String!, year: Int, company: String): Cars
  }
`;

module.exports = typeDefs;
