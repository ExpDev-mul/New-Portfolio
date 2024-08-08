import { useState } from 'react';
import styles from './Settings.module.css'

// Declaring global settings variables
const settings = [
    ["Dark Mode", true, () => {
        const current = settings[0][1]
        document.documentElement.setAttribute('data-theme', current ? "dark" : "light")
    }],

    ["Special Effects", true, () => {
        const current = settings[1][1]
        document.querySelectorAll('.special_effect').forEach(el => el.style.display = (current ? 'block' : 'none'))
    }],
]

export default function Settings({ open }) {
    // States
    const [switches, setSwitches] = useState( settings.map(([name, value], index) => value) )

    // Variables
    const updateSwitch = (index) => {
        settings[index][1] = !settings[index][1]
        setSwitches( settings.map(([name, value], index) => value) )
    }

    const settingsMap = settings.map(([name, value, activate], index) => 
        <div key={index} className={styles.setting}>
            <span className={styles.settingName}>{name}</span>
            <div className={styles.switch} onClick={() => {updateSwitch(index)}}>
                <div className={`${styles.icon} ${styles["icon" + index]}`}></div>
                <div className={`${styles.switchBall} ${styles["switchBall" + (value ? "Activated" : "Deactivated")]}`}></div>
                {activate()}
            </div>
        </div>
    )

    // When open is set to Visible it indicates visibility and Inivisible otherwise
    return (
        <>
            <div className={`${styles.background} ${styles["background" + open]}`} id='settings_background'></div>
            <div className={`${styles.container} ${styles["container" + open]}`}>
                {/* Components are not utilized for individual settings */}

                {settingsMap}
            </div>
        </>
    );
};
