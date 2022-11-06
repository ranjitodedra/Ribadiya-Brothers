import React, { Fragment, useEffect, useRef, useState } from "react";
// import profileImage from "../../Images/Profile.png";
// import Loader from "../../layout/Loader/Loader"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../../actions/userAction";
// import { Alert } from "@material-ui/lab";
import { useAlert } from "react-alert";
import "./Login.css";

const SignIn = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited");
    dispatch(login(loginEmail, loginPassword));
  };
  useEffect(() => {
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/");
    }
  }, [dispatch, error, alert, history, isAuthenticated]);
  return (
    <div className="win">
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={loginSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <Link to="/password/forgot" className="Forgot-Pass">
            Forget Password ?
          </Link>
          <input type="submit" value="Login" />
          <Link to="SignUp" className="Create-Acc">
            Dont have account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
