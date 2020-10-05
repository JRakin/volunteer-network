import React, { useEffect, useState } from 'react';
import EventItem from '../EventItem/EventItem';

const ShowEvents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetch('https://limitless-springs-25955.herokuapp.com/events')
      .then((res) => res.json())
      .then((result) => {
        if (isMounted) {
          setData(result);
        }
      });
    return () => {
      isMounted = false;
    };
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
