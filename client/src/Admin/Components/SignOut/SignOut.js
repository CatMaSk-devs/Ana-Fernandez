import React from 'react';

import { auth } from '../../../Services/Firebase';

import './SignOut.css';

const SignOutButton = () =>
  <button className="btn" type="button" onClick={auth.HandleSignOut}>
    Sign Out
  </button>

export default SignOutButton;