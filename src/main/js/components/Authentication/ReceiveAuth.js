import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';

export default class ReceiveFromDropbox extends Component {
  handleSuccess = async (accessToken, { response, state }) => {
    console.log('Successfully authorized');
    await setProfileFromDropbox(accessToken);
    await redirect(state.from);
  };

  handleError = error => {
    console.error('An error occured');
    console.error(error.message);
  };

  render() {
    return (
      <OauthReceiver
        tokenUrl="https://sbuniv.blackboard.com/learn/api/public/v1/oauth2/token"
        clientId="s760148"
        clientSecret=""
        redirectUri="localhost:8081"
        onAuthSuccess={this.handleSuccess}
        onAuthError={this.handleError}
        location={"/"}
        render={({ processing, state, error }) => (
          <div>
            {processing && <p>Authorizing now...</p>}
            {error && (
              <p className="error">An error occurred: {error.message}</p>
            )}
          </div>
        )}
      />
    );
  }
}