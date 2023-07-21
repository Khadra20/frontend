import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Divider,TextField,Button,Alert ,Box ,Stack,Card,CardContent,CardActionArea,} from '@mui/material';
function Contect() {
    const { register,handleSubmit,formState:{errors},reset,setValue}=useForm()
const [contectlist,setcontectlist]=useState([]);
const [refreshtime, setrefreshtime] = useState(new Date());
const url="http://localhost:2000/contect"
const contectsave=async(khadra)=>{
 console.log(khadra)
 try {
    const datacontect=await axios.post(url,khadra)
 Swal.fire({
    icon: 'success',
    title:"Done",
    text: 'Your data has been updated',
    showConfirmButton: false,
    timer: 1500,
    
  })
  reset();
 } catch (error) {
    console.log(error)
 }
 
}
useEffect(()=>{
const getcontect=async()=>{
    const {data}=await axios.get(url)
    console.log(data)
    setcontectlist(data)
}
getcontect();
},[])
const delcontect = async (id) => {
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
    return ( 
        <>
        

   <div className="container">
   <Box component={'form'}  onSubmit={handleSubmit(contectsave)} boxShadow={'small'} sx={{ width:'50%' ,marginTop:10,padding: 5,paddingTop:3,marginLeft:40}}>
   <Alert severity="info"> contect Page</Alert>
 <Stack direction={'column'} spacing={2}>
<TextField label={'entername'}  size="small" {...register("name")}></TextField>
<TextField label={"enter phone"}  size="small" {...register("phone")}></TextField>
<TextField label={"enter your message"}  size="small" multiline rows={5} {...register("message")}></TextField>
<Button type="submit" variant="contained">save</Button>
 </Stack>
   </Box>
   
   <table className="table table-striped table-hover">
   <thead>
       <tr>
   <th>name</th>
   <th>phone</th>
   <th>message</th>
       </tr>
   </thead>
   <tbody>
   {
       contectlist?.map((contect,index)=>(
           <tr key={index}>
               <td>{contect.name}</td>
               <td>{contect.phone}</td>
               <td>{contect.message}</td>
  <td>
  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => delcontect(contect._id)}
                  >
                    Delete
                  </button>
                  </td>
  
           </tr>
       ))
   }
 </tbody>
</table>
</div>
</>
     );
     
}

export default Contect;