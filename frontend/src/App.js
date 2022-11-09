import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Navbar/UserOptions_no";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import NotFound from "./component/layout/Not Found/NotFound";
import Navbar from "./component/layout/Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./component/User/Login/Login"
import SignUp from "./component/User/SignUp/SignUp"

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      {/* <Header /> */}
      <Navbar/>
      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
      <Switch>
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <ProtectedRoute exact path="/shipping" component={Shipping} />
        <ProtectedRoute exact path="/orders" component={MyOrders} />
        <Route exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
        <Route exact path="/process/payment" component={Payment} />
        <ProtectedRoute exact path="/process/success" component={OrderSuccess} />
        <Route exact path="/me/update" component={UpdateProfile} />
        <Route exact path="/password/update" component={UpdatePassword} />
        <Route exact path="/password/forgot" component={ForgotPassword} /> 
        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> 
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;