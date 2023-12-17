import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>

      <div className="nav-conatiner">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const restraunt = {
  data: {
    id: "1",
    name: "A2Z",
    cusine: "Chinese",
    rating: "4.5",
  },
};

const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cusine } = resData?.data;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmonF9N8lP0zxHE7r3JRajdHyGy_jCx7xZqw&usqp=CAU"
      ></img>
      <h3>{name}</h3>
      <h4>{cusine}</h4>
      <h4>4.5</h4>
      <h4>42 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">
        <RestrauntCard resData={restraunt} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
