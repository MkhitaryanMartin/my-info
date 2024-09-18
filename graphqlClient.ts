import { GraphQLClient } from 'graphql-request';

// Define the endpoint for your GraphQL API
const endpoint: string = 'https://api.escuelajs.co/api/v1/graphql'; // Replace with your GraphQL API URL

// Create an instance of GraphQLClient
export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    // Add any required headers here
    // Example: Authorization: `Bearer ${token}`
  },
});
