"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@/assets/images/logo/logo-white.png";
import FooterSocial from "./footer-social";
import MapWithCountries from "@/components/map/maps";
import icon_1 from "@/assets/images/icon/icon_49.svg";
import icon_2 from "@/assets/images/icon/icon_50.svg";
import map from "@/assets/images/icon/footer-map.svg";
import Newsletter from "@/components/forms/newsletter";
import NewsletterBannerTwo from "@/components/newsletter/newsletter-banner-2";

const FooterOne = () => {
  return (
    <>
      {/* <NewsletterBannerTwo /> */}
      <div className="footer-one" style={{ background: "radial-gradient(56.79% 56.79% at 50% 50%, rgb(139, 242, 161) 0%, rgb(83, 188, 105) 0%, rgb(10, 116, 95) 100%)" }}>
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-md-5 footer-intro mb-30">
                <div className="logo">
                  <Link href="/" className="d-lg-inline-block mb-25">
                    <Image width={150} src={logo} alt="logo" />
                  </Link>
                </div>
                {/* map start  */}
                {/* <h5 className="footer-title">Global Presence</h5>
              <div className="pb-4">
                <MapWithCountries />
              </div> */}
                {/* map end  */}
                {/* <p className="text-white lh-sm mb-35">Top-rated <span className="opacity-50">business <br/> consultancy for your success</span></p> */}
                <h4 className="text-white lh-sm mb-35">
                  Head office <br /> <br />
                  <span className="opacity-50 mt-2">
                    Cabin 1, E-313, Sector 75, Sahibzada Ajit Singh Nagar,
                    Punjab 160055
                  </span>
                </h4>
                {/* <p className="text-white lh-sm mb-35 ">
                <Link
                  href="mailto:info@pistar.tech"
                  className="d-flex align-items-center"
                >
                  <Image
                    src={icon_1}
                    alt="icon"
                    className="lazy-img icon me-3"
                  />
                  info@pistar.tech 
                </Link> <br />
                <Link href="tel:+919888912909" className="d-flex">
                    <Image
                      src={icon_2}
                      alt="icon"
                      className="lazy-img icon me-3"
                    />
                    +91 9908127810
                  </Link>
              </p> */}
              </div>
              <div className="col-xl-3 col-md-3 col-sm-4 mb-20">
                <h5 className="footer-title">Solutions</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <Link href="/">Product 1</Link>
                  </li>
                  <li>
                    <Link href="/product/podiascanner">Product 2</Link>
                  </li>
                  <li>
                    <Link href="/product/footscan">
                      Product 3
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/pressure-mat">Product 4</Link>
                  </li>
                  <li>
                    <Link href="/product/foot-pressure-mapping">
                     Product 5
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-2 col-sm-4 mb-20">
                <h5 className="footer-title">About</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/article">Article</Link>
                  </li>
                  {/* <li>
                  <Link href="/internship">Internship Program</Link>
                </li> */}
                </ul>
              </div>
              <div className="col-xl-2 col-md-2 col-sm-4 mb-20">
                <h5 className="footer-title">Get In Touch</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <Link href="mailto:info@pistar.tech">care@envinovasmartech.com</Link>
                  </li>
                  <li>
                    <Link href="tel:9908127810">+91 9908127810</Link>
                  </li>
                </ul>
                <ul className="style-none d-flex align-items-center pt-20 social-icon">
                  <FooterSocial />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bottom-footer">
            <div className="row align-items-center">
              <div className="col-lg-4 order-lg-last mb-15">
                <div
                  className="footer-newsletter float-xl-end"
                  style={{ zIndex: "1000000000" }}
                >
                  {/* social link */}

                  {/* social link */}
                  {/* <h5 className="footer-title">Subscribe Newsletter</h5>
                <Newsletter /> */}
                </div>
              </div>
              <div className="col-lg-8 order-lg-first mb-15">
                <div className="d-xl-flex align-items-center justify-content-between">
                  <div className="copyright me-xl-4 lg-mt-10 order-lg-first m-auto ">
                    Copyright &#169; 2023 - {new Date().getFullYear()} Envinova.
                  </div>
                  <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                    {/* <li>
                      <Link href="mailto:info@pistar.tech">
                        info@pistar.tech
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:9908127810">+91 9908127810</Link>
                    </li> */}
                    {/* <li>
                    <Link href="#">Privacy & Terms</Link>
                  </li>
                  <li>
                    <Link href="#">Cookies</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;
