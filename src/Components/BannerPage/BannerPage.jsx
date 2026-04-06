import React from 'react';
import BookImg from '../../Images/hero_img.jpg'
const BannerPage = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] w-10/12 rounded-2xl my-8 container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between ">
    <img
      src={BookImg}
    />
    <div className='space-y-10'>
      <h1 className="text-4xl font-bold">Books to freshen up <br/> your booksheif</h1>
     
     
    <button className="btn btn-success text-white">View the List</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default BannerPage;