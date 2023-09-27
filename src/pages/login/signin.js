import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/navbar/li-ning-small-nav.png";
import { TabTitle } from "../../utils/dynamicTitle";
const LogSignIn = () => {
  TabTitle("Li-Ning | Login");
  const navigate = useNavigate();
  return (
    <>
      <div className="row sign-in">
        <div className="col-6 main-logo">
          {/* <a href="index.php"> */}
          <img
            onClick={() => {
              navigate("/");
            }}
            src={img1}
          />
          {/* </a> */}
        </div>
        <div className="col-6 sign-in-form">
          <div className="main-form">
            <div className="form-title">
              <p>Welcome to Li-Ning Nepal ! Please Login.</p>
            </div>
            <div className="mb-3">
              <input className="form-control" type="email" />
              <label htmlFor="email"> Email</label>
            </div>
            <div className="mb-3">
              <input className="form-control" type="password" />
              <label htmlFor="password"> Password</label>
            </div>
            <div className="mb-3 d-flex">
              <div className="remember-me">
                <input type="checkbox" />
                <label htmlFor="checkbox">Remeber Me</label>
              </div>
              <p>
                <a href="#">Reset Password?</a>
              </p>
            </div>
            <button className="btn btn-1">Sign In</button>
            <p className="already-member">
              Don't Have An Account?{" "}
              <a href="#" onClick={() => navigate("/register/user")}>
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogSignIn;
