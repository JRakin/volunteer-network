import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import EventItem from '../EventItem/EventItem';

const ShowEvents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="container">
      <div className="row my-4 p-4">
        {data.map((item) => (
          <EventItem key={item._id} item={item}></EventItem>
        ))}
      </div>
    </div>
  );
};

export default ShowEvents;
