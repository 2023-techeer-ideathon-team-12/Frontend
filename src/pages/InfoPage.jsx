import React, { useState } from 'react';
import './InfoPage.css';

function InfoPage() {
  const [isUsing, setIsUsing] = useState(false);
  const [userCount, setUserCount] = useState(5); // 이용자수 초기 설정

  const handleButtonClick = () => {
    if (isUsing) {
      setUserCount((prevCount) => prevCount - 1); // 이용자수 감소
    } else {
      setUserCount((prevCount) => prevCount + 1); // 이용자수 증가
    }

    setIsUsing((prevState) => !prevState); // Toggle isUsing state
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="gym-info">
        <div className="button-wrapper">
          <button className="back-button" onClick={handleBackButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <img
            className="image"
            src="https://lh5.googleusercontent.com/p/AF1QipNPy9DxuapVB_Lvsg1uKr4bcksJ0P6FYEOq4wh4=w296-h168-n-k-no"
            alt="Your Image"
          />
        </div>

        <div className="info-text">
          <h2>헬로우짐</h2>
          <p>운영시간: 7:00~ 23:00</p>
          <p>경기도 시흥시 정왕동 1734-7 KR</p>
          <p>031-504-0111</p>
          <p>현재 이용자수: {userCount}</p>
          <p>운동기구: </p>
          <br />
        </div>
        <hr className="horizontal-line" />
        <div className="btn-container">
          <button
            className={isUsing ? 'button-end' : 'button-use'}
            onClick={handleButtonClick}
          >
            {isUsing ? '종료하기' : '이용하기'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
