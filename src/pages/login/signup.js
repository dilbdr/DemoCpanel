import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/navbar/li-ning-small-nav.png";
import { TabTitle } from "../../utils/dynamicTitle";
const LogSignUp = () => {
  TabTitle("Li-Ning | Register");
  const navigate = useNavigate();
  return (
    <>
      <div className="row sign-in">
        <div className="col-6 main-logo">
          <img
            onClick={() => {
              navigate("/");
            }}
            src={img1}
          />
        </div>
        <div className="col-6 sign-in-form">
          <div className="main-form form-signup">
            <div className="form-title">
              <p>BECOME A LI-NING MEMBER</p>
            </div>
            <form action="#" method="#" className="signup-form">
              <div className="row justify-content-evenly">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      name="First Name"
                      id="first-name"
                    />
                    <label htmlFor="first-name"> First Name</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="Last Name"
                      id="last-name"
                    />
                    <label htmlFor="last-name"> Last Name</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="number"
                      name="phome"
                      id="phone"
                    />
                    <label htmlFor="phone"> Mobile Number</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <label htmlFor="email"> Email Address</label>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      id="password"
                    />
                    <label htmlFor="password"> Password</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="conform_password"
                      id="conform_password"
                    />
                    <label htmlFor="conform_password">Conform Password</label>
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="date"
                      name="Date of Birth"
                      id="DOB"
                    />
                    <label htmlFor="DOB">Date of Birth</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3 form-control Gender">
                    <input type="radio" name="gander" />
                    <span>Male</span>
                    <input type="radio" name="gander" />
                    <span>Female</span>
                    <input type="radio" name="gander" />
                    <span>Other</span>
                    <label htmlFor="DOB">Gender</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <p className="privacy">
                      By creating an account, you agree to Li-Ning's{" "}
                      <a href="#">Privacy Policy</a> and{" "}
                      <a href="#">Terms of Use</a>.
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <button className="join-us-btn btn-1" type="submit">
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <p className="already-member">
                      Already a member?{" "}
                      <a href="#" onClick={() => navigate("/user/login")}>
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogSignUp;
