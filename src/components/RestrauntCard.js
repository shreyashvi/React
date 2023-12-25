import { IMG_URL, styleCard } from "../utils/constant";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cusine, averageRating } = resData?.data;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={IMG_URL}></img>
      <h3>{name}</h3>
      <h4>{cusine}</h4>
      <h4>{averageRating}</h4>
      <h4>42 minutes</h4>
    </div>
  );
};
export default RestrauntCard;
