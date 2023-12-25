import RestrauntCard from "./RestrauntCard";
import restraunt from "../utils/mockdata";
import { IMG_URL } from "../utils/constant";
import { useState } from "react";

const Body = () => {
  const [ListOfRestraunt, setListOfRestraunt] = useState([
    {
      type: "restraunt",
      data: {
        id: "1",
        name: "KFC",
        imageid: { IMG_URL },
        cusines: ["Burgers", "Mocktails"],
        costForTwo: 500,
        averageRating: "3.8",
      },
    },
    {
      type: "restraunt",
      data: {
        id: "2",
        name: "Dominos",
        imageid: { IMG_URL },
        cusines: ["Burgers", "Mocktails"],
        costForTwo: 500,
        averageRating: "4.5",
      },
    },
  ]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestraunt.filter(
              (res) => res.data.averageRating > 4
            );
            setListOfRestraunt(filteredList);
            console.log(ListOfRestraunt);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {ListOfRestraunt.map((restraunt) => (
          <RestrauntCard key={restraunt.data.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
