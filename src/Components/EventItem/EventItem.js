import React from 'react';
import { useHistory } from 'react-router-dom';
import './EventItem.css';

const EventItem = (props) => {
  const event = props.item;
  const history = useHistory();

  //redirecting user
  const handleClick = (id) => {
    history.push('/event/' + id);
  };

  const changeColor = [
    'orange',
    'seagreen',
    'blue',
    'crimson',
    'indianred',
    'slateblue',
    'teal',
    'chocolate',
    'salmon',
    'firebrick',
    'tomato',
    'fuchsia',
    'navy',
    'darkturquoise',
  ];
  //dynamically giving background color for each card
  const randomNumber = Math.floor(Math.random() * changeColor.length);
  const color = changeColor[randomNumber];

  return (
    <div className="col-md-3">
      <div
        onClick={() => handleClick(event._id)}
        style={{ backgroundColor: color }}
        className="card-item m-3"
      >
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
