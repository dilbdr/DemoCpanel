import React from "react";
import img1 from "../../assets/images/wavinghand.png";
import { TabTitle } from "../../utils/dynamicTitle";

const ContactUS = () => {
  TabTitle("Li-Nig | Contact Us");
  return (
    <>
      <section className="contact-us">
        <div className="container">
          <div className="row main-contact">
            <div className="col col-md-4">
              <div className="socials">
                <h3>Our Socials</h3>
                <div className="social-icons">
                  <ul className="list-unstyled">
                    <li>
                      <p>
                        <i className="fa-brands fa-square-facebook" />
                        <span>facebook.com/liningnepal</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa-brands fa-instagram" />
                        <span>instagram.com/liningnepal</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa-brands fa-twitter" />
                        <span>twitter.com/liningnepal</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="branches">
                <h3>Our Branches</h3>
                <div className="branch-list">
                  <ul className="list-unstyled">
                    <li>
                      <h5>Jawalakhel Branch</h5>
                      <p>
                        <i className="fa-solid fa-location-dot" />
                        <span>M8C8+X22, Lalitpur, 44600</span>
                      </p>
                      <p>
                        <i className="fa-solid fa-phone" />
                        <span>+977-9860937777 </span>
                      </p>
                    </li>
                    <li>
                      <h5>Durbarmarg Branch</h5>
                      <p>
                        <i className="fa-solid fa-location-dot" />
                        <span>M8C8+X22, Lalitpur, 44600</span>
                      </p>
                      <p>
                        <i className="fa-solid fa-phone" />
                        <span>+977-9860937777 </span>
                      </p>
                    </li>
                    <li>
                      <h5>Boudha Branch</h5>
                      <p>
                        <i className="fa-solid fa-location-dot" />
                        <span>M8C8+X22, Lalitpur, 44600</span>
                      </p>
                      <p>
                        <i className="fa-solid fa-phone" />
                        <span>+977-9860937777 </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-md-8">
              <div className="form">
                <div className="title">
                  <div className="main d-flex">
                    <h3>Get In Touch With Us</h3>
                    <h4>Get In Touch With Us</h4>
                    <img src={img1} />
                  </div>
                  <p>
                    You can fill up the form and contact us. We will get back to
                    you immediately.
                  </p>
                </div>
                <div className="body">
                  <input
                    className="name"
                    type="text"
                    placeholder="First Name"
                  />
                  <input className="name" type="text" placeholder="Last Name" />
                  <br />
                  <input
                    className="email"
                    type="text"
                    placeholder="Email Address"
                  />{" "}
                  <br />
                  <textarea
                    name="message"
                    id="write-message"
                    rows={12}
                    placeholder="Write message here..."
                    defaultValue={""}
                  />
                  <br />
                  <button className="btn-1">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUS;
