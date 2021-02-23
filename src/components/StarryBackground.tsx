import React, {useContext} from "react";
import {PortfolioContext} from "../contexts/portfolioContext";


interface StarryBackgroundProps {
    className?: string;

}
const StarryBackground: React.FC<StarryBackgroundProps> = () =>{
    const {unityGamePlaying} = useContext(PortfolioContext);


    return (
        unityGamePlaying ? null :
        <div className="starryBackground">
            <div id="background"/>
            <div id="midground"/>
            <div id="foreground"/>
        </div>
    );
}

export default StarryBackground;
