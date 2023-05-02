import React from "react";

const HoursItem = ({ item }) => {
  return (
    <div className=" row  col  card p-1">
      <span className="col">{item.day}</span>
      <span className="col">{item.hours}</span>
    </div>
  );
};

export default HoursItem;
