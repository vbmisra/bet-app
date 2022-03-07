import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';
import store from './utils/store';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Page1 from './components/Form/1';
import BestPicture from './components/Form/bestPicture';
import BestDirector from './components/Form/bestDirector';
import BestAdaptedScreenplay from './components/Form/bestAdaptedScreenplay';
import BestAnimatedFeature from './components/Form/bestAnimatedFeature';
import BestAnimatedShort from './components/Form/bestAnimatedShort';
import BestCinematography from './components/Form/bestCinematography';
import BestCostumeDesign from './components/Form/bestCostumeDesign';
import BestDocumentaryFeature from './components/Form/bestDocumentaryFeature';
import BestDocumentaryShort from './components/Form/bestDocumentaryShort';
import BestFilmEditing from './components/Form/bestFilmEditing';
import BestInternationalFeature from './components/Form/bestInternationalFeature';
import BestLiveActionShort from './components/Form/bestLiveActionShort';
import BestMakeupHair from './components/Form/bestMakeupHair';
import BestOriginalScore from './components/Form/bestOriginalScore';
import BestOriginalSong from './components/Form/bestOriginalSong';
import BestOriginalScreenplay from './components/Form/bestOriginalScreenplay';
import BestProductDesign from './components/Form/bestProductDesign';
import BestSound from './components/Form/bestSound';
import BestSupActor from './components/Form/bestSupActor';
import BestSupActress from './components/Form/bestSupActress';
import BestVisualEffects from './components/Form/bestVisualEffects';
import BestActress from './components/Form/bestActress';
import BestActor from './components/Form/bestActor';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/page1" component={Page1} />
              <Route exact path="/bestDirector" component={BestDirector} />
              <Route exact path="/bestActress" component={BestActress} />
              <Route exact path="/bestActor" component={BestActor} />
              <Route exact path="/bestPicture" component={BestPicture} />
              <Route exact path="/bestAdaptedScreenplay" component={BestAdaptedScreenplay} />
               <Route exact path="/bestAnimatedFeature" component={BestAnimatedFeature} /> 
               <Route exact path="/bestAnimatedShort" component={BestAnimatedShort} /> 
               <Route exact path="/bestCinematography" component={BestCinematography} /> 
               <Route exact path="/bestCostumeDesign" component={BestCostumeDesign} /> 
               <Route exact path="/bestDocumentaryFeature" component={BestDocumentaryFeature} /> 
               <Route exact path="/bestDocumentaryShort" component={BestDocumentaryShort} /> 
               <Route exact path="/bestFilmEditing" component={BestFilmEditing} /> 
               <Route exact path="/bestInternationalFeature" component={BestInternationalFeature} /> 
               <Route exact path="/bestLiveActionShort" component={BestLiveActionShort} /> 
               <Route exact path="/bestMakeupHair" component={BestMakeupHair} /> 
               <Route exact path="/bestOriginalScore" component={BestOriginalScore} /> 
               <Route exact path="/bestOriginalScreenplay" component={BestOriginalScreenplay} /> 
               <Route exact path="/bestOriginalSong" component={BestOriginalSong} /> 
               <Route exact path="/bestProductDesign" component={BestProductDesign} /> 
               <Route exact path="/bestSound" component={BestSound} /> 
               <Route exact path="/bestSupActor" component={BestSupActor} /> 
               <Route exact path="/bestSupActress" component={BestSupActress} /> 
               <Route exact path="/bestVisualEffects" component={BestVisualEffects} /> 
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
