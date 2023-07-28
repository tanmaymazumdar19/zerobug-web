import { useState } from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import {
  Box,
  IconButton,
  Tooltip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { setShowModal } from "../../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import CustomModal from "../../../components/Reuseable/CustomModal";

interface Column {
  id: "name" | "email" | "techStack" | "availability" | "budget" | "experience";
  label: string;
  minWidth?: number;
  align?: "right" | "left";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "techStack", label: "Tech Stack", minWidth: 100 },
  { id: "budget", label: "Budget", minWidth: 100 },
  { id: "experience", label: "Experience", minWidth: 100 },
  {
    id: "availability",
    label: "Availability",
    minWidth: 170,
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface Data {
  name: string;
  email: string;
  techStack: string;
  budget: number;
  experience: number;
  availability: "yes" | "no";
}

function createData(
  name: string,
  email: string,
  techStack: string,
  budget: number,
  experience: number,
  availability: "yes" | "no"
): Data {
  return { name, email, techStack, budget, experience, availability };
}

const rows = [
  createData(
    "Shakeeb",
    "shakeeb.arsalan@quokkalabs.com",
    "React.JS",
    100,
    5,
    "yes"
  ),
  createData(
    "Tanmay",
    "tanmay.mazumdar@quokkalabs.com",
    "React.JS",
    100,
    5,
    "yes"
  ),
  createData(
    "Shubham",
    "shubham.chaudhary@quokkalabs.com",
    "React.JS",
    100,
    5,
    "yes"
  ),
  createData("Vinayak", "vinayak.@quokkalabs.com", "React.JS", 100, 5, "yes"),
  createData(
    "Anshul",
    "anhsul.dimri@quokkalabs.com",
    "React.JS",
    100,
    5,
    "yes"
  ),
  createData(
    "Risalat",
    "rishalat.shamoa@quokkalabs.com",
    "React.JS",
    100,
    5,
    "yes"
  ),
];

export default function StickyHeadTable() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showMoreOptions, setShowMoreOptions] = useState<number | null>(null);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = () => dispatch(setShowModal(true));

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: number) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.email}
                      onMouseEnter={() => setShowMoreOptions(index)}
                      onMouseLeave={() => setShowMoreOptions(null)}
                      onClick={handleRowClick}
                      sx={{ cursor: "pointer" }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align="center"
                            sx={{ padding: 1 }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell
                        align="left"
                        sx={{
                          padding: 1,
                        }}
                      >
                        <Box
                          sx={{
                            visibility:
                              showMoreOptions === index ? "visible" : "hidden",
                          }}
                        >
                          <Tooltip title="Request to hire">
                            <IconButton>
                              <GroupAddIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <CustomModal>
        hello
        <br />
        <br />
        <br />
        world
      </CustomModal>
    </>
  );
}
