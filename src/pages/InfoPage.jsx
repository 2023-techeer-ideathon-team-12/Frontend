import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Review from '../components/Review';
import Header from '../components/Header';

function InfoPage() {
  const [isUsing, setIsUsing] = useState(false);
  const [infoData, setInfoData] = useState({});
  const id = 1;

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
        console.log(response.data);
        setInfoData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className=" mx-auto my-20 px-5 w-400 border border-gray-300 w-[500px]">
        <div className="">
          <button
            className="top-10 left-10 z-2 bg-gray-100 text-gray-700 px-8 py-2 rounded-md cursor-pointer text-base font-bold"
            onClick={handleBackButtonClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <img
            className="w-full"
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
        <hr className="border-none border-t border-gray-300 my-10" />
        <div className="flex justify-end mr-4">
          {!isUsing && (
            <button
              className={`${
                isUsing ? 'bg-red-500' : 'bg-green-500'
              } text-white rounded-md h-12`}
              onClick={handleStartUsing}
            >
              이용하기
            </button>
          )}
          {isUsing && (
            <button
              className={`${
                isUsing ? 'bg-red-500' : 'bg-green-500'
              } text-white rounded-md h-12`}
              onClick={handleStopUsing}
            >
              종료하기
            </button>
          )}
        </div>
        <Review infoData={infoData} />
      </div>
    </div>
  );
}

export default InfoPage;
