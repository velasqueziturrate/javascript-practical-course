//Helpers or Utils
function isEven(number) {
    return (number % 2 === 0)
}

function calculateMean(list) {
    const sumList = list.reduce(
        function (valueAccumulated = 0, newElement) {
            return valueAccumulated + newElement;
        }
    );

    const meanList = sumList / list.length;

    return meanList;
}

//Calculate of General Median
function medianSalary(list) {
    const half = parseInt(list.length / 2);

    if (isEven(list.length)) {
        const halfPerson1 = list[half - 1];
        const halfPerson2 = list[half];
        const median = calculateMean([
            halfPerson1,
            halfPerson2
        ]);
        return median;
    } else {
        const halfPerson = list[half];
        return halfPerson;
    }
}

//General Median
const salaryCol = colombia.map(
    function (person) {
        return person.salary;
    }
);

const salaryColSorted = salaryCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianGeneralCol = medianSalary(salaryColSorted);

//Top 10% Median
const spliceStart = (salaryColSorted.length * 90)/100;
const spliceCount = salaryColSorted.length - spliceStart;
const salaryColTop10 = salaryColSorted.splice(
    spliceStart,
    spliceCount
);

const medianTop10Col = medianSalary(salaryColTop10);




console.log({
    medianGeneralCol,
    medianTop10Col
});