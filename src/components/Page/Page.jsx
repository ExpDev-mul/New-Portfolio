
import styles from './Page.module.css'

export default function Page({ children, style }){
    // Return    
    return (
        <div className={styles.container} style={style}>{children}</div>
    );
};
