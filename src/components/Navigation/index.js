import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

import { ReactComponent as NavSoup } from '../Icons/nav_soup.svg';
import { ReactComponent as NavLocation } from '../Icons/nav_location.svg';
import { ReactComponent as NavReview } from '../Icons/nav_review.svg';
import { ReactComponent as NavSignIn } from '../Icons/nav_profile.svg';

import 'stylesheets/Naviagtion.scss';

const Navigation = () => (
  <div className="nav-wrapper">
    <div className="nav">
      <div className="nav-button">
        <Link to={ROUTES.LANDING} alt="home">
          <NavSoup className="nav-icon" />
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
