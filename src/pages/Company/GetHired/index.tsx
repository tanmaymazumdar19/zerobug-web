import * as React from 'react'
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
} from '@mui/material'
import CompanyIcon from '../../../assets/Company.png'
import { useDispatch, useSelector } from 'react-redux'
import { setShowModal } from '../../../redux/slices/modalSlice'
import CustomModal from '../../../components/Reuseable/CustomModal'
import EmployeeDetails from './EmployeeDetails'
import { useCompanyDetailsQuery } from '../../../redux/api/api'
import { useParams } from 'react-router-dom'

interface Column {
  id: string
  label: string
}

const columns: readonly Column[] = [
  { id: 'empName', label: 'Emp Name' },
  { id: 'compName', label: 'Comp Name' },
  { id: 'role', label: 'Role' },
  { id: 'techStack', label: 'Tech Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'availability', label: 'Availability' },
  { id: 'gender', label: 'Gender' },
]

const companyDetails = [
  {
    companyName: 'Quokkalabs',
    companyEmail: 'quokkalabs.com',
    companyDesc: 'We as company provide digital solution to world by mobile app and web app',
    companyEstd: '2019',
    companyStrength: '70',
    techStack: 'Mobile Development, Web App Development, DevOps solution, Backend Solution',
  },
]

export default function GetHired() {
  const dispatch = useDispatch()
  const selector = useSelector((store: any) => store)
  const params = useParams()
  const { data } = useCompanyDetailsQuery(params?.companyId)

  const showModal = selector.modalSlice.showModal
  const employeesList = selector.getHiredSlice.employees
  console.log(employeesList)

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [userDetails, setUserDetails] = React.useState({})

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleDetails = (id: string) => {
    const valueObj = employeesList.find((item: any) => item.empName === id)
    setUserDetails(valueObj)
    dispatch(setShowModal(true))
  }

  return (
    <Box position={'relative'}>
      <Box display='flex' justifyContent={'center'}>
        <a href='https://www.flaticon.com/free-icons/institution' title='institution icons'>
          <img src={CompanyIcon} alt='CompanyIcon' width={100} height={100} />
        </a>
      </Box>
      <Box mb={3}>
        <CustomTypography>
          Company Name : <b>{data?.data?.name || companyDetails[0].companyName}</b>
        </CustomTypography>
        <CustomTypography>
          Company Email : <b>{data?.data?.email || companyDetails[0].companyEmail}</b>
        </CustomTypography>
        <CustomTypography>
          Company Description : <b>{companyDetails[0].companyDesc}</b>
        </CustomTypography>
        {/* <CustomTypography>
          Company Established : <b>{companyDetails[0].companyEstd}</b>
        </CustomTypography> */}
        <CustomTypography>
          Company Size : <b>{data?.data?.size || companyDetails[0].companyStrength}</b>
        </CustomTypography>
        <CustomTypography>
          Tech Stack : <b>{data?.data?.domain?.join(', ') || companyDetails[0].techStack}</b>
        </CustomTypography>
      </Box>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {employeesList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.empName}>
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell
                          key={column.id}
                          onClick={column.id === 'empName' ? () => handleDetails(row.empName) : () => null}
                          sx={{
                            textDecoration: column.id === 'empName' ? 'underline' : '',
                            cursor: column.id === 'empName' ? 'pointer' : 'default',
                          }}
                        >
                          {value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={employeesList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {showModal && (
        <CustomModal>
          <Box width={'100%'} p={5} maxHeight={'400'} overflow={'none auto'}>
            <EmployeeDetails userDetails={userDetails} />
          </Box>
        </CustomModal>
      )}
    </Box>
  )
}

const CustomTypography = ({ children }: { children: React.ReactNode }) => {
  return <Typography mb={1}>{children}</Typography>
}
