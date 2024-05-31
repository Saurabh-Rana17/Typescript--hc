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
    var li = 0;
    var ri = 0;
    while (li < left.length && ri < right.length) {
        if (left[li] < right[ri]) {
            res.push(left[li]);
            li++;
        }
        else {
            res.push(right[ri]);
            ri++;
        }
    }
    if (li < left.length) {
        res = res.concat(left.slice(li));
    }
    else {
        res = res.concat(right.slice(ri));
    }
    return res;
}
