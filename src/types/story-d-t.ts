import { StaticImageData } from "next/image";

export interface IStory {
  id: number;
  title: string;
  body_title: string;
  body_desc: string[];
  body_desc_second?: string[];
  body_subtitle?: string;
  body_lists?: string[];
  bg_img: StaticImageData;
  video_id?: string;
  isShow?: boolean;
  parent?: string;
  page: string;
}