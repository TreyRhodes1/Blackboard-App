import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';

export default class SendToDropbox extends Component {
  render() {
    return (
      <OauthSender
        authorizeUrl="https://sbuniv.blackboard.com/learn/api/public/v1/oauth2/authorizationcode"
        clientId="s760148"
        redirectUri="http://localhost:8081/"
        state={{ from: '/settings' }}
        render={({ url }) => <a href={url}>Connect to SBU</a>}
      />
    );
  }
}