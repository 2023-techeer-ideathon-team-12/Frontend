import React, { useState, useEffect } from 'react';
import styles from './Map.module.css';

const { kakao } = window;

const Map = () => {
  const [currentLatLng, setCurrentLatLng] = useState({});

  useEffect(() => {
    const getCurrentLatLng = async (res) => {
      const pos = await res.coords;
      console.log(pos);
      setCurrentLatLng(pos);
    };

    const errorHandler = async (err) => {
      console.warn(`ERROR (${await err.code}): ${await err.message}`);
    };
    navigator.geolocation.getCurrentPosition(getCurrentLatLng, errorHandler);

    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(
          currentLatLng.latitude,
          currentLatLng.longitude,
        ),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
    });
  }, [currentLatLng]);

  return (
    <div id="map">
      <div className={styles.responsiveLayout}></div>
    </div>
  );
};

export default Map;
