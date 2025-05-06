"use client";

import { motion } from "framer-motion";

const Checkout = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="checkout"
    >
       Checkout Page
    </motion.div>
  );
};

export default Checkout;