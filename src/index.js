import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider, SuspenseWithPerf, useAuth } from 'reactfire';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import App from './App';

import { firebaseConfig } from './firebase-config';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID, auth.EmailAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => true,
  },
};

const auth = useAuth;

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf fallback={<p>Loading...</p>}>
        <App />
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
