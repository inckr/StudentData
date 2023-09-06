import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Row from './CollapsibleTable';
function App (){
    const[students, setStudents] = useState([]);
    const[search, setSearch] = useState("");
    
    const getStudentsData = async () =>{
      try {
        const ahmet = await axios.get("https://localhost:7221/api/Student")
        setStudents(ahmet.data);
        console.log("aaa");
      } catch (error) {
        console.log(error)
      }
    } 
    useEffect(() => {
      getStudentsData();
    }, []) 
 return(
  <div>
      <input className='center' type="text" placeholder='Arama Yapın...' onChange={(e)=> {
        setSearch(e.target.value)
      }}/> <hr />
   <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Öğrenci Id</TableCell>
            <TableCell align="right">Öğrenci Adı</TableCell>
            <TableCell align="right">Öğrenci Soyadı</TableCell>
            <TableCell align="right">Yaş</TableCell>
          </TableRow>
        </TableHead> 
        <TableBody>
           {/* /-- {students.map((x) => (
            <Row key={x.studentId} row={x} />
          ))} --/  */}
          {students.filter((item)=>{
            if(search === ""){
              return item;
            }
            else if(item.studentName?.toLowerCase().includes(search?.toLowerCase()))
            {
              return item;
            }
          }).map((x)=> (
            <Row key={x.studentId} row={x} />
          ))}
        </TableBody> 
      </Table>
    </TableContainer>
      </div>
 )
}
export default App;