import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cl7xqhg0s33az01ugad6bhwfx/master",
  cache: new InMemoryCache(),
});

export default client;
