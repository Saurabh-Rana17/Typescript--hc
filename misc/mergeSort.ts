const arr: number[] = [1, 3, 2, 5, 6, 7, 84, 3, 5, 3, 547, 3, 434, 43, 2];

console.log(mergeSort(arr));

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid: number = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  let res: number[] = [];
  let li: number = 0;
  let ri: number = 0;
  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      res.push(left[li]);
      li++;
    } else {
      res.push(right[ri]);
      ri++;
    }
  }

  if (li < left.length) {
    res = res.concat(left.slice(li));
  } else {
    res = res.concat(right.slice(ri));
  }

  return res;
}
