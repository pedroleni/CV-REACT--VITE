import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <div className="hero-image"><img src={hero.image} alt="" /></div>
      <div className="hero-card ">
      <h1 className="name_pedro">
        {hero.name} 
      </h1>
      <h2>
        {hero.adress}
      </h2>
        <p>πΊοΈ{hero.city} </p>
        <p>ποΈ{hero.birthDate}</p>
        <p>
          π§
          <a href={"mailto:" + hero.email}>
          pedroleridanieto@hotmail.com
          </a>
        </p>
        <p>πΎ<a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Hero;