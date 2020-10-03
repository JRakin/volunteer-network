import React from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import Logo from '../../logos/Group 1329.png';
import { Link } from 'react-router-dom';

const Register = () => {
  const { errors, register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => {};
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
              ref={register({ required: true })}
              placeholder="Your email"
            />
            {errors.email && <span className="warning">Name is required!</span>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="date"
              type="text"
              ref={register({ required: true })}
              placeholder="Date"
            />
            {errors.date && <span className="warning">Name is required!</span>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="description"
              type="text"
              ref={register({ required: true })}
              placeholder="Description"
            />
            {errors.description && (
              <span className="warning">Name is required!</span>
            )}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              type="text"
              ref={register({ required: true })}
              placeholder="Your name"
            />
            {errors.name && <span className="warning">Name is required!</span>}
          </div>
          <div className="form-group">
            <button className="registerBtn btn btn-block">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
