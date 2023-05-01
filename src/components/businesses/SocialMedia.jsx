const SocialMedia = ({ item }) => {
  return (
    <div className="col card p-1">
      <span className="col">{item.name}:</span>
      <a href={item.link} target="_blank" className="col">
        לינק
      </a>
    </div>
  );
};
export default SocialMedia;
