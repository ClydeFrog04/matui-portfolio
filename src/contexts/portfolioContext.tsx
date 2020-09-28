import React from "react";
import { Context, createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {IProject} from "../interfaces/projectInterfaces";
import {projectsCompleted} from "../data/projectsCompleted";

interface IPortfolioContext {
    projects: IProject[];
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
    changingPages: boolean;
    setChangingPages: React.Dispatch<React.SetStateAction<boolean>>;
    history: any;//how to type history properly
    animationDuration: number;
}

export const PortfolioContext: Context<Partial<IPortfolioContext>> = createContext({});

export const PortfolioProvider: React.FC = ({ children }) => {
    const [projects, setProjects] = useState<IProject[]>(projectsCompleted);
    const [changingPages, setChangingPages] = useState(false);
    const history = useHistory();
    const animationDuration = 0.5;


    return (
        <PortfolioContext.Provider
            value={{
                projects,
                setProjects,
                changingPages,
                setChangingPages,
                history,
                animationDuration
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
};