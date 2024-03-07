import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { signup } from '../service/api';
import { useNavigate } from 'react-router-dom';
const FormGroupStyle = styled(FormGroup)`
  width: 50%;
  margin: 1rem auto 0 auto;
  background-color: wheat;
  padding: 20px;
  border-radius: 5px;
  & > div {
    margin-top: 10px;
  }
`;
const intialValue={
    password:"",
    email:"",
    address:""

}
const SignUp = () => {
    const[user, setUser]= useState(intialValue)
    const navigate= useNavigate()
    //handle chnage function
    const handleChange= async(e)=>{
        const name=e.target.name
        const value=e.target.value
        setUser({
          ...user, [name]:value
        })
        console.log("the add user is", user)
    }
    //handle submit function
    const handleSubmit= async()=>{
        const AddUser= await signup(user)
        console.log('add user is', AddUser)
        if(signup.success){
// console.log('the datamsg is', data.message)
        }
        setUser({
            password:"",
            email:"",
            address:""
        })
navigate("/")
    }
  return (
   <>
   <FormGroupStyle>
        <Typography textAlign={"center"} variant="h5">
          Add User Here
        </Typography>
        <FormControl size="small">
          <InputLabel>Email</InputLabel>
          <Input onChange={handleChange} name="email"/>
        </FormControl>
        <FormControl size="small">
          <InputLabel>Address</InputLabel>
          <Input onChange={handleChange}  name="address"/>
        </FormControl>
        <FormControl size="small">
          <InputLabel>Password</InputLabel>
          <Input onChange={handleChange} name="password"/>
        </FormControl>
        {/* <FormControl> */}
        <Button onClick={handleSubmit}
          variant="contained"
          style={{
            width: "fit-content",
            margin: "10px auto 0 auto",
            textTransform: "none",
          }}
        >
          Add User
        </Button>
        {/* </FormControl> */}
      </FormGroupStyle>

   </>
  )
}

export default SignUp