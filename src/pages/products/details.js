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
  const [ProductsDetailsData, setDetailData] = useState(null);
  const [ProductsDetailsImage, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getSampleApiData();
  }, []);
  async function getSampleApiData() {
    try {
      const response = await axios(
        `https://admin.lining.com.np/api/Men/item_detail/${slug ? slug : ""}
        }`
      );
      setDetailData(response.data.detail);
      setImageData(response.data.img);
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
      <section className="product-details container">
        <div className="all-details row">
          <div className="product-img col-12 col-sm-6 col-md-7">
            <ul className="list-unstyled row">
              {ProductsDetailsImage.length == 0
                ? ""
                : ProductsDetailsImage.map((img) => {
                    return (
                      <li className="col-6 col-sm-12 col-md-6" key={img.id}>
                        <LazyLoad>
                          <img
                            src={img.DocPath ? img.DocPath : img1}
                            alt="look1"
                          />
                        </LazyLoad>
                      </li>
                    );
                  })}
            </ul>
          </div>
          <div className="product-descrp col-12 col-sm-6 col-md-5">
            <h4 className="product-title">{ProductsDetailsData.item_name}</h4>
            <p className="product-categories">
              {ProductsDetailsData.category_user}
            </p>
            <p className="product-price">
              MRP : <span>{ProductsDetailsData.price}</span>
            </p>
            <p className="product-price">
              Color : <span>{ProductsDetailsData.color}</span>
            </p>
            <p className="product-price">
              Size : <span>{ProductsDetailsData.size}</span>
            </p>
            {/* <div className="size">
              <h6>Select Size</h6>
              <ul className="list-unstyled row">
                <li className="col-4 col-sm-6 col-md-4">
                  <button>UK 6</button>
                </li>
              </ul>
            </div>
            <div className="item-details">
              <p>
                Layer on style with the Air Max 97. The cracked leather and soft
                suede update the iconic design while the original look (inspired
                by Japanese bullet trains and water droplets) still takes centre
                stage. Easy-to style colours let you hit the streets quickly.
              </p>
              <p className="color-shown">
                Color Shown: <span>Purple</span>
              </p>
              <p className="style">
                Stype: <span>DV7421 001</span>
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductsDetails;
