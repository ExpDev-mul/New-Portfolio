import styles from './Project.module.css'

export default function Project({ name, period, content}) {
    
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.period}>{period}</h2>
            <h3 className={styles.content}>{content}</h3>
        </div>
    );
};
