import { Button, Dialog, MenuItem, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import PropTypes from "prop-types";
import * as React from "react";
import Draggable from "react-draggable";

function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(1, "1", 305, 3.7, 67, 4.3),
  createData(2, "2", 452, 25.0, 51, 4.9),
  createData(3, "3", 262, 16.0, 24, 6.0),
  createData(4, "4", 159, 6.0, 24, 4.0),
  createData(5, "5", 356, 16.0, 49, 3.9),
  createData(6, "6", 408, 3.2, 87, 6.5),
  createData(7, "7", 237, 9.0, 37, 4.3),
  createData(8, "8", 375, 0.0, 94, 0.0),
  createData(9, "9", 518, 26.0, 65, 7.0),
  createData(10, "10", 392, 0.2, 98, 0.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "S.No.",
    numeric: false,
    disablePadding: true,
    label: "S.No.",
  },
  {
    id: "u_id",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Bank",
  },
  {
    id: "recharge",
    numeric: true,
    disablePadding: false,
    label: "Holder Name",
  },
  {
    id: "recharge",
    numeric: true,
    disablePadding: false,
    label: "IFSC",
  },
  {
    id: "recharge",
    numeric: true,
    disablePadding: false,
    label: "Account No",
  },
];

function EnhancedTableHead(props) {
  const { onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            className="!border-[1px] !py-1"
          >
            <TableSortLabel
              onClick={createSortHandler(headCell.id)}
              className="!text-white"
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function DetailsTables() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy))?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer>
        <Table
          sx={{ minWidth: "" }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  sx={{ cursor: "pointer" }}
                  align={"center"}
                >
                  <TableCell
                    className="!border-[1px] border-white !py-1 !text-white"
                    align={"center"}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="!border-[1px] border-white !py-1 !text-white"
                  >
                    <Button
                      onClick={() => setOpen(true)}
                      variant="contained"
                      size="small"
                      className="!bg-[#DCB86A]"
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="!border-[1px] border-white !py-1 !text-white"
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="!border-[1px] border-white !py-1 !text-white"
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="!border-[1px] border-white !py-1 !text-white"
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="!border-[1px] border-white !py-1 !text-white"
                  >
                    {row.carbs}
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <div className="bg-black">
            <p
              style={{
                background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
              }}
              className="py-2 px-3 rounded-full "
            >
              Update Bank here!
            </p>
            <div className="grid grid-cols-3 w-full items-center bg-white bg-opacity-20 gap-2   p-5">
              
              <span className="col-span-1 !text-white !text-sm ">
                Bank Name *
              </span>
              <TextField
                select
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              >
                <MenuItem selected value="Bank Type">
                  Bank Type
                </MenuItem>
              </TextField>
              <span className="col-span-1 !text-white !text-sm">
                Account Holder Name*
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />
              <span className="col-span-1 !text-white !text-sm">
                IFSC Code *
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />
              <span className="col-span-1 !text-white !text-sm">
                Account No *
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />
              
              <div className="col-span-3 grid grid-cols-2 gap-2">
              <Button
                variant="contained"
                className={`!bg-[#47C45D] place-items-center  !text-white`}
              >
                Submit
              </Button>
              <Button
              onClick={()=>setOpen(false)}
                variant="contained"
                className={`!bg-[#FF7D89] place-items-center  !text-white`}
              >
                Close
              </Button>
              </div>
            </div>
          </div>
        </Dialog>
      }
    </Box>
  );
}
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
