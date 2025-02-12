import HomeTwoBlogs from "@/components/blogs/home-2-blogs";
import ClintLogo from "@/components/clint-logo/logo";
import StaffingSolutions from "@/components/home-data/staffing-solutions";
import PartnersLogos from "@/components/partners/partners-logo";
import FooterOne from "@/layout/footer/footer-one";
import Header from "@/layout/header/Header";
import Wrapper from "@/layout/wrapper";
import Image from "next/image";
import BlockFeatureSeven from "@/components/block-feature/block-feature-seven";
import PortfolioTwo from "@/components/portfolio/portfolio-two";
import ContactArea from "@/components/contact/contact-area";
import ContactForm from "@/components/forms/contact-form";
import bg_image2 from "@/assets/images/background/counter_dark_pattern.png";
import bg_image1 from "@/assets/images/background/background-explore.jpg";
import img4 from "@/assets/images/media/doctor.jpg";
import mat from "@/assets/images/pistar/1.png";
import AwardsSection from "@/components/company/awards-section";
import TextFeatureSeven from "@/components/text-feature/text-feature-seven";
import TextFeatureTen from "@/components/text-feature/text-freature-ten";
import PopUpModal from "@/components/common/popup-model";
import HeroBannerSeven from "@/components/hero-banner/hero-banner-seven";
import HeroBannerEight from "@/components/hero-banner/hero-banner-eight";
import HeaderSix from "@/layout/header/header-six";
import BlockFeatureFive from "@/components/block-feature/block-feature-five";
import BlockFeatureThree from "@/components/block-feature/block-feature-three";
import OurCompanySection from "@/components/company/our-company-section";
import ProjectFourArea from "@/components/project/project-v4-area";
import FeedbackTwo from "@/components/feedback/feedback-two";
import ProjectDetailsArea from "@/components/project-details/project-details-v1-area";
import ProjectDetailsThreeArea from "@/components/project-details/project-details-v3-area";

const backImg1 = {
  backgroundImage: `url('${bg_image1.src}')`,
  backgroundSize: "cover,auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

const backImg2 = {
  backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

export const metadata = {
  title: "Advanced Foot Systems Podiatry | Diabetic Foot Care Solutions",
  description:
    "Discover PiStarTech flexible pressure sensor technology designed for diabetic foot care, providing accurate podiatry insights to enhance foot health and prevent complications.",
  keywords:
    "foot systems podiatry, flexible pressure sensor, Diabetic Foot Care ",
  openGraph: {
    title: "Advanced Foot Systems Podiatry | Diabetic Foot Care Solutions",
    description:
      "Discover PiStarTech flexible pressure sensor technology designed for diabetic foot care, providing accurate podiatry insights to enhance foot health and prevent complications.",
    images: [
      {
        url: "@/assets/images/logo/logo.png", // URL of the image
        width: 1200, // Optional: specify the width of the image
        height: 630, // Optional: specify the height of the image
        alt: "Pistar logo Image", // Optional: alternative text for the image
      },
    ],
  },
};

export default function HomePage() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderSix />
        {/* header end */}
        <main>
          {/* hero banner start */}
          {/* <HeroVideoOne /> */}
          {/* <HeroBannerTwo /> */}
          {/* <HeroBannerSeven /> */}
          <HeroBannerEight />

          {/* hero banner end */}

          <BlockFeatureFive />
          {/* <BlockFeatureThree /> */}
          <OurCompanySection />

          <ProjectFourArea />

          <ProjectDetailsThreeArea />
          <ClintLogo />

          <div
            className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            // style={backImg1}
            style={{ background: "#292e31" }}
          >
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-6 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      {/* <div className="upper-title">management</div> */}
                      <h2 style={{ color: "white" }}>
                        Why is the Podiascanner Mat so easy to adopt?
                      </h2>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      The <b>Podiascanner Mat</b> from PiStarTech Private
                      Limited is designed for easy adoption into any clinical
                      setting. Its portable, flexible design allows it to
                      seamlessly integrate into existing medical workflows
                      without the need for extensive training or changes to the
                      current setup. The device is user-friendly and highly
                      adaptable, making it suitable for clinics and hospitals of
                      any size. <br /> <br />
                      Since it provides instant, digital plantar pressure
                      analysis in just 5 seconds, healthcare professionals can
                      easily incorporate the Podiascanner Mat into their patient
                      evaluation process, streamlining diagnosis and enhancing
                      accuracy without interrupting day-to-day operations. Its
                      affordability and ease of use make it accessible to a wide
                      range of practitioners, ensuring they can upgrade to
                      modern foot analysis technology with minimal effort.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
                    <div className="media-wrapper md-mt-60">
                      <Image
                        src={mat}
                        alt="screen"
                        className="lazy-img"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-10 m-auto">
                    <div className="title-one details-meta">
                      <h3 style={{ color: "white" }}>
                        Why is the Podiascanner Mat so easy to adopt?
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      The Podiascanner Mat from PiStarTech Private Limited is designed
                      for easy adoption into any clinical setting. Its portable,
                      flexible design allows it to seamlessly integrate into
                      existing medical workflows without the need for extensive
                      training or changes to the current setup. The device is
                      user-friendly and highly adaptable, making it suitable for
                      clinics and hospitals of any size.
                    </p>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      Since it provides instant, digital plantar pressure
                      analysis in just 5 seconds, healthcare professionals can
                      easily incorporate the Podiascanner Mat into their patient
                      evaluation process, streamlining diagnosis and enhancing
                      accuracy without interrupting day-to-day operations. Its
                      affordability and ease of use make it accessible to a wide
                      range of practitioners, ensuring they can upgrade to
                      modern foot analysis technology with minimal effort.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <StaffingSolutions />
          {/* <TeamThreeArea /> */}

          {/* feedback one start */}
          {/* back to deepak accont */}
          {/* <FeedbackOne /> */}
          {/* feedback one end */}

          <TextFeatureSeven />

          {/* number counter start  */}
          {/* <TextFeatureHome style_2={true} /> */}
          {/* number counter end */}

          {/* clints logo start  */}
          <ClintLogo />
          {/* clints logo start  */}

          {/* partner logos start  */}
          <PartnersLogos />
          {/* partner logos end  */}

          <div
            className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            // style={backImg1}
            // style={{ background: "#292e31" }}
          >
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-12 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      <h2>
                        Welcome to PiStarTech – Revolutionizing Healthcare with
                        Cutting-Edge Pressure Measurement Sensors
                      </h2>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      At PiStarTech, we are committed to enhancing healthcare
                      with innovative solutions that bridge the gap between
                      technology and medical practice. Our flagship product, the
                      <b> Diabetic PodiaScan Mat (Podiascanner Mat)</b>, is an
                      advanced, research-backed foot pressure analysis system
                      designed to support medical professionals in diagnosing
                      and treating foot-related ailments, particularly for
                      diabetic patients.
                      <br />
                      The Podiascanner Mat is a portable and flexible
                      pressure-sensing mat that provides both static and dynamic
                      podiatric pressure patterns (SPPP and DPPP). These
                      insights help doctors detect normal and abnormal foot
                      posture, track patient recovery post-injury or surgery,
                      and authenticate clinical findings with accurate,
                      quantifiable data. With just a 5-second scan, healthcare
                      professionals can prescribe customized treatments,
                      recommend proper footwear, and monitor progress over time.
                      <br />
                      Our mission is to make affordable, precise, and
                      evidence-based foot scanning technology accessible to a
                      wider range of medical professionals, empowering them to
                      provide better care. Whether you&#39;re looking to improve
                      diagnosis accuracy, enhance patient trust through
                      cutting-edge technology, or monitor patient progress
                      post-surgery, PiStarTech has you covered.
                    </p>
                  </div>
                  {/* <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
                    <div className="media-wrapper md-mt-60">
                      <Image
                        src={mat}
                        alt="screen"
                        className="lazy-img"
                        layout="responsive"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <TextFeatureTen />

          <BlockFeatureSeven />
          <PortfolioTwo />
          {/* blog item end */}
          <AwardsSection />
          <div
            className="contact-us-section pt-80 lg-pt-80"
            style={backImg2}
            // style={{background:"#292e31"}}
          >
            <div className="container">
              <div className="position-relative">
                <div className="bg-wrapper lg-mt-40">
                  <div className="row">
                    <div className="col-lg-5 d-flex">
                      {/* <Image
                        src={img4}
                        alt="icon"
                        layout="responsive"
                        className=""
                      /> */}
                      <div className="ms-auto pe-xxl-5 ps-xxl-5 pb-35 md-mt-60 d-flex align-items-end">
                        <Image
                          src={img4}
                          alt="cgb aboutus"
                          className="shap-animate rounded"
                          style={{ height: "auto" }}
                        ></Image>
                        {/* <ul className="style-none">
                        <li>Mobile app easy management & access</li>
                        <li>Ton’s of features for handle the card easily</li>
                        <li>Strong security system.</li>
                    </ul> */}
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="form-style-one ps-xl-5">
                        {/* form start */}
                        <ContactForm />
                        {/* form end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PopUpModal />

          <FeedbackTwo />

          <div className="block-feature-eleven contact-us-section mt-150 lg-mt-80">
            <div className="map-banner">
              <div className="gmap_canvas h-100 w-100">
                {/* <iframe
            className="gmap_iframe h-100 w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80824.64108959114!2d77.57106061643262!3d12.940131448526687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16986c307911%3A0x9be62fff97b110aa!2sCGB%20Solutions%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1708347527779!5m2!1sen!2sin"
          ></iframe> */}
                <iframe
                  className="gmap_iframe h-100 w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.4739631226944!2d77.6422128494832!3d12.892181344459578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14bad2ab0221%3A0x8bd04d73b003661f!2sAKR%20Tech%20Park!5e0!3m2!1sen!2sin!4v1710137545208!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
                {/* <iframe
            className="gmap_iframe h-100 w-100"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe> */}
              </div>
            </div>
          </div>
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
