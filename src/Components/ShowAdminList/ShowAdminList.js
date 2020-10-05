import React, { useEffect, useState } from 'react';
import './ShowAdminList.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShowAdminList = () => {
  const [allList, setAllList] = useState([]);

  useEffect(() => {
    fetch('https://limitless-springs-25955.herokuapp.com/allRegisteredList')
      .then((res) => res.json())
      .then((data) => {
        setAllList(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch('https://limitless-springs-25955.herokuapp.com/deleteByAdmin/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const newList = allList.filter((item) => item._id !== id);
        setAllList(newList);
      });
  };
  return (
    <div className="all-list">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Event name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allList.map((list) => renderTableData(list, handleDelete))}
        </tbody>
      </table>
    </div>
  );
};

//Rendering table row

function renderTableData(list, handleDelete) {
  const { _id, name, email, date, eventName } = list;
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{eventName}</td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-block">
          <FontAwesomeIcon
            className="delete-logo"
            icon={faTrashAlt}
          ></FontAwesomeIcon>
        </button>
      </td>
    </tr>
  );
}

export default ShowAdminList;
