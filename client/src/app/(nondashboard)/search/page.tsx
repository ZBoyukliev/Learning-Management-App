"use client";

import { useGetCoursesQuery } from "@/state/api";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data: courses, isLoading, isError } = useGetCoursesQuery({});
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const router = useRouter();
 

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