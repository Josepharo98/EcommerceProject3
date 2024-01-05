import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Replace with the URL of your GraphQL server
    cache: new InMemoryCache(),
  });

  function App() {
    return (
      <ApolloProvider client={client}>
        {/* Your application components */}
      </ApolloProvider>
    );
  }

  export default App;