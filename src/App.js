import { useState } from "react";

import DataGrid from "./components/DataGrid";

import {
  DataGridDummyRows,
  DataGridDummyColumns,
} from "./components/DataGridDummyData";

function App() {
  const [rows, setRows] = useState(DataGridDummyRows);
  const [columns] = useState(DataGridDummyColumns);

  return (
    <div
      className="app-container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ width: "70%", height: "90%" }}>
        <div className="app-header">
          <h1 style={{ fontSize: "68px", paddingTop: "30px" }}>💸 Expenses</h1>
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "300",
              paddingLeft: "90px",
              paddingBottom: "30px",
            }}
          >
            by Konstantinos Maris
          </h3>
          <DataGrid cols={columns} data={rows} />
        </div>
      </div>
    </div>
  );
}

export default App;
