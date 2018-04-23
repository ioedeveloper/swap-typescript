var a = ["cdab", "dcba", "plate"];
var b = ["abcd", "abcd", "ptale"];
var isTwin;
var output = [];
var swap = function (first, second) {
    for (var i = 0; i < first.length; i++) {
        var operation = performOperations(first[i], second[i]);
        if (typeof operation == 'boolean') {
            if (operation)
                output.push('yes');
        }
        else {
            first[i] = operation;
            console.log(first[i]);
            if (performOperations(second[i], first[i]) == true) {
                output.push('yes');
            }
            else {
                output.push('no');
            }
        }
    }
    return output;
};
var performOperations = function (first, second) {
    if (first.length == second.length) {
        var firstArr = first.split('');
        var tempEven = '';
        var indexEven = 0;
        var tempOdd = '';
        var indexOdd = 0;
        isTwin = false;
        var swapValue = firstArr.join('');
        for (var k = 0; k < firstArr.length; k++) {
            if (k % 2 == 0) {
                if (k == 0) {
                    tempEven = firstArr[0];
                    indexEven = 0;
                }
                else {
                    if (firstArr[k] < tempEven) {
                        tempEven = firstArr[k];
                        firstArr[k] = firstArr[indexEven];
                        firstArr[indexEven] = tempEven;
                        indexEven = k;
                    }
                }
            }
            else {
                if (k == 1) {
                    tempOdd = firstArr[1];
                    indexOdd = 1;
                }
                else {
                    if (firstArr[k] < tempOdd) {
                        tempOdd = firstArr[k];
                        firstArr[k] = firstArr[indexOdd];
                        firstArr[indexOdd] = tempOdd;
                        indexOdd = k;
                    }
                }
            }
            swapValue = firstArr.join("");
            if (swapValue == second) {
                isTwin = true;
                break;
            }
        }
        if (isTwin == false) {
            return swapValue;
        }
    }
    return isTwin;
};
console.log(swap(a, b));
