import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import data from '../data.json';

function Crew() {
  const [crews, setCrews] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setCrews(data.crew);
  }, []);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const crew = crews[activeTab] || {};

  return (
    <div className="crew full-width min-h-screen">
      <Navbar/>
      <h2 className="pt-32 pb-8 uppercase text-[16px] sm:text-[20px] md:text-[28px]"><span className="text-white/25 font-bold tracking-[4.8px]">02</span>&nbsp;  Meet your crew</h2>
      <div className="" >
        <div className="flex gap-2">
          {crews.map((crewMember, index) => (
            <button
              key={index}
              className={`${index === activeTab ? 'active-crew' : ''} aspect-square w-3 bg-white/40 rounded-full hover:bg-white/80 transition-colors`}
              onClick={() => changeTab(index)}
            >
            </button>
          ))}
        </div>
        <div className="crew-content">
          <img src={crew.images?.webp} alt={`${crew.name} image`} />
          <h2>{crew.name}</h2>
          <p>{crew.role}</p>
          <p>{crew.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
