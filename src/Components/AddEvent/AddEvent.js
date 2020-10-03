import React from 'react';
import './AddEvent.css';

const AddEvent = () => {
  return (
    <div className="eventForm">
      <form action="">
        <div className="d-flex">
          <div className="form-group w-100 m-3">
            <label>Event Title</label>
            <input className="form-control" name="eventName" type="text" />
          </div>
          <div className="form-group w-100 m-3">
            <label htmlFor="">Event Date</label>
            <input className="form-control" name="eventDate" type="date" />
          </div>
        </div>
        <div className="d-flex">
          <div className="form-group w-100 m-3">
            <label>Event Description</label> <br />
            <textarea
              className="form-control description-text"
              name="description"
              id=""
              cols="50"
              rows="5"
            ></textarea>
          </div>
          <div className="form-group w-100 m-3"></div>
        </div>
        <button type="submit" className="btn btn-block addBtn w-25 m-4">
          {' '}
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
