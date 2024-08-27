import styles from './Noticeboard.module.css'

import Page from '../../components/Page/Page.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import LinkedList from '../../components/LinkedList/LinkedList.jsx';
import { Link } from 'react-router-dom';

export default function Projects({  }) {
    return (
        <>
          <Page children={
            <>
                <section>
                    <h1 className={styles.name} style={{textAlign: "center", marginTop: "", fontSize: "3.4rem"}}>Noticeboard<span style={{color: "rgb(200, 50, 0)"}}>:</span></h1>
                </section>

                <section className={styles.projectsContainer}>
                    <LinkedList/>
                    <LinkedList/>
                </section>
            </>
          } style={{display: "block", alignItems: "flex-start !important", backgroundColor: "var(--primary-color)", borderTop: "1px solid var(--secondary-border-color)"}}/>
        
          <Footer/>
        </>
    );
}