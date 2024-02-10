import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import PageContainer from './containers/PageContainer';
import WeatherWidget from './components/WeatherWidget';
import './styles/App.scss';


const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PageContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
