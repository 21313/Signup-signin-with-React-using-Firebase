import React from 'react';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { Router, Route, browserHistory } from 'react-router';
import * as firebase from 'firebase';
import App from './App';
import Home from './components/Home';
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmHHWZruIpk200L-b7QBNFa5g8LS-42y4",
    authDomain: "bloodbank-663ac.firebaseapp.com",
    databaseURL: "https://bloodbank-663ac.firebaseio.com",
    projectId: "bloodbank-663ac",
    storageBucket: "bloodbank-663ac.appspot.com",
    messagingSenderId: "772891773209"
  };
  firebase.initializeApp(config);

  
export default class Routes extends React.Component {
    render() {
        return (
            <div>
                <Router history={browserHistory} >
                    <Route path="/" component={App}>
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/Home" component={Home} />
                    </Route>

                </Router>
            </div>
        );
    }
}
// export default Routes;