import * as React from "react";
import { motion } from "framer-motion";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import { Link } from "react-router-dom";


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = ({ data }) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    setProgress(progress + 100);
  };

  return (
    <div className="nav-bar">
      <LoadingBar color="#0C9" progress={progress} height={10} loaderSpeed={7000}/>
    
      {data.map(({id, title, url}) => (
        <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        key={id} 
      >
        <Link style={{textDecoration: 'none'}} to={url}><p className="text-dark" onClick={updateProgress} style={{cursor: 'pointer'}}>{title}</p></Link>
    </motion.li>
      ))}
    </div>
  );
};
