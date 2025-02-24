import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import media_bg from "@/assets/images/media/img_36.jpg";
import screen from "@/assets/images/assets/screen_20.svg";
import icon_1 from "@/assets/images/icon/icon_85.svg";
import icon_2 from "@/assets/images/icon/icon_86.svg";
import icon_3 from "@/assets/images/icon/icon_87.svg";
// gallery images
import gallery_1 from "@/assets/images/gallery/solar-furniture.jpg";
import gallery_2 from "@/assets/images/gallery/img_20.jpg";
import gallery_3 from "@/assets/images/gallery/img_21.jpg";
import ProjectDetailsFeature from "./project-details-feature";

// list item
function ListItem({
  icon,
  text,
  sm_text,
}: {
  icon: StaticImageData;
  text: string;
  sm_text: string;
}) {
  return (
    <li className="d-flex">
      <Image src={icon} alt="icon" className="lazy-img icon" />
      <div className="ps-4">
        <div className="text1">{text}</div>
        <span>{sm_text}</span>
      </div>
    </li>
  );
}
// img style
const imgStyle = {
  height: "auto",
};

const ProjectDetailsThreeArea = () => {
  return (
    <div
      className="project-details-one position-relative pt-80 pb-60 lg-pb-60"
      style={{
        background:
          "linear-gradient(to bottom, rgb(10, 116, 95) 0%, rgb(139, 242, 161) 60%, white 100%)",
      }}
    >
      <div className="container">
        <div>
          {/* <div className="upper-title">overview</div> */}
          <h2 className="text-white">Conventional vs Our Products</h2>
        </div>
        <div className="img-gallery mb-60 lg-mb-40">
          <div className="row align-items-center">
            <div className="col-sm-8">
              <Image
                src={gallery_1}
                alt="gallery_img"
                className="lazy-img"
                style={imgStyle}
              />
            </div>
            <div className="col-sm-4">
              <Image
                src={gallery_2}
                alt="gallery_img"
                className="lazy-img"
                style={imgStyle}
              />
              <Image
                src={gallery_3}
                alt="gallery_img"
                className="lazy-img"
                style={imgStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsThreeArea;
