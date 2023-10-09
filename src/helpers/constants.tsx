type link = {
  name: string;
  href: string;
};
export const navLinks: link[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "shop",
    href: "/shop",
  },
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

export const departments: string[] = [
  "Fresh Meat",
  "Vegetables",
  "Fruit",
  "Ocean Food",
  "Fastfood",
];

import Cat1 from "@/assets/imgs/categories/cat-1.jpg";
import Cat2 from "@/assets/imgs/categories/cat-2.jpg";
import Cat3 from "@/assets/imgs/categories/cat-3.jpg";
import Cat4 from "@/assets/imgs/categories/cat-4.jpg";
import Cat5 from "@/assets/imgs/categories/cat-5.jpg";
import { StaticImageData } from "next/image";

type category = {
  id: number;
  name: string;
  img: StaticImageData;
};

export const categories: category[] = [
  { id: 1, name: "Fresh Fruit", img: Cat1 },
  { id: 2, name: "Dried Fruit", img: Cat2 },
  { id: 3, name: "Vegetables", img: Cat3 },
  { id: 4, name: "Drink Fruits", img: Cat4 },
  { id: 5, name: "Fresh Meat", img: Cat5 },
  { id: 6, name: "Fresh Fruit", img: Cat1 },
  { id: 7, name: "Dried Fruit", img: Cat2 },
  { id: 8, name: "Vegetables", img: Cat3 },
  { id: 9, name: "Drink Fruits", img: Cat4 },
  { id: 10, name: "Fresh Meat", img: Cat5 },
];
