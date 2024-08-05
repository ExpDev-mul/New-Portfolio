import styles from './Header.module.css'

export default function Header({ current }){
    // Return
    return (
        <header className={styles.container}>
            <div className={styles.container_section}>
                <span className={`${styles.name} ${styles.left}`}>Or Pinto<span style={{color: "hsl(2, 50%, 52%)"}}>;</span></span>
                <button className={`${styles.low_button} ${styles.left} ${current == "Home" ? styles.current : ""}`}>Home</button>
                <button className={`${styles.low_button} ${styles.left} ${current == "Projects" ? styles.current : ""}`}>Projects</button>
                <button className={`${styles.low_button} ${styles.left} ${current == "Experience" ? styles.current : ""}`}>Experience</button>
            </div>
            

            <div className={styles.container_section}>
                <button className={`${styles.low_button} ${styles.right} ${styles.linkedin}`}>LinkedIn</button>
                <button className={`${styles.high_button} ${styles.right}`}>Contact Me</button>
                <button className={`${styles.settings_button} ${styles.right}`} style={{marginRight: "30px"}}></button>
            </div>
        </header>
    );
}