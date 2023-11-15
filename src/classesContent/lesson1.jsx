const lesson1 = {
    title: 'Vectors, what even are they?',
    preview: 'Vectors can be interpreted geometrically like arrows pointing somewhere to a coordinate plane. We write vectors vertically and with square brackets around them like this: \\begin{bmatrix}a \\\\c \\end{bmatrix}',
    exercises: [
        {
            title: 'Vector Addition',
            description: 'To add two vectors you just have to add the entries. For example, to add the vectors: \\[\\begin{bmatrix}1 \\\\0 \\end{bmatrix} \\begin{bmatrix}0 \\\\1 \\end{bmatrix}\\]we would do something like this: \\[\\begin{bmatrix}1 & + & 0 \\\\0 & + & 1 \\end{bmatrix} = \\begin{bmatrix}1 \\\\1 \\end{bmatrix}\\]Note that we cannot add vectors with different number of entries, for example: \\(\\begin{bmatrix}1 \\\\1 \\end{bmatrix}\\) and \\(\\begin{bmatrix}1 \\\\1 \\\\1 \\end{bmatrix}\\).',
            instructions: 'Calculate the sum of the following vectors:',
            renderExercise: (isRenderAnswer, firstClassValues) => {
                const values = firstClassValues[0];
                if (isRenderAnswer.includes(1)) {
                    const answer = `\\[ \\begin{bmatrix} ${values[0]} \\\\ ${values[1]} \\end{bmatrix} + \\begin{bmatrix}${values[2]} \\\\${values[3]} \\end{bmatrix} = \\begin{bmatrix} ${values[0]} + ${values[2]} \\\\ ${values[1]} + ${values[3]} \\end{bmatrix} = \\begin{bmatrix} ${values[0] + values[2]} \\\\ ${values[1] + values[3]} \\end{bmatrix} \\]`;

                    return <p>{answer}</p>
                } else {
                    const vectors = `\\[\\begin{bmatrix} ${values[0]} \\\\ ${values[1]} \\end{bmatrix} + \\begin{bmatrix}${values[2]} \\\\${values[3]} \\end{bmatrix}\\]`;
                    
                    return <p>{vectors}</p>
                }
            },
        },
        {
            title: 'Vector Multiplication by Scalars',
            description: 'In linear algebra, real numbers are called scalars. If you multiply a vector by a scalar, you are streching out that vector, so that its length is n times larger than the original length. \\[n \\cdot \\begin{bmatrix}1 \\\\1 \\end{bmatrix}\\]You can also shorten their lengths by multiplying them by a fraction. \\[ \\frac{1}{2}\\cdot\\begin{bmatrix}1 \\\\1 \\end{bmatrix} = \\begin{bmatrix}\\frac{1}{2} \\\\ \\frac{1}{2} \\end{bmatrix}\\]',
            instructions: 'Multiply the following vector by the scalar :',
            renderExercise: (isRenderAnswer, firstClassValues) => {
                const values = firstClassValues[1];

                if (isRenderAnswer.includes(2)) {
                    const answer = `\\[\\begin{bmatrix} ${values[0]} \\\\ ${values[1]} \\end{bmatrix} \\cdot ${values[2]} = \\begin{bmatrix} ${values[0]} \\cdot ${values[2]} \\\\ ${values[1]} \\cdot ${values[2]} \\end{bmatrix} = \\begin{bmatrix} ${values[0]*values[2]} \\\\ ${values[1]*values[2]} \\end{bmatrix} \\]`;

                    return <p>{answer}</p>
                } else {
                    const vectors = `\\[\\begin{bmatrix} ${values[0]} \\\\ ${values[1]} \\end{bmatrix} \\cdot ${values[2]} \\]`;
                    
                    return <p>{vectors}</p>
                }
            },
        },
    ],
}

export { lesson1 }