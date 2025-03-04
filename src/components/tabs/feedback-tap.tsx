"use client";
import React from "react";
import Image from "next/image";
import { IProduct } from "@/types/product-d-t";
import campa from "@/assets/images/envo/campa.png";
import bus from "@/assets/images/envo/bus.jpg";
import user_1 from "@/assets/images/blog/avatar_01.jpg";
import user_2 from "@/assets/images/blog/avatar_02.jpg";

const FeedBackTap = () => {
  //   const { details, reviews } = product || {};

  return (
    <div
      className="product-details-one pt-80 lg-pt-80 pb-80 lg-pb-80 service-details"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      <div className="container">
        <div className="title-one text-center mb-60 details-meta">
          {/* <div className="upper-title"></div> */}
          <h2 className="">Our Reviews</h2>
        </div>
        <div className="product-review-tab mt-130 lg-mt-100">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#item1"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Clients
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#item2"
                type="button"
                role="tab"
                aria-selected="false"
              >
                User
              </button>
            </li>
            {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#item3"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Feedback
              </button>
            </li> */}
          </ul>
          <div className="tab-content mt-50 lg-mt-20">
            <div
              className="tab-pane fade show active"
              id="item1"
              role="tabpanel"
            >
              <div className="row gx-5 justify-content-around pb-4">
                <div className="col-md-4">
                  <Image
                    src={campa}
                    alt="Envinova Clients images"
                    layout="responsive"
                    className="rounded"
                  />
                  {/* <p>{details?.specifications}</p> */}
                </div>
                <div className="col-md-6">
                  <h5>Check product main features:</h5>
                  <ul className="style-none product-feature">
                    {/* {details?.main_features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))} */}
                  </ul>
                </div>
              </div>
              <div className="row gx-5 justify-content-around pb-4">
                <div className="col-md-4">
                  <Image
                    src={bus}
                    alt="Envinova Clients images"
                    layout="responsive"
                    className="rounded"
                  />
                  {/* <p>{details?.specifications}</p> */}
                </div>
                <div className="col-md-6">
                  <h5>Check product main features:</h5>
                  <ul className="style-none product-feature">
                    {/* {details?.main_features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))} */}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="tab-pane fade" id="item2" role="tabpanel">
              <div className="row gx-5">
                <div className="col-xl-6">
                  <h5>Check product main features:</h5>
                  <ul className="style-none product-feature">
                    {details?.main_features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-xl-6">
                  <h5>Specifications:</h5>
                  <p>{details?.specifications}</p>
                </div>
              </div>
            </div> */}
            <div className="tab-pane fade" id="item2" role="tabpanel">
              <div className="row">
                <div className="col-xl-10">
                  <div className="user-comment-area">
                    {/* {reviews?.map((r, i) => (
                      <div key={i} className="single-comment d-flex align-items-top">
                        <Image src={r.user} alt="user" className="user-img" />
                        <div className="user-comment-data">
                          <h6 className="name">{r.name}</h6>
                          <ul className="style-none d-flex rating">
                            {[...Array(5)].map((_, index) => (
                              <li key={index}>
                                <i className={index < r.rating ? "bi bi-star-fill" : "bi bi-star"}></i>
                              </li>
                            ))}
                          </ul>
                          <p>{r.review_text}</p>
                        </div>
                      </div>
                    ))} */}

                    <div className="single-comment d-flex align-items-top">
                      <Image src={user_1} alt="user" className="user-img" />
                      <div className="user-comment-data">
                        <h6 className="name">John Smith</h6>
                        <ul className="style-none d-flex rating">
                          <li>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </li>
                        </ul>
                        <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackTap;
