import { useState } from "react";
import { createContext } from "react";

const ClassesContext = createContext();

const classes = [
    {
        title: 'Vectors, what even are they?',
        preview: 'Vectors can be interpreted geometrically like arrows pointing somewhere to a coordinate plane. We write vectors vertically and with square brackets around them like this: \\begin{bmatrix}a \\\\c \\end{bmatrix}',
        exercises: [
            {
                title: 'Vector Addition',
                description: 'To add two vectors you just have to add the entries. For example, to add the vectors: \\[\\begin{bmatrix}1 \\\\0 \\end{bmatrix} \\begin{bmatrix}0 \\\\1 \\end{bmatrix}\\]we would do something like this: \\[\\begin{bmatrix}1 & + & 0 \\\\0 & + & 1 \\end{bmatrix} = \\begin{bmatrix}1 \\\\1 \\end{bmatrix}\\]Note that we cannot add vectors with different number of entries, for example: \\(\\begin{bmatrix}1 \\\\1 \\end{bmatrix}\\) and \\(\\begin{bmatrix}1 \\\\1 \\\\1 \\end{bmatrix}\\).',
                instructions: 'Calculate the sum of the following vectors:',
                renderExercise: () => {
                    let firstvalue = 1;

                    const vectors = `\\[\\begin{bmatrix} ${firstvalue} \\\\ ${firstvalue} \\end{bmatrix} + \\begin{bmatrix}${firstvalue} \\\\${firstvalue} \\end{bmatrix}\\]`;

                    return(
                        <p>{vectors}</p>
                    )
                },
            },
            {
                title: 'Vector Multiplication by Scalars',
                description: 'In linear algebra, real numbers are called scalars. If you multiply a vector by a scalar, you are streching out that vector, so that its length n times larger than the original length. \\[n \\cdot \\begin{bmatrix}1 \\\\1 \\end{bmatrix}\\]You can also shorten their lengths by multiplying them by a fraction. \\[ \\frac{1}{2}\\cdot\\begin{bmatrix}1 \\\\1 \\end{bmatrix} = \\begin{bmatrix}\\frac{1}{2} \\\\ \\frac{1}{2} \\end{bmatrix}\\]',
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