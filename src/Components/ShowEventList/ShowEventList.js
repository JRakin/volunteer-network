import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EventDetails from '../EventDetails/EventDetails';

const ShowEventList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  //all registered events
  useEffect(() => {
    fetch(
      'https://limitless-springs-25955.herokuapp.com/getUserEvents/' +
        loggedInUser.name
    )
      .then((res) => res.json())
      .then((data) => {
        setUserEvents(data);
      });
  }, []);

  //   getting all the events by keys
  useEffect(() => {
    const keys = userEvents.map((event) => event.id);
    fetch('https://limitless-springs-25955.herokuapp.com/getEventsByKeys', {
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

  //handling delete item and updating state for dynamic ui
  const handleDelete = (id, name) => {
    fetch(
      'https://limitless-springs-25955.herokuapp.com/deleteUserEvent/' + id,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
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
