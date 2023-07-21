import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Appbar from './sharing/Navlinks';
import Aboutpage from './compounents/about';
import Contect from './compounents/Contect';
import Home from './compounents/Guryaha';
import Homesitting from './Home/Homesitting';
import Service from './Home/Service'
import Cleint from './Home/ourcleint'
 function App() {
  return (
  
      <>
<div>

<Appbar/>

  <Routes>
    <Route path='/Guryaha'element={<Home></Home>}/>
    <Route path='/about'element={<Aboutpage></Aboutpage>}/>
    <Route path='/contect'element={<Contect></Contect>}/>
    <Route path='/homesit'element={<Homesitting></Homesitting>}/>
    <Route path='/service'element={<Service></Service>}/>
    <Route path='/cleint'element={<Cleint></Cleint>}/>
  </Routes>
{/* <Userwithloder/> */}

</div>
    </>
  );
}
export default App;