import React, { useState, useEffect } from "react";
import jsonData from "../data.json";
import Navbar from "../components/Navbar";

function Crew() {
  const [crews, setCrews] = useState([]);
  const [activeLink, setActiveLink] = useState("Douglas Hurley");
  const [activeID, setActiveID] = useState(0);

  useEffect(() => {
    setCrews(jsonData.crew);
  }, []);

  const handleLinkClick = (link, id) => {
    setActiveLink(link);
    setActiveID(id);
  };

  return (
    <main className="technology">
      <Navbar />

      <h2>02 pick your crew</h2>

      <div className="container">
        {crews.map((crew) => {
          if (crew.id === activeLink) {
            return (
              <div
                className="left w-[100%] flex items-center justify-center"
                key={crew.id}
              >
                <img src={crew.images.png} alt={`${crew.name} images`} />
              </div>
            );
          }
        })}
        <div className="right">
          <div className="link flex gap-6">
            {crews.map((crew) => {
              return (
                <p
                  className={activeLink === "${crew.name}" ? "active" : ""}
                  onClick={() => handleLinkClick("crew.name", crew.id)}
                >
                  {crew.id}
                </p>
              );
            })}
          </div>
          {crews.map((crew) => {
            if (crew.id === activeID) {
              return (
                <div className="info" key={crew.id}>
                  <h1>{crew.name}</h1>
                  <h4>{crew.role}</h4>
                  <p>{crew.bio}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </main>
  );
}

export default Crew;
