import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography } from '@mui/material';
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.studentId}
          </TableCell>
          <TableCell align="right">{row.studentName}</TableCell>
          <TableCell align="right">{row.studentSurname}</TableCell>
          <TableCell align="right">{row.age}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Detay:
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Ortalama Puan</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell align="right">Telefon Numarası</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    
                      <TableRow key={row.studentId}>
                        <TableCell component="th" scope="row">
                          {row.studentInFormations.gradeAverage}
                        </TableCell>
                        <TableCell>{row.studentInFormations.studentEmail}</TableCell>
                        <TableCell align="right">{row.studentInFormations.studentPhone}</TableCell>
                        
                      </TableRow>
         
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
export default Row;