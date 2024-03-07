import { Typography } from '@mui/material'
import React, { useState } from 'react'

const Loader = () => {
    const [loading, setLoading]= useState(true)
  return (
   <>
   <div style={{textAlign:"center"}}>
   <img src='loader.gif' alt='' />
   <Typography variant='h4'>Please Wait While Loading Your Data</Typography>
   </div>
  
   </>
  )
}

export default Loader