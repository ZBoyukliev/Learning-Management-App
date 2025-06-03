"use client";

import { motion } from "framer-motion";

const CheckoutWizzard = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="checkout"
    >
       CheckoutWizzard Page
    </motion.div>
  );
};

export default CheckoutWizzard;