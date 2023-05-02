const ReviewItem = ({ item }) => {
  return (
    <div className="row">
      <span className="col">{item.name}</span>
      <span className="col">{item.comment}</span>
      <span className="col">ביקורת: {item.stars}/5</span>
    </div>
  );
};
export default ReviewItem;
