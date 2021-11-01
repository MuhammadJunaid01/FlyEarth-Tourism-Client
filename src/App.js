import TopHeader from "./pages/topHead/TopHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import DestinaTion from "./pages/destination/DestinaTion";
import Blogs from "./pages/blogs/Blogs";
import Tours from "./pages/tours/Tours";
import PrivateRoute from "./privateRoute/PrivateRoute";
import UseAuthProvider from "./hooks/useContext/UseAuthProvider";
import Booking from "./pages/booking/Booking";
import AddToCart from "./pages/cart/AddToCart";
import DashBoard from "./pages/dashboard/DashBoard";
import AddHotel from "./pages/manageService/Addhotel/AddHotel";
import ManageOrder from "./pages/mangeOrder/ManageOrder";
import Footer from "./pages/footer/Footer";
import PageNotFound from "./pages/notfound/PageNotFound";

function App() {
  return (
    <div>
      <UseAuthProvider>
        <Router>
          <TopHeader></TopHeader>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/destination">
              <DestinaTion></DestinaTion>
            </Route>
            <PrivateRoute path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>
            <Route path="/tours">
              <Tours></Tours>
            </Route>
            <Route exact path="/myorder">
              <AddToCart></AddToCart>
            </Route>
            <Route exact path="/addhotel">
              <AddHotel></AddHotel>
            </Route>
            <PrivateRoute exact path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute exact path="/mangeorder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </UseAuthProvider>
    </div>
  );
}

export default App;
