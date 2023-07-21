import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Stack,Button,Box,TextField } from '@mui/material';
import axios from 'axios'
function Homesitting() {
    const url="http://localhost:2000/homesit"
    const [sitlist,setsitlist]=useState([]);
    const [refreshtime, setrefreshtime] = useState(new Date());
    const { register,handleSubmit,reset}=useForm()
  const sitsave=async(e)=>{
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
        const getsit=async()=>{
           const data=await axios.get(url)
           console.log(data.data)
           setsitlist(data.data)
        }
        getsit()
           },[])
           const delhomesit = async (id) => {
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
    <Box component={'form'} mt={2} onSubmit={handleSubmit(sitsave)} boxShadow={2}
    sx={{ width:'50%' ,marginTop:10,padding: 5,paddingTop:3,marginLeft:40}} > 
        <Stack direction={'column'} spacing={2}>
        <TextField {...register("name")} label={'name'} variant="outlined" size="small"  />
        <TextField {...register("title")} label={'title'} variant="outlined" size="small"  />
        <TextField  {...register("logo")}  label={'logo'} variant="outlined" size="small"  />
        <TextField {...register("description")} label={'description '} variant="outlined" size="small"  />
        <TextField  {...register("address")}  label={'address'} variant="outlined" size="small"  />
        <TextField {...register("email")} label={'email '} variant="outlined" size="small"  />
        <TextField  {...register("phone")}  label={'phone'} variant="outlined" size="small"  />
        <TextField {...register("whatapp")} label={'whatapp'} variant="outlined" size="small"  />
        <TextField {...register("facebook")} label={"facebook"} variant="outlined" size="small"/>
        <TextField  {...register("instagram")}  label={'instagram'} variant="outlined" size="small"  />
        <TextField {...register("tiktok")} label={"tiktok"} variant="outlined" size="small"/>
        <TextField {...register("Herotitle")} label={"Herotitle"} variant="outlined" size="small"/>
        <TextField {...register("HeroDiscritpion")} label={"HeroDiscritpion"} variant="outlined" size="small"/>
        <TextField {...register("heroimage")} label={"heroimage"} variant="outlined" size="small"/>
        <TextField {...register("Footertext")} label={"Footertext"} variant="outlined" size="small"/>
        <Button type="submit" variant="contained">save</Button>
        </Stack>
     </Box>
     <table className="table table-striped table-hover">
    <thead>
        <tr>
    <th>name</th>
    <th>title</th>
    <th>logo</th>
    <th>description</th>
    <th>address</th>
    <th>email</th>
    <th>phone</th>
    <th>whatsapp</th>
    <th>facebook</th>
    <th>instagram</th>
    <th>tiktok</th>
    <th>hirotitle</th>
    <th>hirodescription</th>
    <th>hiroimage</th>
    <th>footer</th>
        </tr>
    </thead>
    <tbody>
    {
      sitlist?.map((sit,index)=>(
            <tr key={index}>
                
                <td>{sit.name}</td>
                <td>{sit.title}</td>
                <td>{sit.logo}</td>
                <td>{sit.description}</td>
                <td>{sit.address}</td>
                <td>{sit.email}</td>
                <td>{sit.phone}</td>
                <td>{sit.whatapp}</td>
                <td>{sit.facebook}</td>
                <td>{sit.instagram}</td>
                <td>{sit.tiktok}</td>
                <td>{sit.Herotitle}</td>
                <td>{sit.HeroDiscritpion}</td>
                <td>{sit.heroimage}</td>
                <td>{sit.Footertext}</td>
                <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => delhomesit(sit._id)}
                  >
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

export default Homesitting;