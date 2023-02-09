import { GraphQLClient, gql } from "graphql-request";

const graphBase = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CONTENT_API, {
  headers: {
    Authorization: process.env.NEXT_PUBLIC_GRAPH_TOKEN,
  },
});

export { graphBase, gql };
