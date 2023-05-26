import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Map.module.css';
import {useNavigate} from "react-router-dom";

const { kakao } = window;

const Map = () => {
  const [currentLatLng, setCurrentLatLng] = useState({
    latitude: 37.3418057,
    longitude: 126.7320972,
    // latitude: 37.34408968277233,
    // longitude: 126.74015069537656,
  });
  const [aroundGymArr, setAroundGymArr] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(
          currentLatLng.latitude,
          currentLatLng.longitude,
          // 33.450701,
          // 126.570667,
        ),
      };

      const map = new kakao.maps.Map(container, options);

      console.log(currentLatLng.latitude, currentLatLng.longitude)

      // if (navigator.geolocation) {
      //   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      //   navigator.geolocation.getCurrentPosition (function (position) {
      //     const lat = position.coords.latitude, // 위도
      //       lon = position.coords.longitude; // 경도
      //
      //     const locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      //       message =
      //         '<div className="flex justify-center items-center text-center">현위치</div>'; // 인포윈도우에 표시될 내용입니다
      //
      //     // 마커와 인포윈도우를 표시합니다
      //     displayMarker(locPosition, message);
      //   });
      // } else {
      //   // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      //
      //   const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
      //     message = 'geolocation을 사용할수 없어요..';
      //
      //   displayMarker(locPosition, message);
      // }
      const displayMarker = (locPosition, message, gymId) => {
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: locPosition,
          clickable: true
        });

        const iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우를 생성합니다
        const infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        // 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);

        kakao.maps.event.addListener(marker, 'click', function () {
          navigate(`/infopage/${gymId}`)
        })

      };

      const locPosition = new kakao.maps.LatLng(currentLatLng.latitude, currentLatLng.longitude), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message =
                  '<div className="flex justify-center items-center text-center">현위치</div>'; // 인포윈도우에 표시될 내용입니다

      displayMarker(locPosition, message)


      const fetchMsw = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/gyms")

          console.log(response.data)
          response.data.map(gym => {
            const {id, latitude, longitude, name} = gym
            const loc = new kakao.maps.LatLng(latitude, longitude);
            const message =
                `<div className="flex justify-center items-center text-center">${name}</div>`;

            displayMarker(loc, message, id);
          })


          // const lat = response.data.gym_latitude;
          // const lon = response.data.gym_longtitude;
          // setAroundGymArr(aroundGymArr.concat({ latE: lat, lonE: lon }));
          // console.log(lat, lon);


          // if (aroundGymArr.length === 0) return;
          // const { latE, lonE } = aroundGymArr[0];
          // console.log(latE, lonE);

        } catch (err) {
          console.log(err);

        }
      };
      fetchMsw();


    });
  }, [currentLatLng]);

  console.log(aroundGymArr);
  return (
    <div id="map">
      <div className={styles.responsiveLayout}></div>
    </div>
  );
};

export default Map;
