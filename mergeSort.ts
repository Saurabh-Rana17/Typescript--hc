const arr: number[] = [1, 3, 2, 5, 6, 7, 84, 3, 5, 3, 547, 3, 434, 43, 2];

console.log(mergeSort(arr));

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const res: number[] = [];
  let leftidx = 0;
  let rightidx = 0;
  while (leftidx < left.length && rightidx < right.length) {
    if (left[leftidx] < right[rightidx]) {
      res.push(left[leftidx]);
      leftidx++;
    } else {
      res.push(right[rightidx]);
      rightidx++;
    }
  }

  return res.concat(left.slice(leftidx)).concat(right.slice(rightidx));
}
