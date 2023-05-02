import React from "react";
import { businessList, categoryList } from "./../../utils/content";

const CategoryList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {categoryList?.map((item, index) => {
        return (
          <p
            key={item._id}
            className="card p-2"
            style={{ flex: "0 0 calc(33.33% - 10px)", margin: "5px" }}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default CategoryList;
