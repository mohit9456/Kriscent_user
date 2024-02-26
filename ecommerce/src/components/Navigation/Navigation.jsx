import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <MenuItem data={itemIds1} />
  </motion.ul>
);


const itemIds1 = [
  {
    id: 0,
    title: "Home",
    url: "/"
  },
  {
    id: 1,
    title: "Mens-Collection",
    url: "/men"
  },
  {
    id: 2,
    title: "Women-Collection",
    url: "/women"
  },
  {
    id: 3,
    title: "Summer-Collections",
    url: "/Summer"
  },
  {
    id: 4,
    title: "Winter-Collections",
    url: "/winters"
  }
]

