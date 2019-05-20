import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div >
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>Space X</h1>
        </div>
        <Route exact path='/' component={Launches} />
        <Route exact path='/:id' component={Launch} />
      </Router>
    </ApolloProvider>

  );
}

export default App;
