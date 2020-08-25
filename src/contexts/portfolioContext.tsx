import React from "react";
import { Context, createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {IProject} from "../interfaces/projectInterfaces";
import {projectsCompleted} from "../data/projectsCompleted";

export const PortfolioContext: Context<any> = createContext({});

export const PortfolioProvider: React.FC = ({ children }) => {
    const [projects, setProjects] = useState<IProject[] | undefined>(projectsCompleted);
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