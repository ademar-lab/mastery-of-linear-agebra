import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { getValues, randomInteger } from "../utils";

const ClassesContext = createContext();

const a = randomInteger(10);
const b = randomInteger(10);
const c = randomInteger(10);
const d = randomInteger(10);
const e = randomInteger(10);

const classes = [
    {
        title: 'Vectors, what even are they?',
        preview: 'Vectors can be interpreted geometrically like arrows pointing somewhere to a coordinate plane. We write vectors vertically and with square brackets around them like this: \\begin{bmatrix}a \\\\c \\end{bmatrix}',
        exercises: [
            {
                title: 'Vector Addition',
                description: 'To add two vectors you just have to add the entries. For example, to add the vectors: \\[\\begin{bmatrix}1 \\\\0 \\end{bmatrix} \\begin{bmatrix}0 \\\\1 \\end{bmatrix}\\]we would do something like this: \\[\\begin{bmatrix}1 & + & 0 \\\\0 & + & 1 \\end{bmatrix} = \\begin{bmatrix}1 \\\\1 \\end{bmatrix}\\]Note that we cannot add vectors with different number of entries, for example: \\(\\begin{bmatrix}1 \\\\1 \\end{bmatrix}\\) and \\(\\begin{bmatrix}1 \\\\1 \\\\1 \\end{bmatrix}\\).',
                instructions: 'Calculate the sum of the following vectors:',
                renderExercise: (isRenderAnswer, firstClassValues) => {
                    if (isRenderAnswer.includes(1)) {
                        const answer = `\\[ \\begin{bmatrix} ${firstClassValues[0]} \\\\ ${firstClassValues[1]} \\end{bmatrix} + \\begin{bmatrix}${firstClassValues[2]} \\\\${firstClassValues[3]} \\end{bmatrix} = \\begin{bmatrix} ${firstClassValues[0]} + ${firstClassValues[2]} \\\\ ${firstClassValues[1]} + ${firstClassValues[3]} \\end{bmatrix} = \\begin{bmatrix} ${firstClassValues[0] + firstClassValues[2]} \\\\ ${firstClassValues[1] + firstClassValues[3]} \\end{bmatrix} \\]`;

                        return <p>{answer}</p>
                    } else {
                        const vectors = `\\[\\begin{bmatrix} ${firstClassValues[0]} \\\\ ${firstClassValues[1]} \\end{bmatrix} + \\begin{bmatrix}${firstClassValues[2]} \\\\${firstClassValues[3]} \\end{bmatrix}\\]`;
                        
                        return <p>{vectors}</p>
                    }
                },
            },
            {
                title: 'Vector Multiplication by Scalars',
                description: 'In linear algebra, real numbers are called scalars. If you multiply a vector by a scalar, you are streching out that vector, so that its length is n times larger than the original length. \\[n \\cdot \\begin{bmatrix}1 \\\\1 \\end{bmatrix}\\]You can also shorten their lengths by multiplying them by a fraction. \\[ \\frac{1}{2}\\cdot\\begin{bmatrix}1 \\\\1 \\end{bmatrix} = \\begin{bmatrix}\\frac{1}{2} \\\\ \\frac{1}{2} \\end{bmatrix}\\]',
                instructions: 'Multiply the following vector by the scalar :',
                renderExercise: (isRenderAnswer) => {
                    if (isRenderAnswer.includes(2)) {
                        const answer = `\\[\\begin{bmatrix} ${a} \\\\ ${b} \\end{bmatrix} \\cdot ${e} = \\begin{bmatrix} ${a} \\cdot ${e} \\\\ ${b} \\cdot ${e} \\end{bmatrix} = \\begin{bmatrix} ${a*e} \\\\ ${b*e} \\end{bmatrix} \\]`;

                        return <p>{answer}</p>
                    } else {
                        const vectors = `\\[\\begin{bmatrix} ${a} \\\\ ${b} \\end{bmatrix} \\cdot ${e} \\]`;
                        
                        return <p>{vectors}</p>
                    }
                },
            },
        ],
    },
    {
        title:  'Linear combinations, span, and basis vectors',
        math: '\\begin{bmatrix}a \\\\c \\end{bmatrix}',
    },
    {
        title: 'Linear transformations and matrices',
    },
    {
        title: 'Matrix multiplication as composition',
    },
    {
        title: 'Three-dimensional linear transformations',
    },
    {
        title: 'The determinant',
    },
    {
        title: 'Inverse matrices, column space and null space',
    },
    {
        title: 'Nonsquare matrices as transformations between dimensions',
    },
    {
        title: 'Dot products and duality',
    },
    {
        title: 'Cross products',
    },
    {
        title: 'Cross products in the light of linear transformations',
    },
    {
        title:  "Cramer's rule, explained geometrically",
    },
    {
        title: 'Change of basis',
    },
    {
        title: 'Eigenvectors and eigenvalues',
    },
    {
        title: 'A quick trick for computing eigenvalues',
    },
    {
        title: 'Abstract vector spaces',
    },
];

const ClassesProvider = ({children}) => {
    const [ activeClass, setActiveClass ] = useState(0);
    const [ isRenderAnswer, setIsRenderAnswer ] = useState([]);
    const [ firstClassValues, setFirstClassValues ] = useState(getValues(5, 10));

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