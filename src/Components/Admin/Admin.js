import React, { useState } from 'react';
import { faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../logos/Group 1329.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Admin.css';
import AddEvent from '../AddEvent/AddEvent';
import { Link } from 'react-router-dom';
import ShowAdminList from '../ShowAdminList/ShowAdminList';

const Admin = () => {
  const [selectActive, setSelectActive] = useState('list');

  const loadList = () => {
    setSelectActive('list');
  };
  const loadEventForm = () => {
    setSelectActive('event');
  };
  return (
    <div className="admin-section">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <div>
              <Link to="/">
                <img className="w-75" src={Logo} alt="" />
              </Link>
            </div>
            <div className="py-4">
              <p
                onClick={loadList}
                className={selectActive === 'list' ? 'option active' : 'option'}
              >
                {' '}
                <FontAwesomeIcon
                  style={{ marginRight: '4px' }}
                  icon={faUsers}
                />{' '}
                Registered Volunteers
              </p>
              <p
                onClick={loadEventForm}
                className={
                  selectActive === 'event' ? 'option active' : 'option'
                }
              >
                <FontAwesomeIcon style={{ marginRight: '4px' }} icon={faPlus} />
                Add Event
              </p>
            </div>
          </div>
          <div className="col-md-9">{showActive(selectActive)}</div>
        </div>
      </div>
    </div>
  );
};

function showActive(active) {
  if (active === 'list') {
    return <ShowAdminList></ShowAdminList>;
  } else {
    return <AddEvent></AddEvent>;
  }
}

export default Admin;
