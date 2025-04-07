import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: ""}),
    reducerPath: "api",
    tagTypes: ["Courses", "Users", "UserCourseProgress"],
    endpoints: (build) => ({}),
  });

  export const {} = api;