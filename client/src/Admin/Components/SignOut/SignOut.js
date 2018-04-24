import React from 'react';

import { auth } from '../../../Services/Firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.HandleSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;