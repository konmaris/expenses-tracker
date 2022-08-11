import { DataGridSortStates } from "./DataGridSortStatesEnum";

export function ascQSortBasedOnObjProperty(array, property) {
  function partition(arr, start, end) {
    const pivotValue = arr[end][property];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i][property] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
  }

  function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }

    let index = partition(arr, start, end);

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  }

  return quickSort(array, 0, array.length - 1);
}

export function dscQSortBasedOnObjProperty(array, property) {
  function partition(arr, start, end) {
    const pivotValue = arr[end][property];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i][property] > pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
      }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
  }

  function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }

    let index = partition(arr, start, end);

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  }

  return quickSort(array, 0, array.length - 1);
}

export function noneQSortBasedOnObjProperty(array) {
  function partition(arr, start, end) {
    const pivotValue = arr[end]["id"];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i]["id"] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

        pivotIndex++;
      }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
  }

  function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }

    let index = partition(arr, start, end);

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  }

  return quickSort(array, 0, array.length - 1);
}

export function sort(rows, setRows, order, property) {
  const _rows_copy_stringified = JSON.stringify(rows);
  const _rows_copy = JSON.parse(_rows_copy_stringified);

  if (Array.isArray(_rows_copy)) {
    if (order === DataGridSortStates.ASC) {
      ascQSortBasedOnObjProperty(_rows_copy, property);
    } else if (order === DataGridSortStates.DSC) {
      dscQSortBasedOnObjProperty(_rows_copy, property);
    } else {
      noneQSortBasedOnObjProperty(_rows_copy);
    }
    setRows(_rows_copy);
  }
}
