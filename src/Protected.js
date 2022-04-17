import 
  React, 
  { useEffect } 
from 'react';

import { Auth } from 'aws-amplify';

import Container from './Container';

const Protected = ({ history }) => {

  useEffect(
    () => {
      //Check if user is signed in and, if so, 
      //return data about the signed-in user
      Auth.currentAuthenticatedUser()
        //If user is not signed in, redirect to Profile page
        .catch(
          () => {
            history.push('/profile')
          }
        );
    }
    , []
  );

  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
};

export default Protected;