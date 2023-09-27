import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
import { Link, useNavigate, useParams } from "react-router-dom";
import SLogo from "../../assets/images/navbar/liningsmallnav.png";
import MLogo from "../../assets/images/navbar/mainlogo.jpg";

const Navbar = () => {
  const { slug } = useParams();
  const NavData = [
    // {
    //   id: "fresh-arrivals",
    //   name: "Fresh Arrivals",
    //   slug: "fresh-arrivals",
    // },
    {
      id: 9,
      name: "Men",
      slug: "men",
    },
    {
      id: 10,
      name: "Women",
      slug: "women",
    },
    {
      id: 3,
      name: "Kids",
      slug: "kids",
    },
    {
      id: 1,
      name: "Sports",
      slug: "sports",
    },
    // {
    //   id: 1,
    //   name: "Hot Sales",
    //   slug: "hot-sales",
    // },
  ];
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="small-navbar">
          <div className="small-nav container">
            <div className="row">
              <div className="small-logo col col-1">
                <img src={SLogo} alt="logo" />
              </div>
              <div className="small-nav-menu col col-11">
                <ul className="list-unstyled d-flex">
                  <li>
                    <a href="#" onClick={() => navigate("/contact")}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => navigate("/user/login")}>
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => navigate("/register/user")}>
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <div className="row">
                <a className="navbar-brand col-2">
                  <img
                    onClick={() => {
                      navigate("/");
                    }}
                    src={MLogo}
                    alt="logo"
                  />
                </a>
                <button
                  className="navbar-toggler col-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse col-10"
                  id="navbarSupportedContent"
                >
                  <div className="row">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-lg-8">
                      {NavData.map((i, index) => (
                        <li key={index} className="nav-item">
                          <h6>
                            <Link
                              className="nav-link"
                              to={`/products/items/${i.id}`}
                            >
                              {i.name}
                            </Link>
                          </h6>
                        </li>
                      ))}
                    </ul>
                    <form className="d-flex col-lg-3" role="search">
                      <div className="input-group">
                        <button
                          className="btn"
                          type="button"
                          id="button-search"
                        >
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                      </div>
                    </form>
                    <div className="main-nav-icon d-flex col-lg-1">
                      <a href="favourite-page.php">
                        <i className="fa-solid fa-heart" />
                      </a>
                      <a href="cart-page.php">
                        <i className="fa-solid fa-bag-shopping" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="free-shipping d-flex">
          <i className="fa-solid fa-truck-fast" />
          <p>Free shipping all over Nepal.</p>
        </div>
      </header>
    </>
  );
};
export default Navbar;
