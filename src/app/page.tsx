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
import FooterTwo from "@/layout/footer/footer-two";
import FooterThree from "@/layout/footer/footer-three";
import FooterFour from "@/layout/footer/footer-four";
import FooterFive from "@/layout/footer/footer-five";
import FancyBannerSix from "@/components/fancy-banner/fancy-banner-six";

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

          <FancyBannerSix />

          {/* <OurCompanySection /> */}

          <ProjectFourArea />

          <ProjectDetailsThreeArea />
          <ClintLogo />

          <HomeTwoBlogs />

          {/* <StaffingSolutions /> */}
          {/* <TeamThreeArea /> */}

          {/* feedback one start */}
          {/* back to deepak accont */}
          {/* <FeedbackOne /> */}
          {/* feedback one end */}

          {/* <TextFeatureSeven /> */}

          {/* number counter start  */}
          {/* <TextFeatureHome style_2={true} /> */}
          {/* number counter end */}

          {/* clints logo start  */}
          {/* <ClintLogo /> */}
          {/* clints logo start  */}

          {/* partner logos start  */}
          {/* <PartnersLogos /> */}
          {/* partner logos end  */}
          <FeedbackTwo />

          {/* <BlockFeatureSeven /> */}
          <PortfolioTwo />
          {/* blog item end */}
          <TextFeatureTen />
          {/* <AwardsSection /> */}

          {/* <PopUpModal /> */}

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
        </main>

        {/* footer start */}
        <FooterOne />
        {/* <FooterTwo />
        <FooterThree />
        <FooterFour />
        <FooterFive /> */}
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
