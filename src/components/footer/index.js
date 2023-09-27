import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="newsletter-form">
          <div className="container">
            <div className="row">
              <div className="form-title col-6">
                <h5>SUBSCRIBE TO OUR NEWSLETTER NOW!!!</h5>
                <h6>For daily news and updates about Li-Ning Nepal.</h6>
              </div>
              <div className="form-input col-6 ssss">
                <form>
                  <input
                    type="email"
                    name="Email Address"
                    id="email"
                    placeholder="Enter your email address"
                  />
                  <button className="subcribe-btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-3 abt-lining">
                <ul className="list-unstyled">
                  <li>
                    <h6>ABOUT LINING</h6>
                  </li>
                  <li>
                    <p>
                      "Lining" is a Chinese sportswear and sports equipment
                      company that was established in 1990.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa-solid fa-location-dot" />
                      <span>Jawalakhel, Lalitpur, Nepal</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa-solid fa-phone" />
                      <span>+977-9860937777 </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="list-unstyled">
                  <li>
                    <h6>OUR STORES</h6>
                  </li>
                  <li>
                    <a href="#">
                      <p>Main Branch</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Boudha Branch</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Durbar Marg Branch</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="list-unstyled">
                  <li>
                    <h6>LINING PRODUCTS</h6>
                  </li>
                  <li>
                    <a href="#">
                      <p>Products</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>New In Shop</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Hot Sale</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="list-unstyled">
                  <li>
                    <h6>CUSTOMER SERVICE</h6>
                  </li>
                  <li>
                    <a href="#">
                      <p>About Us</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Returns</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Delivery Information</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <div className="container">
            <div className="row">
              <div className="col-1 location d-flex">
                <i className="fa-brands fa-facebook" />
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-instagram" />
              </div>
              <div className="col-4 copyright">
                <p>© 2023, Li-Ning Inc. All Rights Reserved.</p>
              </div>
              <div className="col-6 lower-footer-menu">
                <ul className="list-unstyled d-flex">
                  <li>
                    <a href="#">
                      <p>Guide</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Terms of Sales</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Terms of Use</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Li-Ning Privacy Policy</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
