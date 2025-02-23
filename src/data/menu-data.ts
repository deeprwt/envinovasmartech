import { IMenu } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/products",
    title: "Products",
    sub_dropdown: true,
    dropdown_submenus: [
      { link: "/products", title: "Product 1" },
      {link:'/products',title:'Product 2'},
      {link:'/products',title:'Product 3'},
      {link:'/products',title:'Product 4'},
      {link: "/products", title: "Product 5" },
      {link: "/products", title: "Product 6" },
    ],
  },
  {
    id: 3,
    link: "/projects",
    title: "Projects",
  },
  {
    id: 2,
    link: "/",
    title: "About Us",
  },                                                                                                                                                   
  {
    id: 5,
    link: "/article",
    title: "Articles",
  },
  {
    id: 6,
    link: "/contact",
    title: "Contact Us",
  },
];

export default menu_data;
