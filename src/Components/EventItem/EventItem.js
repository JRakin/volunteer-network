import React from 'react';
import './EventItem.css';

const EventItem = (props) => {
  const event = props.item;

  const handleClick = () => {
    console.log('hello');
  };

  return (
    <div className="col-md-3">
      <div onClick={handleClick} className="card-item m-3">
        <img className="w-100" src={event.imageUrl} alt="" />
        <p
          style={{ color: '#fff', fontSize: '18px' }}
          className="text-center px-2 py-4"
        >
          {event.name}
        </p>
      </div>
    </div>
  );
};

export default EventItem;
