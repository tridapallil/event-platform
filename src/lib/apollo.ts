import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oumyyy1cdr01w7bobp5rg8/master',
  cache: new InMemoryCache()
})