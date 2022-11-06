import React, { Fragment, useRef, useState, useEffect } from "react";
import Link, { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../../actions/userAction";
import { useAlert } from "react-alert";

import "./SignUp.css";
import Loader from "../../layout/Loader/Loader";
import axios from "axios";

const SignUp = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();

  const { error, loading } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sgnup = async () => {
    const res = await axios.post("api/v1/register", {
      name,
      email,
      password,
      confirmPassword,
    });
    console.log("hello")
    console.log(" name is ", name);
    console.log(" email is ", email);
    console.log(res);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // if (password === confirmPassword) {
    //   window.alert("Account successfully created");
    //   history.push("/login");
    // }
    
  }, [dispatch, error, alert, history]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="win">
            <div className="form">
              <h2>SignUp</h2>
              <form >
                <div className="signUpName">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="signUpEmail">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="signUpPassword">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="signUpPassword">
                  <input
                    type="password"
                    placeholder="Confirm-Password"
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Register"
                  className="signUpBtn"
                  onClick={sgnup()}
                  // disabled={loading ? true : false}
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SignUp;
