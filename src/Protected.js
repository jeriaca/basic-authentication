import 
  React, 
  { useEffect } 
from 'react';

import { Auth } from 'aws-amplify';

import Container from './Container';

import { useNavigate } from 'react-router-dom';

const Protected = () => {

  const nav = useNavigate();

  useEffect(
    () => {
      //Check if user is signed in and, if so, 
      //return data about the signed-in user
      Auth.currentAuthenticatedUser()
        //If user is not signed in, redirect to Profile page
        .catch(
          () => {
            nav('/profile')
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