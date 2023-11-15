import { useState } from "react";
import { createContext } from "react";
import { getValues } from "../utils";
import { lessonsList } from "../classesContent";

const ClassesContext = createContext();

const classes = lessonsList;

const ClassesProvider = ({children}) => {
    const [ activeClass, setActiveClass ] = useState(0);
    const [ isRenderAnswer, setIsRenderAnswer ] = useState([]);
    const [ firstClassValues, setFirstClassValues ] = useState([getValues(5, 10), getValues(5, 10)]);

    return (
        <ClassesContext.Provider value={{
            classes,
            activeClass,
            setActiveClass,
            isRenderAnswer,
            setIsRenderAnswer,
            firstClassValues,
            setFirstClassValues
        }}>
            {children}
        </ClassesContext.Provider>
    )
};

export { ClassesContext, ClassesProvider };