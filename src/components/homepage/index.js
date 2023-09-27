import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import LazyLoad from "react-lazy-load";
import { useNavigate, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/images/homepage/hero-bg-1.jpg";
import img1 from "../../assets/images/main-logo.jpg";
import img8 from "../../assets/images/homepage/hero-sec-bg-2.webp";
import Loading from "../../utils/loading";
import { TabTitle } from "../../utils/dynamicTitle";
const HomePage = () => {
  TabTitle("Li-Ning | Home");
  const { slug } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getApiData();
  }, [slug]);
  async function getApiData() {
    try {
      const response = await axios(`https://admin.lining.com.np/api/home`);
      setData(response.data);
      console.log(response);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  let settings1 = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let settings2 = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (loading) return <Loading />;
  if (error) return "Error!";
  return (
    <>
      <LazyLoad>
        <Carousel>
          {Data.headbanners.map((i) => {
            return (
              <div key={i.id}>
                <img src={i.DocPath ? i.DocPath : image1} />
              </div>
            );
          })}
        </Carousel>
      </LazyLoad>
      <section className="desc-banner-1">
        <div className="container">
          <p>First Look</p>
          <h3>LI-NING AIR MAX PULSE</h3>
          <p>
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse ---designed to push you past your limits and help you go to
            the max.
          </p>
          <div className="btn-grp">
            <button className="btn-1">Notify Me</button>
            <button className="btn-1">Shop Air Max</button>
          </div>
        </div>
      </section>

      <section className="category">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {Data.categories.length == 0
              ? ""
              : Data.categories.map((i) => {
                  return (
                    <div className="col" key={i.id}>
                      <div
                        className="card h-100"
                        onClick={() => navigate(`/products/items/${i.id}`)}
                      >
                        <div className="catImagess">
                          <LazyLoad>
                            <img
                              src={i.DocPath ? i.DocPath : img1}
                              className="card-img-top"
                              alt="..."
                            />
                          </LazyLoad>
                        </div>
                        <div className="card-body catTitle">
                          <h5 className="card-title">{i.category_name}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>

      <section className="main-carousel">
        <div className="container">
          <h3>Best of Li-Ning</h3>
          <Slider {...settings1}>
            {Data.items.map((i) => {
              return (
                <div key={i.id}>
                  <div
                    className="card"
                    onClick={() => navigate(`/products/details/${i.id}`)}
                  >
                    <div className="itemss-img">
                      <LazyLoad>
                        <img
                          src={i.DocPath ? i.DocPath : img1}
                          className="card-img-top"
                          alt="..."
                        />
                      </LazyLoad>
                    </div>
                    <div className="card-body">
                      <h6>{i.item_name}</h6>
                      <div className="d-flex justify-content-between">
                        <p>{i.category_user}</p>
                        <h6>Rs. {i.price}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      <section className="hero-section-2">
        <div className="container BannerImage">
          {Data.bodybanners.length == 0
            ? ""
            : Data.bodybanners.map((i) => {
                return (
                  <div key={i.id}>
                    <LazyLoad>
                      <img src={i.DocPath ? i.DocPath : img8} />
                    </LazyLoad>
                  </div>
                );
              })}
        </div>
      </section>

      <section className="desc-banner-1">
        <div className="container">
          <h3>STEP INTO WHAT FEELS GOOD</h3>
          <p>
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <div className="btn-grp">
            <button className="btn-1">Find Your Shoe</button>
          </div>
        </div>
      </section>

      <section className="carousel-grp">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h4>Shop Men's</h4>
              <Slider {...settings2}>
                {Data.men_items.map((i) => {
                  return (
                    <div key={i.id}>
                      <div
                        className="card"
                        onClick={() => navigate(`/products/details/${i.id}`)}
                      >
                        <div className="itemss-img">
                          <LazyLoad>
                            <img
                              src={i.DocPath ? i.DocPath : img1}
                              className="card-img-top"
                              alt="..."
                            />
                          </LazyLoad>
                        </div>
                        <div className="card-body">
                          <h6>{i.item_name}</h6>
                          <div className="d-flex justify-content-between">
                            <p>{i.category_user}</p>
                            <h6>Rs {i.price}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="col-6">
              <h4>Shop Women's</h4>
              <Slider {...settings2}>
                {Data.women_items.map((i) => {
                  return (
                    <div key={i.id}>
                      <div
                        className="card"
                        onClick={() => navigate(`/products/details/${i.id}`)}
                      >
                        <div className="itemss-img">
                          <LazyLoad>
                            <img
                              src={i.DocPath ? i.DocPath : img1}
                              className="card-img-top"
                              alt="..."
                            />
                          </LazyLoad>
                        </div>
                        <div className="card-body">
                          <h6>{i.item_name}</h6>
                          <div className="d-flex justify-content-between">
                            <p>{i.category_user}</p>
                            <h6>Rs {i.price}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="desc-banner-1">
        <div className="container">
          <h3>FLIGHT ESSENTIALS </h3>
          <p>
            Your built-to-last, all-week-wears---but with style only Jordan
            Brand can deliver.
          </p>
          <div className="btn-grp">
            <button className="btn-1">Shop</button>
          </div>
        </div>
      </section>
      <section className="essentials">
        <div className="container">
          <h3>The Essentials</h3>
          <div className="row row-cols-3 g-4">
            {Data.main_categories.length == 0
              ? ""
              : Data.main_categories.map((i) => {
                  return (
                    <div key={i.id} className="col">
                      <div
                        className="card"
                        onClick={() => navigate(`/products/items/${i.id}`)}
                      >
                        <div className="catsss-img">
                          <LazyLoad>
                            <img src={i.DocPath ? i.DocPath : img1} />
                          </LazyLoad>
                        </div>
                        <div className="card-body">
                          <button className="btn-1">{i.category_name}</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
