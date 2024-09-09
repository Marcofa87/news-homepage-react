import { Article } from "@/types";

import retroPcsImage from "@/images/image-retro-pcs.jpg";
import topLaptopsImage from "@/images/image-top-laptops.jpg";
import gamingGrowthImage from "@/images/image-gaming-growth.jpg";

export const blogArticles: Article[] = [
  {
    id: 1,
    number: "01",
    heading: "Reviving Retro PCs",
    paragraph: "What happens when old PCs are given modern upgrades?",
    image: retroPcsImage,
    alt: "Retro PC with modern upgrades",
  },
  {
    id: 2,
    number: "02",
    heading: "Top 10 Laptops of 2022",
    paragraph: "Our best picks for various needs and budgets.",
    image: topLaptopsImage,
    alt: "Top laptops of 2022",
  },
  {
    id: 3,
    number: "03",
    heading: "The Growth of Gaming",
    paragraph: "How the pandemic has sparked fresh opportunities.",
    image: gamingGrowthImage,
    alt: "Growth of gaming",
  },
];
