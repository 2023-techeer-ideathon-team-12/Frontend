import React, { useEffect, useState } from 'react';
import './InfoPage.css';
import axios from 'axios';

function InfoPage() {
  const [isUsing, setIsUsing] = useState(false);
  const [userCount, setUserCount] = useState(5); // 이용자수 초기 설정
  const [infoData, setInfoData] = useState([]);

  const handleButtonClick = () => {
    if (infoData) {
      setUserCount((prevCount) => prevCount - 1); // 이용자수 감소
    } else {
      setUserCount((prevCount) => prevCount + 1); // 이용자수 증가
    }

    setIsUsing((prevState) => !prevState); // Toggle isUsing state
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  async function getData() {
    try {
      const res = await axios.get(`/api/gym/`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      <div className="gym-info">
        <div className="button-wrapper">
          <button className="back-button" onClick={handleBackButtonClick}>
          &lt;
          </button>
          <img
            className="image"
            src="https://lh5.googleusercontent.com/p/AF1QipNPy9DxuapVB_Lvsg1uKr4bcksJ0P6FYEOq4wh4=w296-h168-n-k-no"
            alt="Your Image"
          />
        </div>

        <div className="info-text">
          <h2>{infoData.gyn_name}</h2>
          <p>운영시간: 7:00~ 23:00</p>
          <p>{infoData.address}</p>
          <p>031-504-0111</p>
          <p>현재 이용자수: {infoData.current_user}</p>
          <p>운동기구:{infoData.machine} </p>
          <br />
        </div>
        <hr className="horizontal-line" />
        <div className="btn-container">
          <button
            className={infoData ? 'button-end' : 'button-use'}
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
