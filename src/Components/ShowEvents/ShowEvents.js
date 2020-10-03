import React from 'react';
import fakeData from '../../fakeData/fakeData';
import EventItem from '../EventItem/EventItem';

const ShowEvents = () => {
  const data = fakeData;

  console.log(data);
  return (
    <div className="container">
      <div className="row my-4 p-4">
        {data.map((item) => (
          <EventItem item={item}></EventItem>
        ))}
      </div>
    </div>
  );
};

export default ShowEvents;
