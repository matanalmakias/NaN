import { useState } from "react";
import CategoryItem from "./CategoryItem";
import HoursItem from "./HoursItem";
import SocialMedia from "./SocialMedia";
import { BsArrowDownLeftCircle } from "react-icons/bs";
import ReviewItem from "./ReviewItem";
const BusinessItem = ({ item }) => {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="w-100 d-flex flex-column p-1">
      <span
        onClick={() => setShowItem((s) => !s)}
        className=" p-2  btn btn-light shadow "
      >
        {item?.name} <BsArrowDownLeftCircle />
      </span>

      {showItem && (
        <>
          <div className="row justify-content-center gap-1 align-items-center card p-1 m-1 mb-3 w-100">
            <a href={`tel:${item?.phone}`} className="col p-1 ">
              טלפון
            </a>
            <a target="_blank" href={item?.website} className="col p-1 ">
              אתר
            </a>
            <a href={`mail:${item?.email}`} className="col p-1 ">
              אימייל
            </a>
            <div className="row gap-2">
              <span className="p-1">קטגוריות</span>
              {item?.categories?.map((item, index) => (
                <CategoryItem key={index} item={item} />
              ))}
            </div>
            <div className="col row gap-3">
              {item?.socialMedia?.map((item, index) => (
                <SocialMedia key={index} item={item} />
              ))}
            </div>
            <div className="col row gap-2">
              {item?.hours?.map((item, index) => (
                <HoursItem key={index} item={item} />
              ))}
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: item?.descHTML }}
              className="col p-3 "
            ></div>

            <div className="col">
              {item?.reviews?.map((item, index) => (
                <ReviewItem key={index} item={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BusinessItem;
