import React from 'react';
import '../Syles/Banner.css';


const Banner = () => {
  return (
    <div className="relative w-full h-[500px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url("https://wallpapers-clan.com/wp-content/uploads/2023/11/marvel-iron-man-explosion-desktop-wallpaper-preview.jpg")' }}>
      <div className="skew-box">
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h2 className="text-4xl font-semibold">Explora el Universo Marvel</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;

