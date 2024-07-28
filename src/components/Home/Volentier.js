import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getVolunteersCount } from "../api/user";
import CountUp from 'react-countup';

export default function Volentier() {
  const slides = [
    {
      url: "./Education.png",
      title: "EDUCATION",
      color: "#F0C774"
    },
    {
      url: "./Women.png",
      title: "EMPOWERMENT",
      color: "#b3d2d1"
    },
    {
      url: "./Heart.png",
      title: "HEALTHCARE",
      color:"#c0adcc",
    },
    {
      url: "./Disaster.png",
      title: "EMPOWERING GRASSROOT",
      color:"#50c878",
    },
    {
      url: "./Volunteer.png",
      title: "VOLUNTEER",
      color: "salmon"
    },
  ];

  const [volCount, setVolCount] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);

  const impactRef = useRef(null);

  useEffect(() => {
    const fetchVolunteersCount = async () => {
      const data = await getVolunteersCount();
      if (data) {
        setVolCount(data);
      }
    };

    fetchVolunteersCount();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => {
      if (impactRef.current) {
        observer.unobserve(impactRef.current);
      }
    };
  }, []);

  const getVisibleSlides = () => {
    let visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      visibleSlides.push(slides[(currentIndex + i) % slides.length]);
    }
    return visibleSlides;
  };

  return (
    <div className="" id="voulunteers">
      <div className="flex text-justify items-center font-monserrat font-normal text-[11px] md:text-[15px] mx-4 md:mx-12 lg:mx-52 mt-8 ">
        <p>
          "At Kindness Corner, we empower you to make a difference. Our platform
          allows you to donate securely and transparently, with real-time
          updates on transactions and total funds raised. You can donate
          anonymously or openly, and your contributions support NGOs. Registered
          users can vote to decide which NGOs receive the funds. Together, we
          amplify your generosity and create positive change."
          <br />
          <Link to="/aboutus">
            <span className="font-bold underline text-blue-500 pt-2 text-center items-center justify-center flex">
              READ MORE !
            </span>
          </Link>
        </p>
      </div>
      <div>
        <p className="mt-8 font-bold text-[25px] md:text-[42px] font-monserrat mb-3">
          Our Programmes
        </p>
        <div className="flex flex-col md:flex-row text-center gap-20 my-16 items-center justify-center">
          {getVisibleSlides().map((slide, index) => (
            <div
              key={index}
              className="flex gap-4 flex-col items-center justify-center w-[100px] h-[90px] transition-all duration-500 ease-in-out"
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-[100%] h-[100%] object-cover"
              />
              <p className="text-xl font-extrabold underline font-mono" style={{ color: slide.color }}> {slide.title} </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4" ref={impactRef}>
        <p className="text-[25px] pt-4 md:text-[42px] text-black font-monserrat font-bold">
          Our Impact
        </p>
        <div className="flex flex-col lg:gap-20 lg:flex-row text-center items-center justify-between lg:justify-center w-screen h-auto md:w-full md:h-auto mt-4 text-[#F70059]">
          <div className="flex flex-col gap-2 font-bold font-monserrat">
            <h1 className="text-[60px]">
              {inView && <CountUp end={150} duration={2} />}+
            </h1>
            <h1 className="text-xl lg:text-2xl">Transactions</h1>
            <h1 className="text-black font-josiefin font-normal text-[14px]">
              Its a realtime <br /> transactions of <br /> both transactions
            </h1>
          </div>
          <div className="flex flex-col gap-2 font-bold font-monserrat">
            <h1 className="text-[60px]">
              {inView && <CountUp end={4267} duration={2} />}K+
            </h1>
            <h1 className="text-xl lg:text-2xl">Total Money</h1>
            <h1 className="text-black font-josiefin font-normal text-[14px]">
              Its a realtime Record <br /> of How much Money <br /> in Account!
            </h1>
          </div>
          <div className="flex flex-col gap-2 font-bold font-monserrat">
            <h1 className="text-[60px]">
              {inView && <CountUp end={570} duration={2} />}K+
            </h1>
            <h1 className="text-xl lg:text-2xl">To Go</h1>
            <h1 className="text-black font-josiefin font-normal text-[14px]">
              Its a realtime Record <br /> of How much Money <br /> Goes to NGOs
            </h1>
          </div>
          <div className="flex flex-col gap-2 font-bold font-monserrat">
            <Link to="/allvolunteers">
              <h1 className="text-[60px]">
                {volCount !== null ? (inView && <CountUp end={volCount} duration={3} />) : "Load..."}+
              </h1>
            </Link>
            <Link to="/allvolunteers">
              <h1 className="text-xl lg:text-2xl">Volunteers</h1>
            </Link>
            <h1 className="text-black font-josiefin font-normal text-[14px]">
              List of Volunteerss <br /> who are part of this
              <br /> wonderful journey
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
