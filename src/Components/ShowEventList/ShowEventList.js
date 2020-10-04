import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EventDetails from '../EventDetails/EventDetails';

const ShowEventList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getUserEvents/' + loggedInUser.name)
      .then((res) => res.json())
      .then((data) => {
        setUserEvents(data);
      });
  }, [loggedInUser.name]);

  useEffect(() => {
    const keys = userEvents.map((event) => event.id);

    fetch('http://localhost:5000/getEventsByKeys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, [userEvents]);

  //HANDLING DELETE ITEM AND UPDATING STATE
  const handleDelete = (id, name) => {
    fetch('http://localhost:5000/deleteUserEvent/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const newEvents = events.filter((item) => item.name !== name);
        setEvents(newEvents);
      });
  };

  return (
    <div className="container">
      <div className="row m-4">
        {events.map((item) => (
          <EventDetails
            handleDelete={handleDelete}
            key={item._id}
            item={item}
          ></EventDetails>
        ))}
      </div>
    </div>
  );
};

export default ShowEventList;
