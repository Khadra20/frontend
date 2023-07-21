import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl,Divider,TextField,Button,Alert ,Box ,Stack,Card,CardContent,CardActionArea} from '@mui/material';
import {
    TableContainer,TableHead,TableRow,TableBody,Paper,TableCell,Table,
}from '@mui/material'
    
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
function Aboutpage() {
    const [abotlist,setaboutlist]=useState([])
    const { register,handleSubmit,formState:{errors},reset,setValue}=useForm()
    const [refreshtime, setrefreshtime] = useState(new Date());
    const url="http://localhost:2000/about"
    const aboutsave=async(hayat)=>{
        console.log(hayat)
        try {
            const aboutdata=await axios.post(url,hayat)
            console.log(aboutdata)
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
     const getabout=async()=>{
        const {data}=await axios.get(url)
        console.log(data)
        setaboutlist(data)
     }
     getabout();
    },[refreshtime])

    const delabout = async (id) => {
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
<Alert severity="info"> About Page</Alert>
<Divider/>
        
     <Box component={'form'} mt={2} onSubmit={handleSubmit(aboutsave)} boxShadow={2} > 
        
        <Stack direction={'column'} spacing={2}>


        <TextField {...register("faafahinyar")} label={'Faah fahin yar'} variant="outlined" size="small"  />
        <TextField  {...register("faafahin")} multiline rows={5} label={'Faah fahin'} variant="outlined" size="small"  />
        
        <Button type="submit" variant="contained">save</Button>

        </Stack>
     </Box>
</CardContent>
   </Card>
   <table className="table table-striped table-hover">
    <thead>
        <tr>
    <th>fafahinyar</th>
    <th>faafahin</th>
        </tr>
    </thead>
    <tbody>
    {
        abotlist?.map((about,index)=>(
            <tr key={index}>
                <td>{about.faafahinyar}</td>
                <td>{about.faafahin}</td>
                
                  <td>
                   <button
                    className="btn btn-danger btn-sm"
                    onClick={() => delabout(about._id)}  >
                    Delete</button>
                  
</td>
            </tr>
        ))
    }
  </tbody>
 </table>
     </>
    );
}

export default Aboutpage;