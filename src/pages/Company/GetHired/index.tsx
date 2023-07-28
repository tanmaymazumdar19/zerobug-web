import * as React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import CompanyIcon from "../../../assets/Company.png";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../redux/slices/modalSlice";
import CustomModal from "../../../components/Reuseable/CustomModal";
import EmployeeDetails from "./EmployeeDetails";

interface Column {
  id:
    | "empName"
    | "compName"
    | "role"
    | "techStack"
    | "experience"
    | "availability";
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: readonly Column[] = [
  { id: "empName", label: "Emp Name", minWidth: 170 },
  { id: "compName", label: "Comp Name", minWidth: 170 },
  { id: "role", label: "Role", minWidth: 170 },
  { id: "techStack", label: "Tech Stack", minWidth: 170 },
  { id: "experience", label: "Experience", minWidth: 170 },
  { id: "availability", label: "Availability", minWidth: 170 },
];

interface Data {
  empName: string;
  compName: string;
  role: string;
  techStack: string;
  availability: string;
  experience: string;
}

function createData(
  empName: string,
  compName: string,
  role: string,
  techStack: string,
  experience: string,
  availability: string
): Data {
  return { empName, compName, role, techStack, experience, availability };
}

const companyDetails = [
  {
    companyName: "Quokkalabs",
    companyEmail: "quokkalabs.com",
    companyDesc:
      "We as company provide digital solution to world by mobile app and web app",
    companyEstd: "2019",
    companyStrength: "70",
    techStack:
      "Mobile Development, Web App Development, DevOps solution, Backend Solution",
  },
];

const rows = [
  createData(
    "Shakeeb",
    "Quokkalabs LLP",
    "FrontEnd Developer",
    "React",
    "3",
    "No"
  ),
  createData(
    "Tanmay",
    "Quokkalabs LLP",
    "FrontEnd Developer",
    "React",
    "3",
    "No"
  ),
  createData(
    "Vinayak",
    "Quokkalabs LLP",
    "FrontEnd Developer",
    "React",
    "3",
    "No"
  ),
  createData(
    "Shubham",
    "Quokkalabs LLP",
    "FrontEnd Developer",
    "React",
    "3",
    "No"
  ),
  createData(
    "Anshul",
    "Quokkalabs LLP",
    "BackEnd Developer",
    "Nodejs",
    "3",
    "No"
  ),
];

export default function GetHired() {
  const dispatch = useDispatch();
  const selector = useSelector((store: any) => store);

  const showModal = selector.modalSlice.showModal;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDetails = () => {
    dispatch(setShowModal(true));
  };

  return (
    <>
      <Box display="flex" justifyContent={"center"}>
        <a
          href="https://www.flaticon.com/free-icons/institution"
          title="institution icons"
        >
          <img src={CompanyIcon} alt="CompanyIcon" width={100} height={100} />
        </a>
      </Box>
      <Box mb={3}>
        <CustomTypography>
          Company Name : <b>{companyDetails[0].companyName}</b>
        </CustomTypography>
        <CustomTypography>
          Company Email : <b>{companyDetails[0].companyEmail}</b>
        </CustomTypography>
        <CustomTypography>
          Company Description : <b>{companyDetails[0].companyDesc}</b>
        </CustomTypography>
        <CustomTypography>
          Company Established : <b>{companyDetails[0].companyEstd}</b>
        </CustomTypography>
        <CustomTypography>
          Company Strength : <b>{companyDetails[0].companyStrength}</b>
        </CustomTypography>
        <CustomTypography>
          Tech Stack : <b>{companyDetails[0].techStack}</b>
        </CustomTypography>
      </Box>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.empName}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            onClick={
                              column.id === "empName" ? handleDetails : () => {}
                            }
                          >
                            {value}
                          </TableCell>
                        );
                      })}
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

      {showModal && (
        <CustomModal>
          <Box width={"100%"} p={5} maxHeight={"400"} overflow={"none auto"}>
            <EmployeeDetails />
          </Box>
        </CustomModal>
      )}
    </>
  );
}

const CustomTypography = ({ children }: { children: React.ReactNode }) => {
  return <Typography mb={1}>{children}</Typography>;
};
