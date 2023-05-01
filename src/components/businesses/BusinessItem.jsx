import CategoryItem from "./CategoryItem";
import SocialMedia from "./SocialMedia";
const BusinessItem = ({ item }) => {
  return (
    <>
      <div className="row justify-content-center gap-1 align-items-center card p-1 m-1 mb-3 w-100">
        <span className="col p-1 shadow ">{item?.name}</span>
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
        <div className="col">
          {item?.hours?.map((item, index) => (
            <HoursItem key={index} item={item} />
          ))}
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: item?.descHTML }}
          className="col"
        ></div>
      </div>
    </>
  );
};
const HoursItem = ({ item }) => {
  console.log(item);
  return (
    <div className=" row card p-1">
      <span className="col">{item.day}</span>
      <span className="col">{item.hours}</span>
    </div>
  );
};
export default BusinessItem;
