const randomInteger = (max) => (
    Math.floor(Math.random() * max)
);

const getValues = (numberOfValues, max) => {
    const values = [];
    for (let index = 0; index < numberOfValues; index++) {
        values.push(randomInteger(max));
    }
    return values
};

export { randomInteger, getValues };