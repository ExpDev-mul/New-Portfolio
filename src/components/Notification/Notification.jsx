import styles from './Notification.module.css'

export default function Notification({ content }) {  
    // Return  
    return (
        <div className={styles.notification}>
            <p className={styles.notificationContent}>{content}</p>
        </div>
    );
};