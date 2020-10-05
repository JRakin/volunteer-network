import React, { useContext, useEffect, useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import Logo from '../../logos/Group 1329.png';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Swal from 'sweetalert2';

const Register = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { errors, register, handleSubmit } = useForm();

  const [event, setEvent] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch('https://limitless-springs-25955.herokuapp.com/event/' + id)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id]);

  const onSubmit = (data) => {
    const newData = { ...data, id };

    fetch('https://limitless-springs-25955.herokuapp.com/addUserEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire('Congrats', 'You successfully registered!', 'success');
        history.push('/showList');
      });
  };

  return (
    <div className="register">
      <div className="container">
        <div className="logo-container text-center p-4">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              type="text"
              defaultValue={loggedInUser.name}
              ref={register({ required: true })}
              placeholder="Your name"
            />
            {errors.name && <span className="warning">Name is required!</span>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              type="email"
              defaultValue={loggedInUser.email}
              ref={register({ required: true })}
              placeholder="Your email"
            />
            {errors.email && (
              <span className="warning">Email is required!</span>
            )}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="date"
              type="date"
              ref={register({ required: true })}
              placeholder="Date"
            />
            {errors.date && <span className="warning">Date is required!</span>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="description"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="eventName"
              type="text"
              defaultValue={event.name}
              ref={register({ required: true })}
              placeholder="Event name"
            />
            {errors.eventName && (
              <span className="warning">Event name is required!</span>
            )}
          </div>
          <div className="form-group">
            <button type="submit" className="registerBtn btn btn-block">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
