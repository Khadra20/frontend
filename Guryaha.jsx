import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Stack,Button,Box,TextField } from '@mui/material';
import axios from 'axios'
function Home() {
    const url="http://localhost:2000/Guryo"
    const [homelist,sethomesit]=useState([]);
    console.log(homelist)
    const { register,handleSubmit,reset}=useForm()
  const homesaves=async(e)=>{
  console.log(e)
  try {
    const {data}=await axios.post(url,e)
    Swal.fire({
      icon: 'success',
      title:"Done",
      text: 'Your data has been inserted',
      showConfirmButton: false,
      timer: 1500,
      
    })
  } catch (error) {
    console.log(error)
  }
 

  }

    useEffect(()=>{
        const gethomesit=async()=>{
           const data=await axios.get(url)
           console.log(data.data)
           sethomesit(data.data)
        }
        gethomesit()
           },[])
    return ( 

        <>
    <Box component={'form'} mt={2} onSubmit={handleSubmit(homesaves)} boxShadow={2}
    sx={{ width:'50%' ,marginTop:10,padding: 5,paddingTop:3,marginLeft:40}} > 
        <Stack direction={'column'} spacing={2}>
        <TextField {...register("noocaguriga")} label={'nooca guriga'} variant="outlined" size="small"  />
        <TextField  {...register("area")}  label={'area uu ku yaalo'} variant="outlined" size="small"  />
        <TextField {...register("address")} label={'address guriga'} variant="outlined" size="small"  />
        <TextField  {...register("age")}  label={'age'} variant="outlined" size="small"  />
        <TextField {...register("rent")} label={'rent '} variant="outlined" size="small"  />
        <TextField  {...register("deposite")}  label={'deposite'} variant="outlined" size="small"  />
        <TextField {...register("parkin")} label={'parkin'} variant="outlined" size="small"  />
        <TextField {...register("imagepreview")} label={"imagepreview"} variant="outlined" size="small"/>
        <TextField  {...register("isavalible")}  label={'isavalible'} variant="outlined" size="small"  />
        <TextField {...register("rooms")} label={"rooms"} variant="outlined" size="small"/>
        <TextField {...register("suuliyada")} label={"suuliyada"} variant="outlined" size="small"/>
        <TextField {...register("masterroom")} label={"masterroom"} variant="outlined" size="small"/>
        <TextField {...register("faafaahin")} label={"faafaahin"} variant="outlined" size="small"/>
        <TextField {...register("rooms")} label={"rooms"} variant="outlined" size="small"/>
        <Button type="submit" variant="contained">save</Button>
        </Stack>
     </Box>
     <table className="table table-striped table-hover">
    <thead>
        <tr>
    <th>guriganoocisa</th>
    <th>area</th>
    <th>address</th>
    <th>age</th>
    <th>rent</th>
    <th>deposite</th>
    <th>parkin</th>
    <th>imagepreview</th>
    <th>isavalible</th>
    <th>rooms</th>
    <th>suuliyada</th>
    <th>masterroom</th>
    <th>faafaahin</th>
        </tr>
    </thead>
    <tbody>
    {
      homelist?.map((Guryo,index)=>(
            <tr key={index}>
                <td>{Guryo.noocaguriga}</td>
                <td>{Guryo.area}</td>
                <td>{Guryo.address}</td>
                <td>{Guryo.age}</td>
                <td>{Guryo.rent}</td>
                <td>{Guryo.deposite}</td>
                <td>{Guryo.parkin}</td>
                <td>{Guryo.imagepreview}</td>
                <td>{Guryo.isavalible}</td>
                <td>{Guryo.rooms}</td>
                <td>{Guryo.suuliyada}</td>
                <td>{Guryo.masterroom}</td>
                <td>{Guryo.faafaahin}</td>
            </tr>
        ))  
    }
  </tbody>
 </table>
      </> 
     );
}

export default Home;