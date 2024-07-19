import React from 'react';

const WorksItem = ({ image, title, description }) => (
  <div className="w-[280px] sm:w-[350px] hover:scale-105 hover:shadow-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
    <div className="relative h-64 overflow-hidden">
      <img className="object-cover w-full h-full rounded-md" src={image} alt="" />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <div>
        <a href="">
          <h5 className="mb-2 text-xl font-monserrat font-bold tracking-tight text-white text-start ">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
      <div className="mt-auto">
        <a href="" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);


const Worksform = () => {
  const worksData = [
    {
      id: 1,
      image: "./images/img4.jpg",
      title: "Your Donation can help to provide food to people who are struggling to feed themselves and their families.",
      description: "Millions of people around the world face hunger every day. Your donation can help provide nutritious meals to those in need, ensuring that families have enough to eat and children can grow up healthy and strong."
    },
    {
      id: 2,
      image: "./images/img2.jpg",
      title: "Your Donation can help to provide education to children who cannot afford to go to school.",
      description: "Many children are unable to attend school due to financial constraints. Your donation can help provide access to education, giving children the opportunity to learn, grow, and build a better future for themselves and their communities."
    },
    {
      id: 3,
      image: "./images/img3.jpg",
      title: "Your Donation can help to provide shelter to homeless people and families.",
      description: "Homelessness is a major issue affecting communities worldwide. Your donation can help provide shelter, warmth, and safety to those who are homeless, giving them a chance to rebuild their lives and regain stability."
    }
  ];
  

  return (
    <div className="flex flex-col xl:flex-row justify-center py-2 w-full gap-12 text-white">
      {worksData.map((item) => (
        <WorksItem
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.text}
        />
      ))}
    </div>
  );
}

export default Worksform;
