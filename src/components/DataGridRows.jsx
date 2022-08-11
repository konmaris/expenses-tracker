function DataGridRows({ rows, columns }) {
  const _rows = [];
  rows.forEach((row, idx) => {
    const _rowKeys = Object.keys(row);

    let _colKeys = [];
    columns.forEach((col) => {
      _colKeys.push(col.key);
    });

    if (JSON.stringify(_colKeys) === JSON.stringify(_rowKeys)) {
      const _cols = [];
      for (let i = 0; i < columns.length; i++) {
        const _col = columns.filter((col) => col.position === i);
        const col = _col[0];

        if (!col.hidden)
          if (_rowKeys.includes(col.key)) {
            if (col.key === "price") {
              _cols.push(
                <div
                  key={i}
                  style={{
                    width: col.size,
                    fontSize: "16px",
                    height: "100%",
                    borderRight: "solid 1px #d6d6d6",
                    marginLeft: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {row[col.key].toFixed(2)} €
                </div>
              );
            } else if (col.key === "time") {
              const timeUnix = row[col.key];
              const time = new Date(timeUnix);
              const timeFormatted = time.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              });

              console.log(timeFormatted);

              _cols.push(
                <div
                  key={i}
                  style={{
                    width: col.size,
                    fontSize: "16px",
                    height: "100%",

                    marginLeft: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {timeFormatted}
                </div>
              );
            } else {
              _cols.push(
                <div
                  key={i}
                  style={{
                    width: col.size,
                    fontSize: "16px",
                    height: "100%",
                    borderRight: "solid 1px #d6d6d6",
                    marginLeft: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {row[col.key]}
                </div>
              );
            }
          }
      }
      if (_rows.length !== rows.length - 1) {
        _rows.push(
          <div
            key={idx}
            style={{
              display: "flex",
              height: "35px",
              borderBottom: "solid 1px #d4d4d4",
            }}
          >
            {_cols}
          </div>
        );
      } else {
        _rows.push(
          <div
            key={idx}
            style={{
              display: "flex",
              height: "35px",
            }}
          >
            {_cols}
          </div>
        );
      }
    }
    return <div key={idx}></div>;
  });
  return _rows;
}

export default DataGridRows;
