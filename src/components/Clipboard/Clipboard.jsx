import styles from './Clipboard.module.css'

export default function Clipboard({ value }) {
    // Functions
    const handleClick = () => {
        navigator.clipboard.writeText(value)
    }

    // Return
    return (
        <button className={`${styles.container} tip`} onClick={handleClick}>
            {value}
        </button>
    );
};