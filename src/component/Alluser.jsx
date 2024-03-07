import React, { useEffect, useState } from 'react'
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material"
import { DeleteByemail, fecthUser } from '../service/api'
import { Link, useNavigate } from 'react-router-dom'
import Loader from './Loader'
const Alluser = () => {
    const[user, setUser]=useState([])
    const navigate= useNavigate()
    const[loading, setLoading]=useState(true)
    //get all users data
    const Getusers = async () => {
     
      try {
        setLoading(true)
        const res = await fecthUser();
        console.log("the response is ", res.data.data);
        setUser(res.data.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    
    //delete function
    const HandleDelete = async (email) => {
      console.log("delete button clicked");
      try {
        const response = await DeleteByemail(email);
        console.log("deleted data", response.data);
        console.log("deleted data", response);
        Getusers();
        // navigate("/signup")
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    };
    
    useEffect(()=>{
Getusers()
    },[])
  return (
    <>
   
    <TableContainer component={Paper}>
    
    <Table sx={{ width: "90%", margin:"auto" }} aria-label="simple table">
      <TableHead sx={{backgroundColor:"black", opacity:.70}}>
        <TableRow>
          <TableCell align="center" sx={{ color: "white", fontSize:"20px"}}>Email</TableCell>
          <TableCell align="center" sx={{ color: "white" , fontSize:"20px"}}>Address</TableCell>
          <TableCell align="center" sx={{ color: "white" , fontSize:"20px"}}>Delete/Edit</TableCell>
        </TableRow>
      </TableHead>
      {loading && <Loader />}
      <TableBody>
        {user.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" sx={{fontSize:"16px"}}>{row.email}</TableCell>
            <TableCell align="center"sx={{fontSize:"16px"}}>{row.address}</TableCell>
            <TableCell >
              <Button variant='contained' component={Link}to={`/edit/${row.email}`}style={{marginRight:"10px", textTransform:"none"}}>Edit</Button>
              <Button variant='contained'color='warning' onClick={()=>HandleDelete(row.email)}>Delete</Button>
            </TableCell>

            {/* <TableCell align="center">{row.protein}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}

export default Alluser