import React from "react";
import { businessList } from "../../utils/content";
import BusinessItem from "./BusinessItem";

const BusinessList = () => {
  return (
    <div className="row">
      {businessList?.map((item) => (
        <BusinessItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default BusinessList;
