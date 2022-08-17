import { useState } from "react";
import "./App.css";
import { CV } from "./CV/CV";
import Hero from "./components/Hero/Hero.jsx";
import More from "./components/More/More.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import About from "./components/About/About.jsx";

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <div>
        <div className="flex-hero">
          <div className="container-hero">
            <Hero hero={hero} />
            <More
              languages={languages}
              habilities={habilities}
              volunteer={volunteer}
            />
          </div>
          <div className="container-other">
            <div className="container-about">
              <div className="divider">
                <span></span>
                <span>Sobre mi</span>
                <span></span>
              </div>
              <div className="container--about">
                <About hero={hero} />
              </div>
            </div>




            <div className="img-chair"><img src={hero.image2}></img></div>

            <div className="container-btn">
              <nav>
                <div className="divider">
                  <span></span>
                  <span>
                    <button
                      className="custom-btn btn-4"
                      onClick={() => setShowEducation(true)}
                    >
                      Estudios
                    </button>
                    <button
                      className="custom-btn btn-4"
                      onClick={() => setShowEducation(false)}
                    >
                      Experiencia
                    </button>
                  </span>
                  <span></span>
                </div>
              </nav>
              <div>
                {showEducation ? (
                  <Education education={education} />
                ) : (
                  <Experience experience={experience} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
