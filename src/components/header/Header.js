import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { ToastContainer } from 'react-toastify';
import { useCart } from '../checkout-page/CartContext';
import loginUser from './HeaderService';
import constants from '../../utils/constants';
import './Header.css';
import logo from '../../kotdt-logo.png';
import cartIcon from '../../basket-cart-icon-27.png';
import * as Toast from '../toast/Toast';
import '../toast/Toast.css';

/**
 * @name Header
 * @description Displays the navigation header
 * @return component
 */
const Header = () => {
  const [user, setUser] = useState('');
  const [googleError, setGoogleError] = useState('');
  const [apiError, setApiError] = useState(false);

  /**
   * @name handleGoogleLoginSuccess
   * @description Function to run if google login was successful
   * @param {Object} response Response object from google
   */
  const handleGoogleLoginSuccess = (response) => {
    sessionStorage.setItem('token', response.getAuthResponse().id_token);
    const googleUser = {
      email: response.profileObj.email,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName
    };
    loginUser(googleUser, setUser, setApiError);
    setGoogleError('');
  };

  /**
   * @name handleGoogleLoginSuccess
   * @description Function to run if google login was unsuccessful
   */
  const handleGoogleLoginFailure = () => {
    setGoogleError('There was a problem logging in with Google. Please wait and try again later.');
  };

  /**
   * @name handleGoogleLogoutSuccess
   * @description Function to run if google logout was successful
   */
  const handleGoogleLogoutSuccess = () => {
    setUser('');
    setGoogleError('');
  };

  const toastTest = () => {
    Toast.SuccessToast('Test');
    Toast.ErrorToast('Test');
    Toast.WarnToast('Test');
    Toast.Toast('Test');
  };

  /**
   * @name handleGoogleLogoutFailure
   * @description Function to run if google logout was unsuccessful
   */
  const handleGoogleLogoutFailure = () => {
    setGoogleError('There was a problem logging out with Google. Please wait and try again later.');
  };

  const { state } = useCart(); // Access the cart state using useCart hook
  const cartItemCount = state.products.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
      <ToastContainer />
      <div className="header">
        <div className="header-left">
          <NavLink to="" className="home-btn">
            <img src={logo} className="logo" alt="logo" />
          </NavLink>
        </div>
        <div className="header-right">
          <button type="button" onClick={toastTest}>Test Toast</button>
        </div>
        <div className="header-right">
          <NavLink to="/checkout" className="cart-btn">
            <div className="cart-icon-wrapper">
              <img src={cartIcon} className="cart-icon" alt="Cart Icon" />
              {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
            </div>
          </NavLink>

          <div className="user-info">
            {user && <span>{user.firstName}</span>}
            {user && <span>{user.lastName}</span>}
            {googleError && <span>{googleError}</span>}
            {apiError && <span>Api Error</span>}
            <div className="login-btn">
              {!user ? (
                <GoogleLogin
                  clientId={constants.GOOGLE_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={handleGoogleLoginSuccess}
                  onFailure={handleGoogleLoginFailure}
                  cookiePolicy="single_host_origin"
                />
              ) : (
                <GoogleLogout
                  clientId={constants.GOOGLE_CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={handleGoogleLogoutSuccess}
                  onFailure={handleGoogleLogoutFailure}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
