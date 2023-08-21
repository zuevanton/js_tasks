const binarySearch = (arr, start, end) => {
  if(end - start < 1) {
    if(arr[start] === start) {
      return start
    }
    return -1
  }

  const mid = Math.floor((start + end) / 2);
  if(arr[mid] >= mid) {
    return binarySearch(arr, start, mid)
  } else {
    return binarySearch(arr, mid + 1, end)
  }
}

function indexEqualsValue(a) {
  return binarySearch(a, 0, a.length - 1)
}

console.log(indexEqualsValue( [-5, 1, 2, 3, 6, 6, 6, 10, 15] ))// 1

