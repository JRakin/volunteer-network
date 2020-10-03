import React, { useState } from 'react';
import { faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../logos/Group 1329.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Admin.css';
import AddEvent from '../AddEvent/AddEvent';

const Admin = () => {
  const [selectActive, setSelectActive] = useState('');

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
              <img className="w-75" src={Logo} alt="" />
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
          <div className="col-md-9">
            <AddEvent></AddEvent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
