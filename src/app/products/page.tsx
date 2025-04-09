import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import blog_bg from "@/assets/images/media/BlogBanner.png";
import shape from "@/assets/images/shape/shape_34.svg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";
import BlogList from "@/components/dynamic/bloglist";
import HeaderSix from "@/layout/header/header-six";
import bg_image2 from "@/assets/images/background/counter_dark_pattern.png";
import BlockFeatureFive from "@/components/block-feature/block-feature-five";
import Image from "next/image";
import Link from "next/link";
import img4 from "@/assets/images/media/doctor.jpg";

const backImg2 = {
  // backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#1b1f22",
};

export const metadata: Metadata = {
  title: "Blog Page",
};

const BlogPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* <HeaderTwo /> */}
        <HeaderSix />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          {/* <BreadcrumbOne
            title="Our Blogs"
            subtitle=""
            page="Blog"
            bg_img={blog_bg}
            style_2={true}
          /> */}
          {/* breadcrumb end */}

          {/* blog list area start */}

          {/* <BlogListArea /> */}
          {/* Product  list area start */}
          <BlogList />
          {/* Product  list area end */}

          <div
            className="contact-us-section pt-40 lg-pt-40"
            style={backImg2}
            // style={{background:"#292e31"}}
          >
            <div className="container">
              <div className="position-relative">
                <div className="bg-wrapper lg-mt-40">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="title-one details-meta">
                        {/* <div className="upper-title">About Us</div> */}
                        <h2 className="text-white">
                          Have a project in Mind? Connect with us!
                        </h2>
                      </div>
                      <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20 text-white">
                        Interested in our solutions or need a custom solar
                        setup? Whether it&apos;s{" "}
                        <b>
                          Smart Solar Huts, Rooftop Systems, or Plug & Play
                          Packs
                        </b>
                        , we&apos;re here to power your vision. From enhancing
                        public spaces to bringing solar energy to homes and
                        businesses, our team is ready to craft the perfect
                        solution for you. Let&apos;s create something
                        sustainable together—reach out today!
                      </p>
                      <Link href="/contact" className="btn-two icon-link">
                        <span className="text-white">Contact Us</span>
                        <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-arrow-right"></i>
                        </div>
                      </Link>
                    </div>
                    {/* <div className="col-lg-5 d-flex">
                      <div className="ms-auto pe-xxl-5 ps-xxl-5 pb-35 md-mt-60 d-flex align-items-end">
                        <Image
                          src={img4}
                          alt="envo aboutus"
                          className="shap-animate rounded"
                          style={{ height: "auto" }}
                        ></Image>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="contact-us-section pt-40 lg-pt-40"
            // style={{background:"#292e31"}}
          >
            <div className="container">
              <div className="position-relative">
                <div className="bg-wrapper lg-mt-40">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="title-one details-meta">
                        {/* <div className="upper-title">About Us</div> */}
                        <h2 className="">Want to Partner with Us?</h2>
                      </div>
                      <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                        Join us in driving the solar revolution! Whether you're
                        looking to become a <b>distributor, reseller, or channel
                        partner</b>, Envinova offers exciting opportunities to grow
                        with us. Partner with a brand committed to innovation
                        and sustainability, and bring cutting-edge solar
                        solutions to your market. Let&apos;s collaborate for a
                        brighter, greener future.
                      </p>
                      <Link href="/contact" className="btn-two icon-link">
                        <span className="text-black">Contact Us</span>
                        <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-arrow-right"></i>
                        </div>
                      </Link>
                    </div>
                    {/* <div className="col-lg-5 d-flex">
                      <div className="ms-auto pe-xxl-5 ps-xxl-5 pb-35 md-mt-60 d-flex align-items-end">
                        <Image
                          src={img4}
                          alt="envo aboutus"
                          className="shap-animate rounded"
                          style={{ height: "auto" }}
                        ></Image>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <BlockFeatureFive number={8} /> */}

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
          {/* fancy banner three end */}

          {/* news letter start */}
          {/* <NewsletterBanner /> */}
          {/* news letter end */}
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogPage;
