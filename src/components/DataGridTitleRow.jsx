import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function TitleRow({
  columns,
  onPriceClick,
  priceSortState,
  onDateClick,
  dateSortState,
}) {
  const Cols = () => {
    const _cols = [];
    for (let i = 0; i < columns.length; i++) {
      const _col = columns.filter((col) => col.position === i);
      const col = _col[0];

      if (!col.hidden) {
        if (col.key === "time") {
          _cols.push(
            <div
              key={i}
              style={{
                fontSize: "18px",
                paddingBottom: "5px",
                fontWeight: 500,
                width: col.size,
                cursor: "pointer",
                userSelect: "none",
                display: "flex",
                marginLeft: "12px",
              }}
              onClick={() => {
                onDateClick();
                console.log(dateSortState);
              }}
            >
              {col.label}
              {dateSortState === "none" ? (
                <ArrowDropUpIcon style={{ opacity: 0 }} />
              ) : dateSortState === "ascending" ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </div>
          );
        } else if (col.key === "price") {
          _cols.push(
            <div
              key={i}
              style={{
                fontSize: "18px",
                paddingBottom: "5px",
                fontWeight: 500,
                width: col.size,
                cursor: "pointer",
                userSelect: "none",
                borderRight: "solid 1px #d6d6d6",
                display: "flex",
                marginLeft: "12px",
              }}
              onClick={() => {
                onPriceClick();
                console.log(priceSortState);
              }}
            >
              {col.label}
              {priceSortState === "none" ? (
                <ArrowDropUpIcon style={{ opacity: 0 }} />
              ) : priceSortState === "ascending" ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </div>
          );
        } else {
          _cols.push(
            <div
              key={i}
              style={{
                fontSize: "18px",
                paddingBottom: "5px",
                fontWeight: 500,
                width: col.size,
                userSelect: "none",
                marginLeft: "12px",
                borderRight: "solid 1px #d6d6d6",
              }}
            >
              {col.label}
            </div>
          );
        }
      }
    }

    return _cols;
  };
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "solid 1px #d8d8d8",
        width: "100%",
      }}
    >
      <Cols />
    </div>
  );
}

export default TitleRow;
