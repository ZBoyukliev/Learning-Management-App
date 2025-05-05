"use client";

import { motion } from "framer-motion";

const Search = () => {
 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="search"
    >
       Search Page
    </motion.div>
  );
};

export default Search;