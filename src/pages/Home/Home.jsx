import { useRef } from 'react'
import { Link } from 'react-router-dom';

import styles from './Home.module.css'

import Page from '../../components/Page/Page.jsx';
import CommandPrompt from '../../components/CommandPrompt/CommandPrompt.jsx';
import Circle from '../../components/Circle/Circle.jsx';
import Project from '../../components/Project/Project.jsx';
import Proficiency from '../../components/Proficiency/Proficiency.jsx';
import Sparkle from '../../components/Sparkle/Sparkle.jsx'
import Clipboard from '../../components/Clipboard/Clipboard.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export default function Home(){
  // References
  const backgroundGrid = useRef(null)

  // Return
  return (
    <>
      <Page children={
        <>
          <div className={styles.left}>
              <Circle x="100" y="200" color="rgba(194, 75, 71, 0.2)" radius="550"/>
              <Circle x="250" y="100" color="rgba(255, 124, 194, 0.1)" radius="600"/>
              <h1 className={styles.name}>Or Pinto</h1>
              <h2 className={styles.role}>Full Stack Web Developer</h2>
              <h3 className={styles.bio}>I am just an overly-amibitious 16 year old</h3>
          </div>

          <div className={styles.right}>
              <CommandPrompt/>
          </div>
        </>
      } style={{}}/>

      <Page children={
        <>
          <Sparkle radius="25" style={{translate: "-50px -40px"}} color="blue"/>
          <Sparkle radius="30" style={{translate: "10px -20px"}} color="yellow"/>
          <Sparkle radius="20" style={{translate: "50px -90px"}} color="red"/>
          <section>
              <h1 className={styles.name} style={{textAlign: "center", marginTop: "", fontSize: "3.4rem"}}>Who am I<span style={{color: "rgb(255, 0, 50)"}}>:</span></h1>
              <h3 className={styles.bio} style={{textAlign: "center", paddingLeft: "200px", paddingRight: "200px", fontWeight: "400"}}>I am a 16 years old programmer from Israel, with over 4 years of experience in programming. I started my journey as a Games Programmer in Lua, extensively contributing to tens of millions of visits and deploying multiple successful projects. I then fell in love with Full Stack Web Development, and started doing it on the regular.</h3>
              <h1 className={styles.name} style={{textAlign: "center", marginTop: "", fontSize: "3.4rem"}}>My Projects<span style={{color: "rgb(255, 0, 50)"}}>:</span></h1>
          </section>

          <section className={styles.projectsContainer}>
            <Project link="https://github.com/ExpDev-mul/keyframe-interpreter" name="Keyframe" period="July 2024 - present" usage={["C++"]} content="Keyframe is a powerful user-friendly programming language that I am currently developing an interpreter for using C++, this is not by any means a huge focus but a side hobby."/>
            <Project link="https://youtu.be/fDXp1IKn8qE" name="Riddler" period="July 2024 - July 2024 · a few days" usage={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Visual Studio Code"]} content="Riddler is a full stack website I developed intended for people to create accounts to solve and create customized riddles and track their statistics."/>
            <div className={styles.projectsContainerBottom}>
              <Link to="/projects" style={{textDecoration: "none"}}>
                <p className={styles.seeMore}>See More</p>
              </Link>
            </div>
          </section>

          <Sparkle radius="30" style={{translate: "-150px 95px"}} color="blue"/>
          <Sparkle radius="15" style={{translate: "150px 120px"}} color="yellow"/>
          <Sparkle radius="20" style={{translate: "0px 90px"}} color="red"/>
          <h1 className={styles.name} style={{textAlign: "center", marginTop: "200px", fontSize: "3.4rem"}}>What I use and Learn<span style={{color: "rgb(255, 0, 50)"}}>:</span></h1>
          <section className={styles.usesContainer}>
            <Proficiency name="Next"/>
            <Proficiency name="React"/>
            <Proficiency name="HTML"/>
            <Proficiency name="CSS"/>
            <Proficiency name="JavaScript"/>
            <Proficiency name="Node.js"/>
            <Proficiency name="PHP"/>
            <Proficiency name="MySQL"/>
            <Proficiency name="Express"/>
            <Proficiency name="MongoDB"/>
            <Proficiency name="Tailwind CSS"/>
            <Proficiency name="Lua"/>
            <Proficiency name="Java"/>
            <Proficiency name="C++"/>
            <Proficiency name="Python"/>
            <Proficiency name="GitHub"/>
            <Proficiency name="Visual Studio Code"/>
          </section>

          <h1 className={styles.name} style={{textAlign: "center", marginTop: "200px", fontSize: "3.4rem"}} id='contact_top'>Contact me<span style={{color: "rgb(255, 0, 50)"}}>:</span></h1>
          <h3 className={styles.bio} style={{textAlign: "center", paddingLeft: "200px", paddingRight: "200px", fontWeight: "400", marginBottom: "60px"}}>Do not hesitate to shoot me a message on all platforms. I always respond!</h3>
          <Clipboard value="orpinto1411@gmail.com"/>
        </>
      } style={{display: "block", alignItems: "flex-start !important", backgroundColor: "var(--primary-color)", borderTop: "1px solid var(--secondary-border-color)"}}/>
    
      <Footer/>
    </>
  )
};
