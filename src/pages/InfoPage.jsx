import React, { useState } from 'react';
import Review from '../components/Review';

function InfoPage() {
  const [isUsing, setIsUsing] = useState(false);
  const [userCount, setUserCount] = useState(5);

  const handleButtonClick = () => {
    if (isUsing) {
      setUserCount((prevCount) => prevCount - 1);
    } else {
      setUserCount((prevCount) => prevCount + 1);
    }

    setIsUsing((prevState) => !prevState);
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

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

        <div className="text-left ml-15">
          <h2 className="mt-10 font-bold text-3xl">헬로우짐</h2>
          <p className="text-sm">운영시간: 7:00~ 23:00</p>
          <p className="text-sm">경기도 시흥시 정왕동 1734-7 KR</p>
          <p className="text-sm">031-504-0111</p>
          <p className="text-sm">현재 이용자수: {userCount}</p>
          <p className="text-sm">운동기구:</p>
          <br />
        </div>
        <hr className="border-none border-t border-gray-300 my-10" />
        <div className="flex justify-end mr-4">
          <button
            className={`${
              isUsing ? 'bg-red-500' : 'bg-green-500'
            } text-white rounded-md h-12`}
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
