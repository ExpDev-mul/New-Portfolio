import styles from './Sparkle.module.css'

import sparkleBlue from '../../assets/Sparkles/sparkle-blue.svg'
import sparkleYellow from '../../assets/Sparkles/sparkle-yellow.svg'
import sparkleRed from '../../assets/Sparkles/sparkle-red.svg'


const colors = {
    "blue": sparkleBlue,
    "yellow": sparkleYellow,
    "red": sparkleRed
}

export default function Sparkle({ color, radius, style }) {
    
    return (
        <img className={`${styles.image} special_effect`} style={{...style, width: radius + "px", height: radius + "px"}} src={colors[color]}/>
    );
};
