import {  } from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

export default function Footer({  }) {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <span className={styles.name} style={{fontSize: "2rem", whiteSpace: "nowrap", overflow: "hidden"}}>Or Pinto<span style={{color: "hsl(2, 50%, 52%)"}}>;</span></span>
                <p className={styles.bio} style={{fontWeight: "500", marginTop: "5px"}}>Just an overly-ambitious guy</p>
            </div>

            <div className={styles.footerRight}>
                <div>
                    <p className={styles.name} style={{fontSize: "1rem", fontWeight: "500", marginBottom: "4px"}}>Internal Links</p>
                    <Link to="/home" className={styles.link}>Home</Link><br/>
                    <Link to="/projects" className={styles.link}>Projects</Link><br/>
                </div>

                <div>
                    <p className={styles.name} style={{fontSize: "1rem", fontWeight: "500", marginBottom: "4px"}}>External Links</p>
                    <a className={styles.link} href="https://www.linkedin.com/in/or-pinto-815028319/" target="_blank">LinkedIn</a><br/>
                    <a className={styles.link} href="https://github.com/expdev-mul" target="_blank">GitHub</a><br/>
                </div>
            </div>
        </footer>
    );
};
