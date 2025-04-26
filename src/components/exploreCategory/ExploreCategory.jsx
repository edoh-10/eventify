import CategoriesData from "../../utils/categoriesData";
import { Link } from "react-router-dom";

import React from "react";

function ExploreCategory() {
  return (
    <div className="w-[90%] mx-auto flex flex-col my-[6vh]">
      <div className="flex justify-start items-center w-[92%] mx-auto">
        <h2 className="font-[Montserrat] text-[20px] font-[700]">
          Explore Categories
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-8">
        {CategoriesData.map((list1) => (
          <div className="flex flex-col justify-between items-center w-full h-auto mb-6">
            <Link to={`/event-category/${list1.titre}`}>
              <img
                src={list1.image}
                alt={list1.titre}
                className="rounded-[100%] w-32 h-32 mb-4"
              />
            </Link>
            <Link to={`/event-category/${list1.titre}`}>
              {" "}
              <span className="font-[Open Sans] text-[14px] lg:text-[16px] font-[600]">
                {list1.titre}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreCategory;
