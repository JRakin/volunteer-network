import React, { useContext } from 'react';
import './Login.css';
import firebaseConfig from './firebase.config';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../logos/Group 1329.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Swal from 'sweetalert2';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          name: displayName,
          email,
          photoURL,
          isLoggedIn: true,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((err) => {
        Swal.fire(
          'Sorry',
          'Something went wrong please try again later!',
          'error'
        );
      });
  };

  library.add(fab);

  return (
    <div className="login">
      <div className="container">
        <div className="logo-container text-center p-4">
          <Link to="/">
            <img src={Logo} alt="logo_pogo" />
          </Link>
        </div>
        <div className="text-center btn-container">
          <button
            onClick={handleSignInWithGoogle}
            className="btn btn-block signInBtn"
          >
            <span>
              <FontAwesomeIcon className="mr-2" icon={['fab', 'google']} />
            </span>
            Continue With Google
          </button>
          <p className="mt-3">
            Don't have an account?{' '}
            <span>
              <Link to="/signup">Create an account</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
