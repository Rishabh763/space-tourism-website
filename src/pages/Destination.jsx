import React, { useState, useEffect } from "react";
import data from "../data.json";
import Navbar from "../components/Navbar";

const Destination = () => {
  const [destinations, setDestination] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setDestination(data.destinations);
  }, []);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const destination = destinations[activeTab] || {};

  return (
    <div className="destination full-width min-h-screen">
      <Navbar />
      <h2>01 pick your destination</h2>

      <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
              <div
                className="left flex items-center justify-center"
                
              >
                <img
                  src={destination.images?.webp}
                  alt={`${destination.name} images`}
                />
              </div>
            
        <div className="right ">
          <div className="tab-buttons">
            {destinations.map((place, index) => (
              <button
                key={index}
                className={index === activeTab ? "active" : ""}
                onClick={() => changeTab(index)}
              >
                {place.name}
              </button>
            ))}
          </div>
                <div className="info" key={destination.id}>
                  <h1>{destination.name}</h1>
                  <p>{destination.description}</p>
                  <h4>{destination.distance}</h4>
                  <h4>{destination.travel}</h4>
                </div>
              
        </div>
      </div>
    </div>
  );
};

export default Destination;
