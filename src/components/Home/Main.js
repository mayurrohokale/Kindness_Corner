import React from 'react';
import Donateform from './Donateform';

const slideImages = [
    {
      url: './images/img1.jpg',
      caption: 'We Belive in Transparency'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: ''
    },
  ];

const Main = () => {
  

  return (
    <div className="flex flex-col h-screen" >
      <div className="relative z-0 " >
            <img src={slideImages[0].url} alt={slideImages[0].caption} className='w-full object-cover shadow-md'/>
      </div>
      <div className=' absolute top-24 right-3 sm:right-5'>
        <div className='hidden md:flex'>
            <Donateform/>
        </div>

      </div>
      <div className='md:hidden z-10' >
      <Donateform/>
      </div>
    </div>
  );
};

export default Main;
