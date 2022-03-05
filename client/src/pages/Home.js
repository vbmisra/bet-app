import React from "react";
import Overview from "../components/Overview"
import TabsContainer from "../components/TabsContainer"
import Separator from "../components/Separator";


//Logged In//

const Home = () => {
  return (
    <div className="container">
      <Overview />
      <Separator />
      <TabsContainer />
    </div>
  );

}
export default Home;


