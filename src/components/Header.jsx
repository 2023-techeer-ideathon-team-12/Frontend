import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[5.5rem] flex justify-center items-center py-3">
      <div className="w-[90%] h-[90%] rounded-[2rem] shadow-md flex justify-between items-center">
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
    </div>
  );
};

export default Header;
