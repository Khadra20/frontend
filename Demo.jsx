
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/material/Menu';
// import { red } from '@mui/material/colors';
// function  Demo() {
//     return (  
//         <AppBar position="static" >
//   <Toolbar variant="dense">
//     {/* <IconButton edge="start" color="red" aria-label="menu" sx={{ mr: 2 }}> */}
//       {/* <MenuIcon />
//     </IconButton> */}
//     <Typography variant="h6" color="inherit" component="div">
//       Photos
//     </Typography>
//     <Typography variant="h6" color="inherit" component="div">
//       hayaat
//     </Typography>
//   </Toolbar>
// </AppBar>
//     );
// }

// export default Demo;




import * as React from 'react';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

export default function Demo() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'red',
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
          m:'6rem',
          mt:'6rem'

        },
      }}
    />
  );
}