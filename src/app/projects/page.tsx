import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import FooterTwo from "@/layout/footer/footer-two";
import FooterOne from "@/layout/footer/footer-one";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import blog_bg from "@/assets/images/media/NewsBanner.png";
import NewsList from "@/components/dynamic/newsdesigndata/newslist";
import HeaderSix from "@/layout/header/header-six";
import BlockFeatureFive from "@/components/block-feature/block-feature-five";
import FeedBackTap from "@/components/tabs/feedback-tap";

export const metadata: Metadata = {
  title: "News & Media",
};

const BlogGridPage = () => {
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
          title="News & Media"
          subtitle=""
          page="News & Media"
          bg_img={blog_bg}
          style_2={true}
          /> */}
          {/* breadcrumb end */}

          {/* blog grid area start */}
          {/* <NewsGridArea /> */}
          <NewsList />
          {/* blog grid area end */}

          {/* <BlockFeatureFive number={8} /> */}
          {/* <FeedBackTap /> */}

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogGridPage;
