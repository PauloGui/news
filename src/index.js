/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import List from './pages/List';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://news.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <List />
        </SafeAreaView>
      </ApolloProvider>
    </>
  );
};

export default App;
