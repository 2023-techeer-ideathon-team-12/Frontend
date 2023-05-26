import React, { useEffect, useState } from 'react';
import './InfoPage.css';
import axios from 'axios';

function InfoPage() {
  const [isUsing, setIsUsing] = useState(false);
  const [infoData, setInfoData] = useState({});
  const id = 9;

  const handleStartUsing = async () => {
    setInfoData((prevData) => ({
      ...prevData,
      currentUser: prevData.currentUser + 1,
    }));

    try {
      await axios.post(
        `http://localhost:8080/api/v1/gyms/${infoData.id}/increase`,
        {
          id: infoData.id,
          currentUser: infoData.currentUser + 1,
        },
      );
    } catch (error) {
      console.error(error);
    }

    setIsUsing(true);
  };

  const handleStopUsing = async () => {
    setInfoData((prevData) => ({
      ...prevData,
      currentUser: prevData.currentUser - 1,
    }));

    try {
      await axios.post(
        `http://localhost:8080/api/v1/gyms/${infoData.id}/decrease`,
        {
          id: infoData.id,
          currentUser: infoData.currentUser - 1,
        },
      );
    } catch (error) {
      console.error(error);
    }

    setIsUsing(false);
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/gyms/' + id)
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
          <h2>{infoData.name}</h2>
          <p>운영시간: 7:00~ 23:00</p>
          <p>{infoData.address}</p>
          <p>031-504-0111</p>
          <p>현재 이용자수: {infoData.currentUser}</p>
          <p>운동기구: {infoData.machine}</p>
          <p>헬스장 혼잡도: {infoData.status}</p>
          <br />
        </div>
        <hr className="horizontal-line" />
        <div className="btn-container">
          {!isUsing && (
            <button className="button-use" onClick={handleStartUsing}>
              이용하기
            </button>
          )}
          {isUsing && (
            <button className="button-end" onClick={handleStopUsing}>
              종료하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
