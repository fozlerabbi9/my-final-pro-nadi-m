import logo from './logo.svg';
import './App.css';
import Header from "./Shared/Header"
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Signup/Signup"
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Header/Home';
import Footer from "./Pages/Footer/Footer"
import AddProducts from './Pages/AddProducts/AddProducts';
import AddReview from "./Pages/AddReview/AddReview"
import { ToastContainer } from 'react-toastify';
import OrderProducts from './Pages/OrderProducts/OrderProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/addproducts' element={<AddProducts></AddProducts>}></Route>
       <Route path='/addreview' element={<AddReview></AddReview>}></Route>
       <Route path='/orderproducts/:id' element={<OrderProducts></OrderProducts>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}>
       <Route path='/dashboard/users' element={<Users></Users>}></Route>
       </Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
