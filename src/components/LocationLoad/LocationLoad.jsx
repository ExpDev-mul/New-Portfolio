import { useLocation } from 'react-router-dom';
import styles from './LocationLoad.module.css'
import { useEffect, useRef } from 'react';

export default function LocationLoad({  }) {
    // References
    const bar = useRef(null)    

    // Hooks
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0})
        bar.current.classList.add(styles.containerAnimate)
        setTimeout(() => bar.current.classList.remove(styles.containerAnimate), 1000);
    }, [location])

    // Return
    return (
        <div className={`${styles.container}`} ref={bar}></div>
    );
};
