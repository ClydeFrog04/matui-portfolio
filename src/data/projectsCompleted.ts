//eventually I plan to make a backend for this, but I don't have that right now!
import {IProject} from "../interfaces/projectInterfaces";

import quizApp from "../assets/quizapp/QuizPage.png";
import startPage from "../assets/quizapp/StartPage.png";

import sfr from "../assets/sfr/SFR.png";
import sfrLogin from "../assets/sfr/Login.png";

import carSales from "../assets/carSales/CarSelect.png";
import addFeature from "../assets/carSales/AddFeatures.png";

import sleepTracker from "../assets/sleepTracker/GraphPage.png";

export const projectsCompleted:IProject[] =[
    {
        images: [{src: quizApp, alt: "A trivia quiz game"}, {src: startPage, alt: "A trivia quiz game"}],
        name: "quizApp",
        timeSpent: "1 month",
        numContributors: 7,
        role:"State Management",
        description: "A trivia quiz game with many game settings so the player never gets bored playing.",
        stack: "Reactjs, typescript, Context api, Material ui, express"
    },
    {
        images: [{src: sfr, alt:"A family recipe website"}, {src: sfrLogin, alt: "Login page for sfr"}],
        name: "Secret Family Recipes",
        timeSpent: "2 weeks",
        numContributors: 4,
        role:"State management, connect frontend to backend",
        description: "A place to store all your favorite recipes that might be on loose paper and at risk of loss!",
        stack: "Reactjs, Context api, typescript, Reactstrap/Bootstrap"
    },
    {
        images: [{src: carSales, alt:"A car sales website"}, {src: addFeature, alt: "Add features page for sfr"}],
        name: "Car Sales",
        timeSpent: "2 days",
        numContributors: 1,
        role:"Create a front end app with react, styled with bootstrap, state management with Redux",
        description: "This project is a mini car sales webpage. A user can select a car from the landing page, and then add whatever features are available for that given card. Redux allows for proper function of the car sales page, with features moving to added/available and the total price increasing/decreasing based on those features.",
        stack: "Reactjs, Redux, Reactstrap/Bootstrap"
    },
    {
        images: [{src: sleepTracker, alt:"A sleep tracking website"}],
        name: "Sleep Tracker",
        timeSpent: "9 days",
        numContributors: 3,
        role:"Implementing Routes and forms in a react app.",
        description: "Sleep Tracker is a Lambda School build week project that allows a user to monitor their sleep patterns by adding sleep data entries. A user can add data for a given night, and even start an entry that can be ended in the morning when they wake up and a new entry will be created.",
        stack: "Reactjs, Styled Components, Contextapi"
    }
]


/*
{projects.map((project: IProject) => {
                return (
                    <ProjectCard
                        images={project.images}
                        description={project.description}
                        numContributors={project.numContributors}
                        projectName={project.name}
                        role={project.role}
                        timeSpent={project.timeSpent}
                    />
                );
            })}
 */