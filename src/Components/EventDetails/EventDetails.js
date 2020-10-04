import React from 'react';
import './EventDetails.css';

const EventDetails = (props) => {
  const event = props.item;

  return (
    <div className="col-md-4">
      <div className="card-event m-3">
        <img className="w-100" src={event.imageUrl} alt="" />
        <p className="text-center event-name">{event.name}</p>
        <button
          onClick={() => props.handleDelete(event._id, event.name)}
          className="btn btn-block btn-warning"
          style={{ borderRadius: '30px' }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
