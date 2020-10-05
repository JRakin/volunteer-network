import React from 'react';
import './AddEvent.css';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const AddEvent = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    fetch('https://limitless-springs-25955.herokuapp.com/addEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire('Success', 'Created successfully', 'success');
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire('Sorry', "Couldn't creat an event.", 'error');
      });
  };

  return (
    <div className="eventForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex">
          <div className="form-group w-100 m-3">
            <label>Event Title</label>
            <input
              className="form-control"
              name="name"
              type="text"
              ref={register({ required: true })}
            />
            {errors.name && (
              <span className="warning">Event name is required</span>
            )}
          </div>
          <div className="form-group w-100 m-3">
            <label htmlFor="">Event Date</label>
            <input
              className="form-control"
              name="eventDate"
              type="date"
              ref={register({ required: true })}
            />
            {errors.eventDate && (
              <span className="warning">Event date is required</span>
            )}
          </div>
        </div>
        <div className="d-flex">
          <div className="form-group w-100 m-3">
            <label>Event Description</label> <br />
            <textarea
              className="form-control description-text"
              name="description"
              ref={register}
              id=""
              cols="50"
              rows="5"
            ></textarea>
          </div>
          <div className="form-group w-100 m-3">
            <label htmlFor="">Image URL</label>
            <input
              className="form-control"
              ref={register}
              name="imageUrl"
              type="text"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-block addBtn w-25 m-4">
          {' '}
          Create
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
