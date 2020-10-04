import React, { useContext, useEffect, useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import Logo from '../../logos/Group 1329.png';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { errors, register, handleSubmit } = useForm();

  const [event, setEvent] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:5000/event/' + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvent(data);
      });
  }, [id]);

  console.log(event);
  console.log(id);
  const onSubmit = (data) => {
    const newData = { ...data, id };

    fetch('http://localhost:5000/addUserEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    history.push('/showList');
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
