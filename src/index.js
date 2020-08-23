import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider, SuspenseWithPerf, AuthCheck } from 'reactfire';

import { firebaseConfig } from './firebase-config';

import App from './App';
import AuthButtons from './components/AuthButtons/AuthButtons';

const uiConfig = {
  signInFlow: 'popup',
  // signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID, auth.EmailAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => true,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <SuspenseWithPerf fallback={<p>Loading...</p>}>
          <AuthCheck fallback={<AuthButtons />}>
            <App />
          </AuthCheck>
        </SuspenseWithPerf>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
