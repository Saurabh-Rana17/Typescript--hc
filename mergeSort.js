var arr = [1, 3, 2, 5, 6, 7, 84, 3, 5, 3, 547, 3, 434, 43, 2];
console.log(mergeSort(arr));
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    var res = [];
    var leftidx = 0;
    var rightidx = 0;
    while (leftidx < left.length && rightidx < right.length) {
        if (left[leftidx] < right[rightidx]) {
            res.push(left[leftidx]);
            leftidx++;
        }
        else {
            res.push(right[rightidx]);
            rightidx++;
        }
    }
    return res.concat(left.slice(leftidx)).concat(right.slice(rightidx));
}
