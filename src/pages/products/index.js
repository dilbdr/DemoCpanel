import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import Filter from "../../components/filter";
import LazyLoad from "react-lazy-load";
import Loading from "../../utils/loading";
import img1 from "../../assets/images/products/wade-10-lavender-main.jpg";
const ProductList = () => {
  const { slug } = useParams();
  const [productListData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getSampleApiData();
  }, []);
  async function getSampleApiData() {
    try {
      const response = await axios(
        `https://admin.lining.com.np/api/Items/category_item/${
          slug ? slug : ""
        }`
      );
      setData(response.data.items);
      // console.error("No Error fetching data: fds");
    } catch (error) {
      // console.error("Error fetching data: ", error);
      setError(error);
    }
    setLoading(false);
  }
  if (loading) return <Loading />;
  if (error) return "Error!";
  return (
    <>
      <section className="product-sec">
        <div className="container">
          <div className="row">
            <Filter />
            <div className="col-12 col-sm-9 col-lg-10 items new-arrivals">
              <div className="new-items row">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                  {!productListData
                    ? "No Data Found."
                    : productListData.map((items) => {
                        return (
                          <div className="col" key={items.id}>
                            <a href={`/products/details/${items.id}`}>
                              <div className="card">
                                <LazyLoad>
                                  <div className="itemss-img">
                                    <img
                                      src={items.DocPath ? items.DocPath : img1}
                                      className="card-img-top"
                                    />
                                  </div>
                                </LazyLoad>

                                <div className="card-body">
                                  <h6 className="card-title">
                                    {items.item_name}
                                  </h6>
                                  <p className="card-text">
                                    {items.category_user}
                                  </p>
                                  <p className="card-price">{items.color}</p>
                                  <h6>MRP: Rs {items.price}</h6>
                                </div>
                              </div>
                            </a>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductList;
