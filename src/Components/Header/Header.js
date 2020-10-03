import React, { useContext } from 'react';
import './Header.css';
import Logo from '../../logos/Group 1329.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Swal from 'sweetalert2';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedInUser({});
      })
      .catch((err) => {
        Swal.fire('Oops!', 'Something went wrong try again later!', 'warning');
      });
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand justify-content-between">
        <Link to="/" className="navbar-brand w-15">
          <img className="w-25" src={Logo} alt="" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              <button className="btn btn-block btn-register">Register</button>
            </Link>
          </li>
          <li className="nav-item">
            {!loggedInUser.isLoggedIn ? (
              <Link to="/login" className="nav-link">
                <button className="btn btn-block btn-login">Login</button>
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="btn btn-block btn-login"
              >
                Sign out
              </button>
            )}
          </li>
          <li className="nav-item ml-2">
            <strong>{loggedInUser.name}</strong>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
