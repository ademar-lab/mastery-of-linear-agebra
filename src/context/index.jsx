import { createContext } from "react";

const ClassesContext = createContext();

const classes = [
    'Vectors, what even are they?',
    'Linear combinations, span, and basis vectors',
    'Linear transformations and matrices',
    'Matrix multiplication as composition',
    'Three-dimensional linear transformations',
    'The determinant',
    'Inverse matrices, column space and null space',
    'Nonsquare matrices as transformations between dimensions',
    'Dot products and duality',
    'Cross products',
    'Cross products in the light of linear transformations',
    "Cramer's rule, explained geometrically",
    'Change of basis',
    'Eigenvectors and eigenvalues',
    'A quick trick for computing eigenvalues',
    'Abstract vector spaces'
];

const ClassesProvider = ({children}) => {
    return (
        <ClassesContext.Provider value={{
            classes
        }}>
            {children}
        </ClassesContext.Provider>
    )
};

export { ClassesContext, ClassesProvider };