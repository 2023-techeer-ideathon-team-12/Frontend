import React, { useEffect, useState } from 'react';
import './InfoPage.css';
import axios from 'axios';

function InfoPage() {
  const [isUsing, setIsUsing] = useState(false);
  // const [userCount, setUserCount] = useState(5); // 초기 이용자 수
  const [infoData, setInfoData] = useState({});

  const handleButtonClick = () => {
    if (infoData.data) {
      setUserCount((prevCount) => prevCount - 1); // 이용 종료 시 이용자 수 감소
      try {
         axios.post(`/api/v1/gyms/${infoData.data.id}/increase`, {
          id: infoData.data.id,
          currentUser: infoData.data.currentUser - 1,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      setUserCount((prevCount) => prevCount + 1); // 이용 시작 시 이용자 수 증가
      try {
       axios.post(`/api/v1/gyms/${infoData.data.id}/decrease`, {
          id: infoData.data.id,
          currentUser: infoData.data.currentUser + 1,
        });
      } catch (error) {
        console.error(error);
      }
    }

    setIsUsing((prevState) => !prevState);
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  useEffect(() => {
    axios
      .get('/api/gym')
      .then(function (response) {
        console.log(response);
        setInfoData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
            alt="이미지"
          />
        </div>

        <div className="info-text">
          <h2>{infoData.gym_name}</h2>
          <p>운영시간: 7:00~ 23:00</p>
          <p>{infoData.address}</p>
          <p>031-504-0111</p>
          <p>현재 이용자수: {infoData.current_user}</p>
          <p>운동기구: {infoData.machine}</p>
          <br />
        </div>
        <hr className="horizontal-line" />
        <div className="btn-container">
          <button
            className={infoData.data ? 'button-end' : 'button-use'}
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
