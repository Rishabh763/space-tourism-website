import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import data from '../data.json';

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
      <Navbar/>
      <div >
        <div className="tab-buttons">
          {technologys.map((technologyTab, index) => (
            <button
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => changeTab(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="">
          <img src={technology.images?.landscape} alt={`${technology.name} image`} />
          {/* Render content of active tab */}
          <h2>{technology.description}</h2>
          {/* You can add more content fields here */}
        </div>
      </div>
    </div>
  );
}

export default Technology;
