import React from 'react';
import '../Syles/Banner.css';


const Banner = () => {
  return (
    <div
  className="relative w-full h-[500px] bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage:
      'url("https://wallpapers-clan.com/wp-content/uploads/2023/11/marvel-iron-man-explosion-desktop-wallpaper-preview.jpg")',
  }}
>
  <div className="skew-box relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/50 p-8 rounded-md">
    <h2 className="text-4xl font-semibold mb-4 text-center">Explore the Marvel Universe</h2>
    <p className="text-center text-lg max-w-md">
    You can have access to different information about your characters and
    favorite movies.
    </p>
  </div>
</div>

  );
};

export default Banner;

