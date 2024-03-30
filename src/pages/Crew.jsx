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
      <div >
        <div className="tab-buttons">
          {crews.map((crewMember, index) => (
            <button
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => changeTab(index)}
            >
              {crewMember.name}
            </button>
          ))}
        </div>
        <div className="crew-content">
          <img src={crew.images?.webp} alt={`${crew.name} image`} />
          {/* Render content of active tab */}
          <h2>{crew.name}</h2>
          <p>{crew.role}</p>
          {/* You can add more content fields here */}
        </div>
      </div>
    </div>
  );
}

export default Crew;
