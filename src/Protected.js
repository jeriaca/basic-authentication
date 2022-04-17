import 
  React, 
  { useEffect } 
from 'react';

import { Auth } from 'aws-amplify';

import Container from './Container';

import { useNavigate } from 'react-router-dom';

const Protected = () => {

  const nav = useNavigate();

  const redirectUser = async () => {
    try {
      await Auth.currentAuthenticatedUser();
    }
    catch (err) {
      nav('/profile');
    }
  };

  useEffect(
    () => {
      redirectUser();
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