import logo from './logo.svg';
import './App.css';
import Header from "./Shared/Header"
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Signup/Signup"
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Header/Home';
import Footer from "./Pages/Footer/Footer"
import AddProducts from './Pages/AddProducts/AddProducts';
import AddReview from "./Pages/AddReview/AddReview"
import { ToastContainer } from 'react-toastify';
import OrderProducts from './Pages/OrderProducts/OrderProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Pages/Dashboard/Users';
import Myorders from './Pages/MyOrders/Myorders';
import Payment from './Pages/Payment/Payment';
import Requireauth from './Shared/RequirAuth/Requireauth'
import AddEdit from './Pages/AddEdit/AddEdit';
import TotalOrders from './Pages/Dashboard/TotalOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/addreview' element={<AddReview></AddReview>}></Route>
        <Route path="/addedit" element={<AddEdit></AddEdit>}></Route>
        <Route path='/orderproducts/:id' element={<Requireauth>
          <OrderProducts></OrderProducts>
        </Requireauth>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='/dashboard/addproduct' element={<Requireauth>
            <AddProducts></AddProducts>
          </Requireauth>}></Route>
          <Route path='/dashboard/users' element={<Requireauth>
            <Users></Users>
          </Requireauth>}></Route>
          <Route path='/dashboard/myorders' element={<Myorders></Myorders>}></Route>
          <Route path='/dashboard/totalorder' element={<TotalOrders></TotalOrders>}></Route>
          <Route path='/dashboard/products' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
        <Route path='myorders' element={<Myorders></Myorders>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
