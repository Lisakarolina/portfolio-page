import "./App.css";
import portrait from "./img/portrait_cv.jpeg";
import memoryGameImg from "./img/memoryGameImg.png";
import flamingo from "./img/flamingo_1.png";
import derdiedas from "./img/derdiedas.png";
import bridges from "./img/bridges.png";
import cypresslogo from "./img/cypress-logo.png";
import inventoryImg from "./img/plants_crud.png";
import ProjectCard from "./projectCard";
import SkillCard from "./skillCard";

function App() {
  return (
    <div>
      <div className="topnav">
        <a href="#portrait-box">Home</a>
        <a href="#work">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About me</a>
      </div>
      <header>
        <div id="portrait-box">
          <img src={portrait} id="portrait" />
        </div>
        <div id="intro">
          <h1 id="intro-title">Hi there!</h1>
          <div className="intro-text" id="descr">
            I'm an aspiring software developer looking for work
          </div>
        </div>
      </header>
      <div id="work">
        <h1 id="work-title">Projects</h1>
        <div id="work-panel">
          <ProjectCard
            img={flamingo}
            title="Simple Web Shop"
            description="Web shop frontend built with React and Bootstrap"
            gitURL="https://github.com/Lisakarolina/simple-e-shop"
            liveURL="https://lisakarolina.github.io/simple-e-shop/#/home"
          ></ProjectCard>
          <ProjectCard
            img={derdiedas}
            title="Article Game"
            description="Game that lets the user guess the article of words and helps with hints and corrections"
            gitURL="https://github.com/Lisakarolina/derdiedas"
            liveURL="https://articlegame-bb9c4.web.app/"
          ></ProjectCard>
          <ProjectCard
            img={bridges}
            title="Card Game"
            description="Card game to train your memory"
            gitURL="https://github.com/Lisakarolina/card-game"
            liveURL="https://lisakarolina.github.io/card-game/"
          ></ProjectCard>
          <ProjectCard
            img={memoryGameImg}
            title="Memory Game"
            description="This is a simple memory game that uses emojis as motives of the memory pairs"
            gitURL="https://github.com/Lisakarolina/memoryGame"
            liveURL="https://lisakarolina.github.io/memoryGame/index.html"
          ></ProjectCard>
          <ProjectCard
            img={inventoryImg}
            title="Plant Store"
            description="Express Application with MongoDB to view, add and delete items"
            gitURL="https://github.com/Lisakarolina/inventory"
            liveURL="https://inventory-production-83c4.up.railway.app/plantcatalog"
          ></ProjectCard>
        </div>
      </div>
      <div id="skills">
        <h1 id="skill-title">Technical Skills</h1>
        <h2 id="badge">Intermediate</h2>
        <div id="skill-panel">
          <SkillCard
            img={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            }
            title="Javascript"
          ></SkillCard>
          <SkillCard
            id="cypress-skill"
            img={<img src={cypresslogo}></img>}
            title="Cypress"
          ></SkillCard>
          <SkillCard
            img={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            }
            title="HTML"
          ></SkillCard>
          <SkillCard
            img={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            }
            title="CSS"
          ></SkillCard>
        </div>
        <h2 id="badge">Basic</h2>
        <div id="skill-panel">
          <SkillCard
            img={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            }
            title="Typescript"
          ></SkillCard>
          <SkillCard
            img={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            }
            title="Python"
          ></SkillCard>
          <SkillCard
            img={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            }
            title="Git"
          ></SkillCard>
          <SkillCard
            img={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            }
            title="MySQL"
          ></SkillCard>
          <SkillCard
            img={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            }
            title="React"
          ></SkillCard>
        </div>
        <h1 id="nat-lang">Natural Languages</h1>
        <div id="lang-panel">
          <SkillCard
            img={<div className="flag">🇩🇪</div>}
            title="German (Native)"
          ></SkillCard>
          <SkillCard
            img={<div className="flag">🇺🇸</div>}
            title="English (Fluent)"
          ></SkillCard>
          <SkillCard
            img={<div className="flag">🇫🇷</div>}
            title="French (Intermediate)"
          ></SkillCard>
          <SkillCard
            img={<div className="flag">🇬🇷</div>}
            title="Greek (Intermediate)"
          ></SkillCard>
        </div>
      </div>
      <footer>
        <div id="about">
          <h1 id="about-title">About me</h1>
          <div id="about-descr">
            After having studied Philosophy and the Classics I got interested in
            Computer Science and went back to university to get a Computer
            Science degree. I like about programming that is a challenging
            activity, that never gets boring but also has a creative side to it.
            I mainly use Javascript at the moment but am open to learning new
            languages. I'm a curious person interested in a range of different
            things: be it tech, history, literature or cooking. I love cats and
            would like to live on an island some day.
          </div>
          <div id="git-line">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              onClick={function () {
                window.open("https://github.com/Lisakarolina", "_blank");
              }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
