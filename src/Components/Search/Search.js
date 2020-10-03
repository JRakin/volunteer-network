import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <section className="banner d-flex align-items-center">
      <div className="container">
        <div>
          <h1
            style={{
              padding: '10px',
              fontSize: '48px',
              letterSpacing: '1.8px',
              color: '#fff',
            }}
            className="text-center"
          >
            I GROW BY HELPING PEOPLE IN NEED.
          </h1>
          <form>
            <div className="form-group col-md-6 my-4 mx-auto">
              <input
                className="form-control search-box"
                type="text"
                placeholder="Search"
              />
              <button className="btn search-btn" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
