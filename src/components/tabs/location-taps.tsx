import React from "react";
import Link from "next/link";

import Image, { StaticImageData } from "next/image";
// internal
import icon_1 from "@/assets/images/icon/icon_90.svg";
import icon_2 from "@/assets/images/icon/icon_91.svg";
import icon_3 from "@/assets/images/icon/icon_92.svg";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import ContactForm from "../forms/contact-form";

const maxcontent = {
  width: "fit-content",
  "border-radius": "30px",
};

function AddressBlock({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="address-block-one text-center mb-40">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h5 className="title">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
    </div>
  );
}

const LocationTabsData = () => {
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-40 lg-pt-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              <h3 className="text-center">CGB offices around the world</h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
                Join our global team with offices in vibrant cities worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}
      <div className="faq-section-three  pb-50 lg-pb-80 ">
        <div className="container">
          <nav>
            <div
              className="nav m-auto nav-tabs justify-content-center light-bg py-2 mw-60"
              id="nav-tab"
              role="tablist"
              style={maxcontent}
            >
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#nav-oracle"
                type="button"
                role="tab"
                aria-selected="true"
                tabIndex={-1}
              >
                Our Mission
              </button>
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-finacle"
                type="button"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
              >
                Our Vision
              </button>
            </div>
          </nav>
          <div className="tab-content mt-20 lg-mt-40">
            {/* tab 1start form her  */}
            <div
              className="tab-pane fade show active"
              id="nav-oracle"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionOne">
                <div className="row justify-content-center">
                  {/*----------------------------------------Adding address IND div staring--------------------------------*/}

                  <div className="col-md-10 pt-30 wow fadeInUp">
                    <div className="address-block-one text-center mb-40">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                        <Image src={icon_1} alt="icon" className="lazy-img" />
                      </div>
                      <h5 className="title">Purpose of Our Business</h5>
                      <p>
                        Our vision is to revolutionize infrastructure by
                        creating modern, green, and sustainable solutions that
                        elevate outdoor experiences while fostering a positive
                        environmental impact. We are committed to making public
                        conveniences universally accessible, regardless of
                        location, through innovative solutions that operate
                        independently of traditional power sources.
                      </p>
                    </div>
                  </div>

                  {/*-------------------------------------------Adding address IND div End-------------------------- */}
                </div>
              </div>
            </div>
            {/* tab 1end form her  */}

            {/* tab 2start form her  */}
            <div
              className="tab-pane fade"
              id="nav-finacle"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionTwo">
                <div className="row justify-content-center">
                  {/*----------------------------------------Adding address IND div staring--------------------------------*/}
                  <div className="col-md-5 pt-30">
                    <div className="address-block-one text-center mb-40">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                        <Image src={icon_1} alt="icon" className="lazy-img" />
                      </div>
                      <h5 className="title">Purpose of Our Business</h5>
                      <p>
                        Our vision is to revolutionize infrastructure by
                        creating modern, green, and sustainable solutions that
                        elevate outdoor experiences while fostering a positive
                        environmental impact. We are committed to making public
                        conveniences universally accessible, regardless of
                        location, through innovative solutions that operate
                        independently of traditional power sources.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 pt-30">
                    <div className="address-block-one text-center mb-40">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                        <Image src={icon_1} alt="icon" className="lazy-img" />
                      </div>
                      <h5 className="title">Purpose of Our Business</h5>
                      <p>
                        Our vision is to revolutionize infrastructure by
                        creating modern, green, and sustainable solutions that
                        elevate outdoor experiences while fostering a positive
                        environmental impact. We are committed to making public
                        conveniences universally accessible, regardless of
                        location, through innovative solutions that operate
                        independently of traditional power sources.
                      </p>
                    </div>
                  </div>

                  {/*-------------------------------------------Adding address IND div End-------------------------- */}
                </div>
              </div>
            </div>
            {/* tab 2end form her  */}

            {/* tab 5end form her  */}
            {/* <div
              className="tab-pane fade"
              id="nav-devops"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionSix">
                <div className="row align-items-center">
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationTabsData;
