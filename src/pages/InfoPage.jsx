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
      setUserCount((prevCount) => prevCount + 1);
    }

    setIsUsing((prevState) => !prevState);
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
      <div className=" mx-auto my-20 px-5 w-400 border border-gray-300 w-[500px]">
        <div className="">
          <button
            className="absolute top-10 left-10 z-2 bg-gray-100 text-gray-700 px-8 py-2 rounded-md cursor-pointer text-base font-bold"
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
        <hr className="border-none border-t border-gray-300 my-10" />
        <div className="flex justify-end mr-4">
          <button
            className={infoData ? 'button-end' : 'button-use'}
            onClick={handleButtonClick}
          >
            <span className="mx-4">{isUsing ? '종료하기' : '이용하기'}</span>
          </button>
        </div>
        <Review />
      </div>
    </div>
  );
}

export default InfoPage;
