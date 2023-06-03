import React, {useContext, useEffect} from "react";
import Unity, {UnityContext} from "react-unity-webgl";
import {PortfolioContext} from "../../contexts/portfolioContext";

const unityContext = new UnityContext({
    loaderUrl: "/build/MazeGame.loader.js",
    dataUrl: "/build/MazeGame.data",
    frameworkUrl: "/build/MazeGame.framework.js",
    codeUrl: "/build/MazeGame.wasm"
});

const navBarHeight = 64;
const divHeight = `calc(99vh - ${navBarHeight}px)`;
const styles = {
    container: {
        width: "100vw",
        height: "100vh",
        maxWidth: "100%",
        border: "1px solid green"
    }
};

const MazeGame = () => {
    const {unityGamePlaying, setUnityGamePlaying} = useContext(PortfolioContext);

    useEffect(() => {
        setUnityGamePlaying!(true);
        return function cleanup() {
            setUnityGamePlaying!(false);
        };
    });

    return (
        <div style={{maxWidth: "100%", width: "99vw", height: divHeight, textAlign:"center"}}>
            <Unity width={"99vw"} height={divHeight} unityContext={unityContext}/>
        </div>
    );
};

export default MazeGame;
