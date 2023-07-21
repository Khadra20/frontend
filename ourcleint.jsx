import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl,Divider,TextField,Button,Alert ,Box ,Stack,Card,CardContent,CardActionArea} from '@mui/material';
import {
    TableContainer,TableHead,TableRow,TableBody,Paper,TableCell,Table,
}from '@mui/material'
    
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
function Cleint() {
    const [cleintlist,setcleintlist]=useState([])
    const [refreshtime, setrefreshtime] = useState(new Date());
    const { register,handleSubmit,formState:{errors},reset,setValue}=useForm()
    const url="http://localhost:2000/ourcleint"
    const cleintsave=async(hayat)=>{
        console.log(hayat)
        try {
            const datacleint=await axios.post(url,hayat)
            console.log(datacleint)
            Swal.fire({
                icon: 'success',
                title:"Done",
                text: 'Your data has been updated',
                showConfirmButton: false,
                timer: 1500,
                
              })
              reset()
        } catch (error) {
            console.log(error)
        }
       
    }
    useEffect(()=>{
     const getcleint=async()=>{
        const {data}=await axios.get(url)
        console.log(data)
        setcleintlist(data)
     }
     getcleint();
    },[])
    const delcleint = async (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const { data } = await axios.delete(`${url}/${id}`);
            console.log(data);
            setrefreshtime(new Date())
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      };
    return ( <>
   <Card sx={{ width:'50%' ,marginTop:10,padding: 5,paddingTop:3,marginLeft:40}}>
<CardContent>
<Alert severity="info"> Cleint Page</Alert>
<Divider/>
        
     <Box component={'form'} mt={2} onSubmit={handleSubmit(cleintsave)} boxShadow={2} > 
        
        <Stack direction={'column'} spacing={2}>


        <TextField {...register("cleintname")} label={'cleintname'} variant="outlined" size="small"  />
        <TextField  {...register("clientlogo")}  label={'clientlogo'} variant="outlined" size="small"  />
        <Button type="submit" variant="contained">save</Button>
        </Stack>
     </Box>
</CardContent>
   </Card>
   <table className="table table-striped table-hover">
    <thead>
        <tr>
    <th>cleintname</th>
    <th>clientlogo</th>
        </tr>
    </thead>
    <tbody>
    {
        cleintlist?.map((cleint,index)=>(
            <tr key={index}>
                <td>{cleint.cleintname}</td>
                <td>{cleint.clientlogo}</td>
                <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => delcleint(cleint._id)}>
                    Delete
                  </button>
                </td>

            </tr>
        ))
    }
  </tbody>
 </table>
     </>
    );
}

export default Cleint;