import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import data from "../data.json";

function Technology() {
  const [technologys, setTechnology] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setTechnology(data.technology);
  }, []);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const technology = technologys[activeTab] || {};

  return (
    <div className="technology full-width min-h-screen">
      <Navbar />
      <h2 className="pt-32 pb-8 uppercase text-[16px] sm:text-[20px] md:text-[28px]"><span className="text-white/25 font-bold tracking-[4.8px]">03</span>&nbsp; SPACE LAUNCH 101</h2>
      <div className="">
        <div className="tab-buttons flex gap-4">
          {technologys.map((technologyTab, index) => (
            <button
              key={index}
              className={`${
                index === activeTab ? "active-technology" : ""
              } border-2 border-white/60 rounded-full aspect-square w-16 text-xl hover:border-white transition-colors`}
              onClick={() => changeTab(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="">
          <img
            src={technology.images?.landscape}
            alt={`${technology.name} image`}
          />
          <h2>{technology.description}</h2>
        </div>
      </div>
    </div>
  );
}

export default Technology;
