/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './Navbar.css';
// import { useRef } from 'react';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const amount = useSelector(state => state.amount);
  return (
    <>
      <div className="navbar">
        <div id="logo">
          <button
            className="rent btn button"
            // onClick={() => setCount(count + 1)}
          >
            My App
          </button>
        </div>
        {/* <div className="searchBox search">
          <input
            type="text"
            className="searchBar "
            placeholder="Search"
            ref={searchText}
          />
        </div> */}
        <div className="buttonName">
          <div className="login-box" name="login">
            <div className="login" name="login">
              {amount}
            </div>
          </div>
        </div>
        <div className="navBtns">
          <button
            className="rent btn button"
            name="rent"
            // onClick={() => setCount(count - 1)}
          >
            Balance
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
