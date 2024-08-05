import { useEffect, useRef, useState } from 'react'

import styles from './Home.module.css'

import Header from '../../components/Header/Header.jsx';
import Page from '../../components/Page/Page.jsx';
import CommandPrompt from '../../components/CommandPrompt/CommandPrompt.jsx';
import Circle from '../../components/Circle/Circle.jsx';
import Project from '../../components/Project/Project.jsx';
import Proficiency from '../../components/Proficiency/Proficiency.jsx';

export default function Home(){
    // States
  const [viewportSize, setviewportSize] = useState({width: window.innerWidth, height: window.innerHeight})

  // References
  const backgroundGrid = useRef(null)

  // Effects
  useEffect(() => {
    const handleResize = () => {
      const newViewportSize = {width: window.innerWidth, height: window.innerHeight}
      setviewportSize(newViewportSize)
      
      
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Return
  return (
    <>
      <Header current="Home"/>
      <Page children={
        <>
          <div className={styles.left}>
              <Circle x="100" y="200" color="rgba(194, 75, 71, 0.2)" radius="550"/>
              <Circle x="250" y="100" color="rgba(255, 124, 194, 0.1)" radius="600"/>
              <h1 className={styles.name}>Or Pinto</h1>
              <h2 className={styles.role}>Full Stack Web Developer</h2>
              <h3 className={styles.bio}>I am a 16 years old with a passion for programming</h3>
          </div>

          <div className={styles.right}>
              <CommandPrompt/>
          </div>
        </>
      } style={{marginTop: "80px"}}/>

      <Page children={
        <>
          <section>
              <h1 className={styles.name} style={{textAlign: "center", marginTop: "", fontSize: "3.4rem"}}>Who am I<span style={{color: "rgb(255, 0, 50)"}}>:</span></h1>
              <h3 className={styles.bio} style={{textAlign: "center", paddingLeft: "500px", paddingRight: "500px", fontWeight: "400"}}>I am a 16 years old programmer from Israel, with over 4 years of experience in programming. I started my journey as a Games Programmer in Lua, extensively contributing to tens of millions of visits and deploying multiple successful projects. I then fell in love with Full Stack Web Development, and started doing it on the regular.</h3>
              <h1 className={styles.name} style={{textAlign: "center", marginTop: "", fontSize: "3.4rem"}}>My Projects<span style={{color: "rgb(200, 50, 0)"}}>:</span></h1>
          </section>

          <section className={styles.projectsContainer}>
            <Project name="Riddler" period="July 2024 - July 2024" content="Riddler is a website intended for posting riddles and solving them. It ultimately is intended to develop the brain."/>
            <Project name="Shortest Path Visualizer" period="July 2024 - July 2024" content="Shortest path visualizer is extremely useful for computer science students but also to programming enthusiasts. It allows to visualize different pathfinding algorithms, and also includes maze generation algorithms. It helps grasp just how elegant these modern algorithms are."/>
            <div className={styles.projectsContainerBottom}>
              <p className={styles.seeMore}>See More</p>
            </div>
          </section>

          <h1 className={styles.name} style={{textAlign: "center", marginTop: "200px", fontSize: "3.4rem"}}>My proficiencies are in<span style={{color: "rgb(255, 0, 50)"}}>:</span></h1>
          <section className={styles.usesContainer}>
            <Proficiency name="React" logo="../../assets/react.svg"/>
            <Proficiency name="Express"/>
            <Proficiency name="MongoDB"/>
            <Proficiency name="Node.js"/>
            <Proficiency name="JavaScript"/>
            <Proficiency name="HTML"/>
            <Proficiency name="CSS"/>
            <Proficiency name="HTML"/>
            <Proficiency name="MySQL"/>
            <Proficiency name="PHP"/>
            <Proficiency name="Lua"/>
            <Proficiency name="Java"/>
            <Proficiency name="C++"/>
            <Proficiency name="Python"/>

          </section>

        </>
      } style={{display: "block", alignItems: "flex-start !important", backgroundColor: "var(--primary-color)", borderTop: "1px solid var(--secondary-border-color)"}}/>
    
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.name} style={{fontSize: "2rem"}}>Or Pinto<span style={{color: "hsl(2, 50%, 52%)"}}>;</span></span>
          <p className={styles.bio} style={{fontWeight: "500", marginTop: "5px"}}>People legitimately read this?</p>
        </div>

        <div className={styles.footerRight}>
          <div>
            <p className={styles.name} style={{fontSize: "1rem", fontWeight: "500", marginBottom: "4px"}}>Internal Links</p>
            <a className={styles.link}>Home</a><br/>
            <a className={styles.link}>Projects</a><br/>
            <a className={styles.link}>Experience</a>
          </div>

          <div>
            <p className={styles.name} style={{fontSize: "1rem", fontWeight: "500", marginBottom: "4px"}}>External Links</p>
            <a className={styles.link}>LinkedIn</a><br/>
            <a className={styles.link}>GitHub</a><br/>
          </div>
        </div>
        
      </footer>
    </>
  )
};
