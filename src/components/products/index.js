import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Filter from "../../components/filter";
import LazyLoad from "react-lazy-load";
import Loading from "../../utils/loading";
import { TabTitle } from "../../utils/dynamicTitle";
import img1 from "../../assets/images/products/wade-10-lavender-main.jpg";
const ProductsData = () => {
  TabTitle("Li-Ning | Products");
  const { slug } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getSampleApiData();
  }, [slug]);
  async function getSampleApiData() {
    try {
      const response = await axios(
        `https://admin.lining.com.np/api/Items/category_item/${
          slug ? slug : ""
        }`
      );
      setData(response.data);
    } catch (error) {
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
                  {!Data.items
                    ? "No Data Found."
                    : Data.items.map((i) => {
                        return (
                          <div className="col" key={i.id}>
                            <div
                              className="card"
                              onClick={() =>
                                navigate(`/products/details/${i.id}`)
                              }
                            >
                              <LazyLoad>
                                <div className="itemss-img">
                                  <img
                                    src={i.DocPath ? i.DocPath : img1}
                                    className="card-img-top"
                                  />
                                </div>
                              </LazyLoad>

                              <div className="card-body">
                                <h6 className="card-title">{i.item_name}</h6>
                                <p className="card-text">{i.category_user}</p>
                                <p className="card-price">{i.color}</p>
                                <h6>MRP: Rs {i.price}</h6>
                              </div>
                            </div>
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
export default ProductsData;
