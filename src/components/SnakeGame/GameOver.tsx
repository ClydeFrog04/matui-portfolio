import React from "react"

interface GameOverProps {
    width: number,
    height: number,
    score: number,
    newHighScore: boolean,
    highScore: number
}

const GameOver:React.FC<GameOverProps> = ({width, height, score, newHighScore, highScore}) =>{



    return (
        <div
        id="GameBoard"
        style={{
            width: width,
            height: height,
            borderWidth: width / 50
        }}
        >
            <div id="GameOver" style={{fontSize: width / 15}}>
                <div id="GameOverText">You lose sucker!</div>
                <div>Your Score: {score}</div>
            </div>
            <div>
            {newHighScore ? 'New local ' : 'Local '}high score:{' '} {highScore}
            </div>
            <div id="PressSpaceText">Press Space to Restart</div>
        </div>
    );
}

export default GameOver;
