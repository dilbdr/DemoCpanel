import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const Filter = () => {
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
        `https://admin.lining.com.np/api/Fresh_arrivals`
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }
  if (loading) return "Loading...";
  if (error) return "Error!";
  return (
    <>
      <div className="col-12 col-sm-3 col-lg-2 categories">
        {!Data.categories ? "" : <p className="title">Filter by Category</p>}

        <div className="variety-wrapper">
          <div className="variety" id="variety-wrapper">
            <ul className="list-unstyled">
              {!Data.categories
                ? "No Data Found."
                : Data.categories.map((i) => {
                    return (
                      <li key={i.id}>
                        <Link to={`/products/items/${i.id}`}>
                          {i.category_name}
                        </Link>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <h6>Gender</h6>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <div className="d-flex">
                  <input type="checkbox" />
                  <p>Male</p>
                </div>
                <div className="d-flex">
                  <input type="checkbox" />
                  <p>Female</p>
                </div>
                <div className="d-flex">
                  <input type="checkbox" />
                  <p>Unisex</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <h6>Kids</h6>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <div className="d-flex">
                  <input type="checkbox" />
                  <p>Boys</p>
                </div>
                <div className="d-flex">
                  <input type="checkbox" />
                  <p>Girls</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <h6>Shop By Price</h6>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <div className="d-flex">
                  <input type="checkbox" />
                  <p>Under Rs 2,500</p>
                </div>
                <div className="d-flex">
                  <input type="checkbox" />
                  <p>Rs 2,500 - Rs 5,000</p>
                </div>
                <div className="d-flex">
                  <input type="checkbox" />
                  <p>Rs 5,000 - Rs 10,000</p>
                </div>
                <div className="d-flex">
                  <input type="checkbox" />
                  <p>Rs 10,000 - Rs 25,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
