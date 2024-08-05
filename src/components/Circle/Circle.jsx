import React, {useState} from 'react'

export default function Circle({x, y, color, radius}){
    const style = {
        position: "absolute",
        left: "0px",
        top: "0px",
        marginLeft: (x - radius/2) + "px",
        marginTop: (y - radius/2) + "px",
        width: radius + "px",
        height: radius + "px",
        background: `radial-gradient(circle at center, ${color}, transparent 50%)`,
        pointerEvents: "none"
    }

    return (
        <div style={style}>

        </div>
    );
}
