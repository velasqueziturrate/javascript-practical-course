//Mean
function calculateMean(list) {
    const sumList = list.reduce(
        function (valueAccumulated = 0, newElement) {
            return valueAccumulated + newElement;
        }
    );

    const meanList = sumList / list.length;

    return meanList;
}
//Even or Odd
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
//Median
function calculateMedian(list) {
    list.sort(function (a, b) {
        return a - b;
    });
    console.log(list);
    const halfList = parseInt(list.length / 2);
    let median;

    if (isEven(list.length)) {
        const element1 = list[halfList - 1];
        const element2 = list[halfList];

        const meanElements = calculateMean([
            element1,
            element2
        ]);
        median = meanElements;
    } else {
        median = list[halfList];
    }
    return median;
}




