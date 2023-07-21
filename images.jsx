import React from "react";
import Swal from "sweetalert2";
import { useState,useEffect } from "react";
import { Stack,Button,Box,TextField } from '@mui/material';
import { useForm } from "react-hook-form";
const { register,handleSubmit,reset}=useForm()
function Images() {
    const[imglist,setimglist]=useState([])
    const url="http://localhost:2000/image"
    return ( 
<Box>
<Stack>
<TextField {...register("faafahinyar")} label={'Faah fahin yar'} variant="outlined" size="small"  />
</Stack>
</Box>
     );
}

export default Images;