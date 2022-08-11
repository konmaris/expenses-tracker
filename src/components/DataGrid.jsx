import { useState } from "react";

import DataGridTitleRow from "./DataGridTitleRow";
import DataGridRows from "./DataGridRows";

import { DataGridSortStates } from "./DataGridSortStatesEnum";

import * as OnClickFunctions from "./DataGridOnClickFunctions";

function DataGrid({ style, data, cols }) {
  const [rows, setRows] = useState(data);
  const [columns] = useState(cols);

  const [priceSortState, setPriceSortState] = useState(DataGridSortStates.NONE);
  const [dateSortState, setDateSortState] = useState(DataGridSortStates.NONE);

  const DefaultStyle = {
    height: "100%",
    marginLeft: "30px",
    marginTop: "15px",
    border: "solid 2px #dadada",
    borderRadius: "10px",
    padding: "20px",
  };

  return (
    <div style={DefaultStyle}>
      <div style={style}>
        <DataGridTitleRow
          columns={columns}
          onPriceClick={() => {
            OnClickFunctions.Price(
              setDateSortState,
              priceSortState,
              rows,
              setRows,
              setPriceSortState
            );
          }}
          onDateClick={() => {
            OnClickFunctions.Date(
              setPriceSortState,
              dateSortState,
              rows,
              setRows,
              setDateSortState
            );
          }}
          priceSortState={priceSortState}
          dateSortState={dateSortState}
        />
        <DataGridRows rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default DataGrid;
