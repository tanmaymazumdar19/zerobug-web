import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import OutlinedCancel from "@mui/icons-material/CancelOutlined";
import CheckOutlined from "@mui/icons-material/CheckOutlined";
import { useNavigate } from "react-router-dom";
import { useFetchCompaniesListQuery } from "../../redux/api/api";

interface Column {
  id: "name" | "email" | "domain" | "is_approved" | "year";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "domain", label: "Industry", minWidth: 170 },
  { id: "is_approved", label: "Status", minWidth: 170 },
  // { id: "year", label: "Established In", minWidth: 170 },
];

const AdminPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const { data } = useFetchCompaniesListQuery({});

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onOpenCompanyDetails = (id: number) => {
    navigate(`/admin/${id}`);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#f7f7f8", borderRadius: "12px" }}>
              {columns.map((column: any, idx: number) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    position: "inherit",
                    bgcolor: "transparent",
                    borderBottom: "none",
                    color: "#6c6c84",
                    fontFamily: "sans-serif",
                    ...(idx === 0
                      ? {
                          borderTopLeftRadius: "12px",
                          borderBottomLeftRadius: "12px",
                        }
                      : idx === columns.length - 1
                      ? {
                          borderTopRightRadius: "12px",
                          borderBottomRightRadius: "12px",
                        }
                      : {}),
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.unapprovedCompanies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => onOpenCompanyDetails(row?._id)}
                  sx={{ cursor: "pointer" }}
                >
                  {columns.map((column: any) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{ borderBottom: "none" }}
                    >
                      {column.id === "status" ? (
                        row[column.id] ? (
                          <OutlinedCancel color="error" />
                        ) : (
                          <CheckOutlined color="success" />
                        )
                      ) : Array.isArray(row[column.id]) ? (
                        row[column.id]?.join(", ")
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data?.data?.unapprovedCompanies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default AdminPage;
