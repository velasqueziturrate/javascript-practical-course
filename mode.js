
function calculateMode(list) {
    const listCount = {};

    list.map(
        function (element) {
            if (listCount[element]) {
                listCount[element] += 1;
            } else {
                listCount[element] = 1;
            }
        }
    );

    const listArray = Object.entries(listCount).sort(
        function (accumulatedValue, newValue) {
            return accumulatedValue[1] - newValue[1];
        }
    );

    const mode = listArray[listArray.length - 1];

    return mode;
}




