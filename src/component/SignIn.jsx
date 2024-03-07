import styled from '@emotion/styled';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import { signIn } from '../service/api';
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
    email:"",
    password:"",

}
const SignIn = () => {
    const[data, setData]= useState(intialValue)
    const navigate= useNavigate()
    //handle chnage function
    const handleChange= async(e)=>{
        const name= e.target.name
        const value=e.target.value
        setData({
            ...data,[name]:value
        })
    }
    //submit function

    const handleSubmit = async () => {
        console.log("the data is", data)
        try {
          const login = await signIn(data);
          console.log("the login is", login)
          if (login.success) {
            navigate('/');
          } else {
            console.error('Login unsuccessful');
          }
        } catch (error) {
          console.log('Error during login:', error.message);
        }
      };
      
  return (
    <>
    <FormGroupStyle>
        <Typography textAlign={"center"} variant="h5">
          Enter Your Login Credential Here
        </Typography>
        <FormControl size="small">
          <InputLabel>Email</InputLabel>
          <Input onChange={handleChange} name="email"/>
        </FormControl>
        <FormControl size="small">
          <InputLabel>Password</InputLabel>
          <Input onChange={handleChange}  name="password"/>
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
          Login
        </Button>
        {/* </FormControl> */}
      </FormGroupStyle>

    </>
  )
}

export default SignIn