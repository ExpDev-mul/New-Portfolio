import styles from './Proficiency.module.css'

import react from '../../assets/react.svg'
import nodejs from '../../assets/nodejs.svg'
import php from '../../assets/php.svg'
import python from '../../assets/python.svg'
import cpp from '../../assets/cpp.svg'
import lua from '../../assets/lua.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/javascript.svg'
import java from '../../assets/java.svg'
import mongodb from '../../assets/mongodb.svg'
import express from '../../assets/express.svg'
import mysql from '../../assets/mysql.svg'



const logos = {
    "React": react,
    "Node.js": nodejs,
    "PHP": php,
    "Python": python,
    "C++": cpp,
    "Lua": lua,
    "HTML": html,
    "CSS": css,
    "JavaScript": javascript,
    "Java": java,
    "MongoDB": mongodb,
    "Express": express,
    "MySQL": mysql
}

console.log(react)
export default function Proficiency({ name }) {
    
    return (
        <div className={styles.container}>
            <img className={styles.image} src={logos[name]}/>
            <p className={styles.name}>{name}</p>
        </div>
    );
};
