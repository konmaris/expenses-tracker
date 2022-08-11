import { DataGridSortStates } from "./DataGridSortStatesEnum";
import * as SortFunctions from "./DataGridSortFunctions";

export function Date(
  setPriceSortState,
  dateSortState,
  rows,
  setRows,
  setDateSortState
) {
  setPriceSortState(DataGridSortStates.NONE);
  if (dateSortState === DataGridSortStates.NONE) {
    SortFunctions.sort(rows, setRows, DataGridSortStates.ASC, "time");
    setDateSortState(DataGridSortStates.ASC);
  } else if (dateSortState === DataGridSortStates.ASC) {
    SortFunctions.sort(rows, setRows, DataGridSortStates.DSC, "time");
    setDateSortState(DataGridSortStates.DSC);
  } else if (dateSortState === DataGridSortStates.DSC) {
    SortFunctions.sort(rows, setRows, DataGridSortStates.NONE, "time");
    setDateSortState(DataGridSortStates.NONE);
  }
}

export function Price(
  setDateSortState,
  priceSortState,
  rows,
  setRows,
  setPriceSortState
) {
  setDateSortState(DataGridSortStates.NONE);
  if (priceSortState === DataGridSortStates.NONE) {
    SortFunctions.sort(rows, setRows, DataGridSortStates.ASC, "price");
    setPriceSortState(DataGridSortStates.ASC);
  } else if (priceSortState === DataGridSortStates.ASC) {
    SortFunctions.sort(rows, setRows, DataGridSortStates.DSC, "price");
    setPriceSortState(DataGridSortStates.DSC);
  } else if (priceSortState === DataGridSortStates.DSC) {
    SortFunctions.sort(rows, setRows, DataGridSortStates.NONE, "price");
    setPriceSortState(DataGridSortStates.NONE);
  }
}
