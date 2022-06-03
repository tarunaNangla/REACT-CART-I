// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Socialmedia from './Components/Socialmedia';
import FAQ from './Components/FAQ';
import Job from './Components/Job';
import Footer from './Components/Footer';
// import Coupon from './Components/Coupon';
import Products from './Components/Products';


// import About from './About'
// import Cart from './Cart'
// import Home from './Home'
// import Login from './Login'
function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
              <Route path={"/"} element={<Home/>}></Route>
              <Route path={"/about"} element={<About />}></Route>
              <Route path={"/cart"} element={<Cart />}></Route>
              <Route path={"/login"} element={<Login />}></Route>
              <Route path={"/product"} element={<Products/>}></Route>
             
          </Routes>
       <Routes>
           <Route path={"/social"} element={<Socialmedia />}></Route>
              <Route path={"/faq"} element={<FAQ/>}></Route>
              <Route path={"/job"} element={<Job/>}></Route>
       </Routes>
       
       <Footer />
    </div>
  );
}

export default App;


// //  <div>
// <Link to="/social">Social Media</Link>
// </div>
// <div>
// <Link to="/faq">F.A.Q</Link>
// </div>
// <div>
// <Link to="/social">Job Oppertunities</Link>
// </div>