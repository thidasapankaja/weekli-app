import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <ul>
    {/* <li><Link to={routes.LANDING}>Landing</Link></li> */}
    <li><Link to={routes.HOME}>Home</Link></li>
    <Reusalbe />
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <Reusalbe />
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

const Reusalbe = () => 
    <Fragment>
      <li><Link to={routes.FAQ}>FAQ</Link></li>
      <li><Link to={routes.EXTENSIONS}>Extension</Link></li>
      <li><Link to={routes.CONTACT}>Contact</Link></li>
    </Fragment>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);