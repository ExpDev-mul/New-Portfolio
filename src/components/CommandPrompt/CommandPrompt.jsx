import { useState, useEffect, useRef } from 'react'
import styles from './CommandPrompt.module.css'

function clamp(a, x, y){
    // Clamps a between x and y
    if (a < x){
        return x
    }

    return Math.min(a, y)
}

const paddingSpacing = 150 // Padding space for mouse enter

export default function CommandPrompt({}) {
    // States
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    const [isHovered, setIsHovered] = useState(false) // Whether the mouse is hovered on the interface
    const [typeAppears, setTypeAppears] = useState(false) // The type symbol that reappears

    // References
    const container = useRef(null)

    // Effects
    useEffect(() => {
        const mouseMove = (e) => {
            const rectMetadata =  container.current.getBoundingClientRect();
            const width = 550
            const height = 350
            setMousePosition({
                x: e.clientX - rectMetadata.x - width/2,
                y: e.clientY - rectMetadata.y - height/2
            })

            setIsHovered(
                (mousePosition.x >= -(width + paddingSpacing)/2 && mousePosition.x <= (width + paddingSpacing)/2) &&
                (mousePosition.y >= -(height + paddingSpacing)/2 && mousePosition.y <= (height + paddingSpacing)/2)
            )
        }

        document.addEventListener("mousemove", mouseMove)

        return () => {
            document.removeEventListener("mousemove", mouseMove)
        }
    }, [mousePosition])

    useEffect(() => {
        const interval = setInterval(() => {
            setTypeAppears((prev) => !prev)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [typeAppears])

    // Return
    return (
        <div className={styles.container} ref={container} style={
            {
                transform: !isHovered ? `translateX(-50%) rotateX(0deg) rotateY(0deg)` : `translateX(-50%) rotateX(${clamp(mousePosition.y/5, -20, 20)}deg) rotateY(${ clamp(mousePosition.x/5, -20, 20)}deg)`,
                background: !isHovered ? "rgb(23, 24, 22)" : `linear-gradient(${Math.atan2(mousePosition.y, mousePosition.x)*180/Math.PI + 90}deg, rgb(23, 24, 22) ${
                    Math.min(Math.sqrt(Math.pow(mousePosition.x, 2) + Math.pow(mousePosition.y, 2))/3, 60)
                }%, rgba(60, 60, 60, 0.5) 100%)`
            }
        }>
            <p className={styles.code}><span className={styles.directory}>{"C:\\Users>"}</span> cd Or-Pinto</p>
            <p className={styles.code}><span className={styles.directory}>{"C:\\Users\\Or-Pinto>"}</span> search contacts<br/>
LinkedIn: Or Pinto<br/>
GitHub: https://github.com/ExpDev-mul</p>

            <p className={styles.code}><span className={styles.directory}>{"C:\\Users\\Or-Pinto>"}</span>{typeAppears ? <span style={{fontWeight: 900}}>|</span> : ''}</p>
        </div>
    );
};
