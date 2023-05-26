import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className="w-full h-[5.5rem] flex justify-between items-center py-3 px-6">
      <Link to="/" className={styles.responsiveElement}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2324/2324705.png"
          alt="logo"
          style={{ width: '50px', height: '50px' }}
        />
      </Link>

      <div
        id={styles.header}
        className="w-[90%] h-[90%] rounded-[2rem] shadow-md flex justify-between items-center"
      >
        <div className="flex justify-center items-center h-full">
          <div className="px-4">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '16px',
                width: '16px',
                fill: 'currentcolor',
              }}
            >
              <path
                d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
                opacity=".8"
              ></path>
            </svg>
          </div>

          <input
            className="outline-0"
            placeholder="찾고 싶은 헬스장이 있다면?"
          ></input>
        </div>
      </div>
      <div className={styles.responsiveElement}>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: 'block',
            height: '50px',
            width: '50px',
            fill: 'currentcolor',
          }}
        >
          <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
