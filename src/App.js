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
import ProtectedPage from './Shared/ProtectedPage';
import DeliveryProductStatus from './Pages/Dashboard/DeliveryProductStatus';
import ScrollToTop from './Pages/ScrollToTop/ScrollToTop';
import NotFound from './Pages/NotFound/NotFound';
import Blog from './Pages/Blog/Blog';
import MyPortfolio from './Pages/MyPorfolio/MyPortfolio';



function App() {
  return (
    <div className="App">
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/addreview' element={<ProtectedPage>
          <AddReview></AddReview>
        </ProtectedPage>}></Route>
        <Route path="/addedit" element={<ProtectedPage>
          <AddEdit></AddEdit>
        </ProtectedPage>}></Route>
        <Route path='/orderproducts/:id' element={<ProtectedPage>
          <OrderProducts></OrderProducts>
        </ProtectedPage>}></Route>
        <Route path='/dashboard' element={<ProtectedPage>
          <Dashboard></Dashboard>
        </ProtectedPage>}>
          <Route path='/dashboard/addproduct' element={<Requireauth>
            <AddProducts></AddProducts>
          </Requireauth>}></Route>
          <Route path='/dashboard/users' element={<Requireauth>
            <Users></Users>
          </Requireauth>}></Route>
          <Route path='/dashboard/myorders' element={<Myorders></Myorders>}></Route>
          <Route path='/dashboard/addedit' element={<AddEdit></AddEdit>}></Route>
          <Route path='/dashboard/deliverystatus' element={<DeliveryProductStatus></DeliveryProductStatus>}></Route>
          <Route path='/dashboard/totalorder' element={<Requireauth>
            <TotalOrders></TotalOrders>
          </Requireauth>}></Route>
          <Route path='/dashboard/products' element={<Requireauth>
            <ManageProducts></ManageProducts>
          </Requireauth>}></Route>
        </Route>
        <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
        <Route path='myorders' element={<Myorders></Myorders>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
