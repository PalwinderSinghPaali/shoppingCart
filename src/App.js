
import ReactDOM from 'react-dom';
import Admin from './components/Admin_Home';
import Customer from './components/Customer_Home';
import Login from './components/Login';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Register from './components/Register';
import { Route, Link, Routes} from 'react-router-dom';
import {Form,Button,divbar,div,Container,Carousel, Navbar} from 'react-bootstrap';
import AboutUs from './components/AboutUs';
import Applied from './components/Applied';
import Applicants from './components/Applicants';

import Blogs from './components/Blogs';
import './App.css'

const App=() => (
  <>

<Navs />







<Routes>
<Route exact path="/" element={<Home/>} />
  
    <Route  path="/admin" element={<Admin/>} />
    <Route  path="/customer" element={<Customer/>} />
    <Route  path="/login" element={<Login/>} />
 <Route  path="/contact" element={<Contact/>} />
 <Route  path="/services" element={<Services/>} />
 <Route  path="/register" element={<Register/>} />
 <Route  path="/about" element={<AboutUs/>} />
 <Route path="/applied" element={<Applied/>}/>
 <Route path="/applicants" element={<Applicants/>}/>
 <Route path="/blogs" element={<Blogs/>}/>

 </Routes>
 {/* <Product></Product> */}



</>
);
function Navs()
{

  return(
<>
<div>
<Navbar style={{backgroundColor:"rgb(30,103,159)", color:"white"}}>
  <Container >
    {/* <div style={{marginLeft:"-10%"}}> */}
       {/* <img src='download.png' style={{height :"8vh",width:"10vw",marginRight:"2vw"}}></img> */}
  <div style={{display:"flex",gap:"2vw",marginLeft:"-7vw"}}>
  <div href="/"><h3 style={{color:"white"}}>JobPortal</h3></div>
  

  <div  style={{display:"flex",gap:"2vw",paddingTop:"1.5vh"}}>
  {/* <div href="/" ><b className='navmain'>Home</b></div> */}
  <div ><Link to = "/"><b className='navmain'>Home</b> </Link></div>   
    {/* <div href="/services" ><b className='navmain'>Services</b></div>
    <div href="/about"><b  className='navmain'>About Us</b> </div>
    <div href="/contact"><b className='navmain'>Contact Us</b></div> */}
    <div ><Link to = "/services"><b className='navmain'>Services</b> </Link></div>   
    <div ><Link to = "/about"><b className='navmain'>About Us</b> </Link></div>   
    <div ><Link to = "/contact"><b className='navmain'>Contact Us</b> </Link></div>   
    <div ><Link to = "/blogs"><b className='navmain'>Blogs</b> </Link></div>   
    
    
  </div>
  </div>

    {/* <div style={{width:"100px"}}></div> */}
    <div  style={{display:"flex",gap:"2vw",marginRight:"-7vw"}}>
      <div ><Link to = "/register"><b className='navmain'>Register</b> </Link></div>   
      <div ><Link to = "/login"><b className='navmain'>Login</b> </Link></div>   
      {/* <div eventKey={2} href="/login">
       <b className='navmain'>Login</b>  */}
      {/* </div> */}
      {/* <div href="/viewcart"><img src="cart.png" width="30" height="30" /></div> */}
    
    </div>
    </Container>
    </Navbar>
    </div>
  </>


  );
}




export default App;