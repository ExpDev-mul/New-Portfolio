import styles from './Projects.module.css'

import Page from '../../components/Page/Page.jsx';
import Project from '../../components/Project/Project.jsx';
import Sparkle from '../../components/Sparkle/Sparkle.jsx'
import Footer from '../../components/Footer/Footer.jsx';

export default function Projects({  }) {
    return (
        <>
          <Page children={
            <>
                <Sparkle radius="25" style={{translate: "-80px -40px"}} color="yellow"/>
                <Sparkle radius="30" style={{translate: "10px -20px"}} color="red"/>
                <Sparkle radius="20" style={{translate: "50px -90px"}} color="blue"/>
                <section>
                    <h1 className={styles.name} style={{textAlign: "center", marginTop: "", fontSize: "3.4rem"}}>My Projects<span style={{color: "rgb(200, 50, 0)"}}>:</span></h1>
                </section>

                <section className={styles.projectsContainer}>
                    <Project link="https://github.com/ExpDev-mul/keyframe-interpreter" name="Keyframe" period="July 2024 - present" usage={["C++"]} content="Keyframe is a powerful user-friendly programming language that I am currently developing an interpreter for using C++, this is not by any means a huge focus but a side hobby."/>
                    <Project link="https://youtu.be/fDXp1IKn8qE" name="Riddler" period="July 2024 - July 2024 · a few days" usage={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Visual Studio Code"]} content="Riddler is a full stack website I developed intended for people to create accounts to solve and create customized riddles and track their statistics."/>
                    <Project link="https://youtu.be/rkJ6Obc9WXQ" name="Shortest Path Visualizer" period="July 2024 - July 2024 · a few days" usage={["HTML", "CSS", "JavaScript", "Visual Studio Code", "GitHub"]} content="This is a visualizer that consists of maze generation, obstacle construction and user modifications to explore how common pathfinding algorithms operate. I developed this to help computer science students grasp these algorithms, whilst also exploring the beauty of graph theory."/>
                    <Project link="https://youtu.be/rxs8qNKcY0k" name="Bezier Playground" period="July 2024 - July 2024 · a few days" usage={["HTML", "CSS", "JavaScript", "Visual Studio Code", "GitHub"]} content="Created a modifiable optimized visualizer for bezier curves, using scalable vector graphics. This was just a fun project."/>
                    <Project link="https://youtu.be/R5UZ3qUPDvM" name="React Responsive Design" period="July 2024 - July 2024 · a few days" usage={["HTML", "CSS", "JavaScript", "Visual Studio Code", "GitHub"]} content="This was an online interpreter with syntax highlighting and consistent output that simply allowed users to execute Lua code online."/>
                    <Project link="https://youtu.be/oSvXZtM3tY4" name="Lua Playground" period="July 2024 - July 2024 · a few days" usage={["HTML", "CSS", "JavaScript", "Visual Studio Code", "GitHub"]} content="This was an online interpreter with syntax highlighting and consistent output that simply allowed users to execute Lua code online."/>
                    <Project link="https://youtu.be/AtOeGnTSc3Q" name="Clash of Aircrafts" period="May 2024 - May 2024 · over a week" usage={["Lua"]} content="This project was a very well-designed and optimized game that enabled players to deploy their own fighter aircrafts, and fly them with realistic and smooth physics mechanisms. They could then fire at targets and when hitting them would earn in-game saved currency. This was just a fun project."/>
                    <Project link="none" name="The Party" period="Aug 2023 - Jan 2024 · 6 mos" usage={["Lua"]} content="The party was an incredibly complex 3D story-theme game, introducing concepts such as databases, vehicle mechanics, frequent client-server replication, writing exploit-proof code, programming complex responsive graphical user interfaces, and keeping the project compatible with low-end devices."/>
                    <Project link="https://youtu.be/rwbG0GGZ-CE" name="Dictionary Race" period="July 2023 - July 2023 · a few days" usage={["Lua"]} content="Dictionary race was an incredibly designed paced-game consisting of users in a lobby competing in rounds, given the task to type in a dictionary-valid word that contains an explicit pattern. The game would by time get more difficult. The project was incredibly complex to the nature of programming complex graphical user interfaces, whilst ensuring seamless communication between the cliend and the server, and also maintaining the server-side exploit-proof from backdoors."/>
                    <Project link="https://youtu.be/uecGusAzakE" name="🌌 Create a Galaxy" period="Feb 2023 - Feb 2023 · a few days" usage={["Lua", "Visual Studio Code"]} content="Create a Galaxy allowed a user to create and customize their own planets, and construct complex connections of plantary motion."/>
                    <Project link="https://youtu.be/fhnwX5UAKuw" name="Quick Draw" period="Dec 2021 - Dec 2021 · a few days" usage={["Lua"]} content="Quick Draw led users project their drawings into a multiplayer 3D space with replication such that other players could see their drawings live, and custom toolkits that allowed them to control their drawing."/>
                </section>

                <Sparkle radius="30" style={{translate: "-150px 95px"}} color="blue"/>
                <Sparkle radius="15" style={{translate: "150px 120px"}} color="yellow"/>
                <Sparkle radius="20" style={{translate: "0px 90px"}} color="red"/>
            </>
          } style={{display: "block", alignItems: "flex-start !important", backgroundColor: "var(--primary-color)", borderTop: "1px solid var(--secondary-border-color)"}}/>
        
          <Footer/>
        </>
    );
}