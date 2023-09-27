import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import img1 from "../../assets/images/products/wade-10-lavender-main.jpg";
import { TabTitle } from "../../utils/dynamicTitle";
import LazyLoad from "react-lazy-load";
import Loading from "../../utils/loading";
const ProductsDetails = () => {
  TabTitle("Li-Ning | Products Details");
  const { slug } = useParams();
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getApiData();
  }, [slug]);
  async function getApiData() {
    try {
      const response = await axios(
        `https://admin.lining.com.np/api/Items/item_detail/${slug ? slug : ""}
        }`
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }
  if (loading) return <Loading />;
  if (error) return "Error!";

  return (
    <>
      <section className="product-details container">
        <div className="all-details row">
          <div className="product-img col-12 col-sm-6 col-md-7">
            <ul className="list-unstyled row">
              {Data.img.length == 0
                ? ""
                : Data.img.map((i) => {
                    return (
                      <li className="col-6 col-sm-12 col-md-6" key={i.id}>
                        <LazyLoad>
                          <img src={i.DocPath ? i.DocPath : img1} alt="look1" />
                        </LazyLoad>
                      </li>
                    );
                  })}
            </ul>
          </div>
          <div className="product-descrp col-12 col-sm-6 col-md-5">
            <h4 className="product-title">{Data.detail.item_name}</h4>
            <p className="product-categories">{Data.detail.category_user}</p>
            <p className="product-price">
              MRP : <span>{Data.detail.price}</span>
            </p>
            <p className="product-price">
              Color : <span>{Data.detail.color}</span>
            </p>
            <p className="product-price">
              Size : <span>{Data.detail.size}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductsDetails;
