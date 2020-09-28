import React from "react"


interface StarryBackgroundProps {
    className?: string;

}
const StarryBackground: React.FC<StarryBackgroundProps> = () =>{



    return (
        <div className={"starryBackground"}>
            <div id="background"/>
            <div id="midground"/>
            <div id="foreground"/>
        </div>
    );
}

export default StarryBackground;