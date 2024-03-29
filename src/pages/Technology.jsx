import React, { useState, useEffect } from "react";
import jsonData from "../data.json";
import Navbar from '../components/Navbar'


function Technology() {
    
  const [technologys, setTechnology] = useState([]);
  const [activeLink, setActiveLink] = useState("Launch vehicle");
  const [activeID, setActiveID] = useState(0);


  useEffect(() => {
    setTechnology(jsonData.technology);
    
  }, []);

  const handleLinkClick = (link, id) => {
    setActiveLink(link);
    setActiveID(id);
  };

  return (
    <main>
      <Navbar/>
      technology
      <h2>03 pick your technology</h2>

<div className="container">
{technologys.map((technology,index)=>{
            if (technology.id === activeLink) {
            return(

          <div className="left" key={index}>
            <img src={technology.images.landscape} alt={`${technology.name} images`}/>

          </div>
            )}
          })}
  <div className="right">
   <div className="link flex gap-6">
    {technologys.map((technology)=>{
      return(
        <p className={activeLink === '${technology.name}' ? 'active-technology flex items-center justify-center' : ''} onClick={() => handleLinkClick('${technology.name}', technology.id)}>{technology.id + 1}</p>
      )
    })}
    </div>
    {technologys.map ((technology) =>{
      if (technology.id === activeID) {
        return(
          <div className="info" key={technology.id}>
            <h1>{technology.name}</h1>
            <p>{technology.description}</p>
          </div>
        )
      } else {
        return null; 
      }
    })}
    
  </div>
</div>
          
    </main>
  )
}

export default Technology
