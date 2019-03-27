import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import { AuthUserContext } from 'components/Session'

import { ReactComponent as NavSoup } from 'components/Icons/nav_soup.svg';
import { ReactComponent as NavLocation } from 'components/Icons/nav_location.svg';
import { ReactComponent as NavReview } from 'components/Icons/nav_review.svg';
import { ReactComponent as NavSignIn } from 'components/Icons/nav_profile.svg';
import { ReactComponent as NavSignOut } from 'components/Icons/nav_sign_out.svg'

import 'stylesheets/Naviagtion.scss';

const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className="nav-wrapper">
    <div className="nav">
      <div className="nav-button">
        <Link to={ROUTES.LANDING} alt="home">
          <NavSoup className="nav-icon" data-hover="Home" />
        </Link>
      </div>
      <div className="nav-button">
        <Link to={ROUTES.LOCATIONS} alt="locations">
          <NavLocation className="nav-icon" />
        </Link>
      </div>
      <div className="nav-button">
        <Link to={ROUTES.REVIEWS} alt="reviews">
          <NavReview className="nav-icon" />
        </Link>
      </div>
      <div className="nav-button">
        <Link to={ROUTES.SIGN_OUT} alt="sign out">
          <NavSignOut className="nav-icon" />
        </Link>
      </div>
    </div>
  </div>
)

const NavigationNonAuth = () => (
  <div className="nav-wrapper">
    <div className="nav">
      <div className="nav-button">
        <Link to={ROUTES.LANDING} alt="home">
          <NavSoup className="nav-icon" data-hover="Home" />
        </Link>
      </div>
      <div className="nav-button">
        <Link to={ROUTES.LOCATIONS} alt="locations">
          <NavLocation className="nav-icon" />
        </Link>
      </div>
      <div className="nav-button">
        <Link to={ROUTES.REVIEWS} alt="reviews">
          <NavReview className="nav-icon" />
        </Link>
      </div>
      <div className="nav-button">
        <Link to={ROUTES.SIGN_IN} alt="profile">
          <NavSignIn className="nav-icon" />
        </Link>
      </div>
    </div>
  </div>
)

export default Navigation;
