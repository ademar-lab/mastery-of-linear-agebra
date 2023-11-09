import { useState } from "react";
import { createContext } from "react";

const ClassesContext = createContext();

const classes = [
    {
        title: 'Vectors, what even are they?',
        math: 'When \\(a \\ne 0\\), there exists two solutions for\\(ax^2 + bx + c = 0\\) as \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]',
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

    return (
        <ClassesContext.Provider value={{
            classes,
            activeClass,
            setActiveClass,
        }}>
            {children}
        </ClassesContext.Provider>
    )
};

export { ClassesContext, ClassesProvider };