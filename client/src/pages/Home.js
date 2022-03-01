import React from "react";
import Balance from "../components/Balance"
import Tabs from "../components/Tabs"
import YourBets from "../components/YourBets";



const Home = () => {
  return (
    <div className="container">
      <Balance />
      <Tabs />
      <YourBets />
    </div>
  );
};


export default Home;
