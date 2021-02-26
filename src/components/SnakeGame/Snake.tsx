import React, {useEffect, useState} from "react";
import GameOver from "./GameOver";
import Timeout = NodeJS.Timeout;
//todo: snake css

interface SnakeProps {
    snakeColor: string,
    appleColor: string,
    percentageWidth: number,
    startSnakeSize: number
}

const Snake: React.FC<SnakeProps> = (props) => {

    const getRandomColor = () => {
        let hex = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [blockWidth, setBlockWidth] = useState(0);
    const [blockHeight, setBlockHeight] = useState(0);
    const [gameLoopTimeout, setGameLoopTimeout] = useState(50);
    const [timeOutID, setTimeOutID] = useState<Timeout>();
    const [startSnakeSize, setStartSnakeSize] = useState(0);
    const [snake, setSnake] = useState<{ xPos: number, yPos: number }[]>([]);
    const [apple, setApple] = useState<{ xPos: number, yPos: number }>({xPos: 0, yPos: 0});
    const [direction, setDirection] = useState("right");
    const [directionChanged, setDirectionChanged] = useState(false);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [snakeColor, setSnakeColor] = useState(props.snakeColor || getRandomColor());//todo: define props and rand color func
    const [appleColor, setAppleColor] = useState(props.appleColor || getRandomColor());//todo: same as above
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(Number(localStorage.getItem("snakeHighScore") || 0));
    const [newHighScore, setNewHighScore] = useState(false);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "space") {
            resetGame();
            return;
        }
        if (directionChanged) return;

        switch (e.key) {
            case "ArrowLeft":
            case "a":
                goLeft();
                break;
            case "ArrowUp":
            case "w":
                goUp();
                break;
            case "ArrowDown":
            case "s":
                goDown();
                break;
            case "ArrowRight":
            case "d":
                goRight();
                break;
        }
        setDirectionChanged(true);
    };

    useEffect(() => {
        initGame();
        window.addEventListener("keydown", handleKeyDown);
        gameLoop();

        return () => {
            clearTimeout(timeOutID!);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const initGame = () => {
        //game size init
        let percentageWidth = props.percentageWidth || 40;
        let width = document.getElementById("GameBoard")!.parentElement!.offsetWidth * (percentageWidth / 100);
        //todo: figure out why we're setting width like this
        width -= width % 30;
        if (width < 30) width = 30;
        let height = (width / 3) * 2;
        let blockWidth = width / 30;
        let blockHeight = height / 20;

        //snake init
        let startSnakeSize = props.startSnakeSize || 6;
        let snake = [];
        let xPos = width / 2;
        let yPos = height / 2;
        let snakeHead = {xPos: width / 2, yPos: height / 2};
        snake.push(snakeHead);
        for (let i = 1; i < startSnakeSize; i++) {
            xPos -= blockWidth;
            let snakePart = {xPos: xPos, yPos: yPos};
            snake.push(snakePart);
        }

        //apple init
        let appleXpos =
            Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
            blockWidth;
        let appleYpos =
            Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
            blockHeight;
        while (appleYpos === snake[0].yPos) {
            appleYpos =
                Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
                blockHeight;
        }

        setWidth(width);
        setHeight(height);
        setBlockWidth(blockWidth);
        setBlockHeight(blockHeight);
        setStartSnakeSize(startSnakeSize);
        setSnake(snake);
        setApple({xPos: appleXpos, yPos: appleYpos});
    };

    const gameLoop = () => {
        let timeoutId = setTimeout(() => {
            if (!isGameOver) {
                moveSnake();
                tryToEatSnake();
                tryToEatApple();
                setDirectionChanged(false);
            }
            gameLoop();
        }, gameLoopTimeout);
        setTimeOutID(timeoutId);
    };

    const resetGame = () => {
        // snake reset
        let snake = [];
        let localApple: { xPos: number, yPos: number } = {xPos: 0, yPos: 0};
        let xPos = width / 2;
        let yPos = height / 2;
        let snakeHead = {xPos: width / 2, yPos: height / 2};
        snake.push(snakeHead);
        for (let i = 1; i < startSnakeSize; i++) {
            xPos -= blockWidth;
            let snakePart = {xPos: xPos, yPos: yPos};
            snake.push(snakePart);
        }

        // apple position reset
        localApple.xPos =
            Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
            blockWidth;
        localApple.yPos =
            Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
            blockHeight;
        while (isAppleOnSnake(localApple.xPos, localApple.yPos)) {
            localApple.xPos =
                Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
                blockWidth;
            localApple.yPos =
                Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
                blockHeight;
        }
        setSnake(snake);
        setApple(localApple);
        setDirection("right");
        setDirectionChanged(false);
        setIsGameOver(false);
        setGameLoopTimeout(50);
        setSnakeColor(getRandomColor());
        setAppleColor(getRandomColor());
        setScore(0);
        setNewHighScore(false);
    };

    const moveSnake = () => {
        let localSnake = snake;
        let prevPartX = snake[0].xPos;
        let prevPartY = snake[0].yPos;
        let tempPartX = prevPartX;
        let tempPartY = prevPartY;
        moveHead();
        for (let i = 1; i < localSnake.length; i++) {
            tempPartX = localSnake[i].xPos;
            tempPartY = localSnake[i].yPos;
            localSnake[i].xPos = prevPartX;
            localSnake[i].yPos = prevPartY;
            prevPartX = tempPartX;
            prevPartY = tempPartY;
        }
        setSnake(localSnake);
    };

    const tryToEatApple = () => {
        let localSnake = [...snake];
        let localApple = {...apple};

        if (localSnake[0].xPos === localApple.xPos && localSnake[0].yPos === localApple.yPos) {
            let newTail = {xPos: apple.xPos, yPos: apple.yPos};

            //increase snake size
            snake.push(newTail);

            //create new apple
            apple.xPos = Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) * blockWidth;
            apple.yPos = Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) * blockHeight;
            while (isAppleOnSnake(apple.xPos, apple.yPos)) {
                apple.xPos = Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) * blockWidth;
                apple.yPos = Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) * blockHeight;
            }

            //increment high score if needed
            if (score === highScore) {
                setHighScore(highScore + 1);
                localStorage.setItem("snakeHighScore", String(highScore));//todo:backend with non ls high score tracking
                setNewHighScore(true);
            }

            if (gameLoopTimeout > 25) setGameLoopTimeout(gameLoopTimeout - 0.5);
        }
    };

    const tryToEatSnake = () => {
        for (let i = 1; i < snake.length; i++) {
            if (snake[0].xPos === snake[i].xPos && snake[0].yPos === snake[i].yPos) setIsGameOver(true);
        }
    };

    const isAppleOnSnake = (appleXpos: number, appleYpos: number) => {
        for (let i = 0; i < snake.length; i++) {
            if (appleXpos === snake[i].xPos && appleYpos === snake[i].yPos) return true;
        }
        return false;
    };

    const moveHead = () => {
        switch (direction) {
            case "left":
                moveHeadLeft();
                break;
            case "up":
                moveHeadUp();
                break;
            case "right":
                moveHeadRight();
                break;
            default:
                moveHeadDown();
        }
    };

    const moveHeadLeft = () => {
        snake[0].xPos = snake[0].xPos <= 0 ? width - blockWidth : snake[0].xPos - blockWidth;
    };
    const moveHeadUp = () => {
        snake[0].yPos = snake[0].yPos <= 0 ? height - blockHeight : snake[0].yPos - blockHeight;
    };
    const moveHeadRight = () => {
        snake[0].xPos = snake[0].xPos >= width - blockWidth ? 0 : snake[0].xPos + blockWidth;
    };

    const moveHeadDown = () => {
        snake[0].yPos = snake[0].yPos >= height - blockHeight ? 0 : snake[0].yPos + blockHeight;
    };

    const goLeft = () => {
        let newDirection = direction === "right" ? "right" : "left";
        setDirection(newDirection);
    };

    const goRight = () => {
        let newDirection = direction === "left" ? "left" : "right";
        setDirection(newDirection);
    };

    const goUp = () => {
        let newDirection = direction === "down" ? "down" : "up";
    };

    const goDown = () => {
        let newDirection = direction === "up" ? "up" : "down";
    };

    return (
        isGameOver ? <GameOver
                width={width}
                height={height}
                highScore={highScore}
                newHighScore={newHighScore}
                score={score}
            /> :
            <div
                id={"GameBoard"}
                style={{
                    width: width,
                    height: height,
                    borderWidth: width / 50
                }}>
                {snake.map((snakePart, index) => {
                    return (
                        <div
                            key={index}
                            className={"Block"}
                            style={{
                                width: blockWidth,
                                height: blockHeight,
                                left: snakePart.xPos,
                                top: snakePart.yPos,
                                backgroundColor: snakeColor
                            }}
                        />
                    );
                })}
                <div
                    className={"Block"}
                    style={{
                        width: blockWidth,
                        height: blockHeight,
                        left: apple.xPos,
                        top: apple.yPos,
                        backgroundColor: appleColor
                    }}/>
                <div id={"Score"} style={{fontSize: width / 20}}>
                    HIGH-SCORE: {highScore}&ensp;&ensp;&ensp;&ensp;SCORE:{" "}
                    {score}
                </div>
            </div>
    );
};

export default Snake;
