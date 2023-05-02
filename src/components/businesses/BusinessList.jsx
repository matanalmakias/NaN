import React from "react";
import { businessList } from "../../utils/content";
import BusinessItem from "./BusinessItem";

const BusinessList = () => {
  return (
    <div className="row">
      <span className="h1 shadow p-1 bg-primary text-light p-1">
        רשימת עסקים
      </span>
      <div className="d-flex flex-column  gap-1 p-2 ">
        {businessList?.map((item) => (
          <BusinessItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
