import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, {Auth} from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { authConfig } from "./Auth/configuration";

Amplify.configure(authConfig);

const getUserToken = async () => {
  const session = await Auth.currentSession();
    let idToken = session.getIdToken();
    let accessToken = session.getAccessToken()
    let jwt = idToken.getJwtToken()
    //You can print them to see the full objects
    console.log(`myIdToken: ${JSON.stringify(idToken)}`);
    console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
    console.log(`myJwt: ${jwt}`);

  return jwt;
}

const executeTestRequest = async() => {
  var jwt = await getUserToken();

  const endpoint = `https://${process.env.REACT_APP_API_HOST}/`;
  const settings: RequestInit = {
    headers: {
      "authorization": jwt
    }
  };
  console.log("fetching:", {endpoint, settings});
  const response = await fetch(endpoint, settings);
  console.log(response);
  console.log(await response.text());
}

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={executeTestRequest}>Test</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
