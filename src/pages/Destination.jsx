
import React, { useState, useEffect } from "react";
import jsonData from "../data.json";
import Navbar from "../components/Navbar";



const Destination = () => {


  const [destinations, setDestinations] = useState([]);
  const [activeLink, setActiveLink] = useState("Moon");
  const [activeID, setActiveID] = useState('0');


  useEffect(() => {
    setDestinations(jsonData.destinations);
    
  }, []);

  const handleLinkClick = (link, id) => {
    setActiveLink(link);
    setActiveID(id);
  };

  return (
    <main className="destination">
      <Navbar />
      <h2>01 pick your destination</h2>

          <div className="container flex items-center">
            {destinations.map((destination,index)=>{
              if (destination.name === activeLink) {
              return(
                
            <div className="left flex items-center justify-center" key={index}>

              <img src={destination.images.webp} alt={`${destination.name} images`}/>
            </div>
              )}
            })}
            <div className="right ">
             <div className="link flex gap-6">
                <p className={activeLink === 'Moon' ? 'active' : ''} onClick={() => handleLinkClick('Moon', 0)}>Moon</p>
                <p className={activeLink === 'Mars' ? 'active' : ''} onClick={() => handleLinkClick('Mars', 1)}>Mars</p>
                <p className={activeLink === 'Europa' ? 'active' : ''} onClick={() => handleLinkClick('Europa', 2)}>Europa</p>
                <p className={activeLink === 'Titan' ? 'active' : ''} onClick={() => handleLinkClick('Titan',3)}>Titan</p>
              </div>
              {destinations.map ((destination) =>{
                if (destination.name === activeLink) {
                  return(
                    <div className="info" key={destination.id}>
                      <h1>{destination.name}</h1>
                      <p>{destination.description}</p>
                      <h4>{destination.distance}</h4>
                      <h4>{destination.travel}</h4>
                    </div>
                  )
                } else {
                  return null;
                }
              })}
          
            </div>
          </div>
    
    </main>
  );
};

export default Destination;
