import React from "react";
import Overview from "../components/Overview"
import TabsContainer from "../components/TabsContainer"
import Separator from "../components/Separator";
import Welcome from "../components/Welcome"


//Logged In//

const Home = () => {
  // return (
  //   <div className="container">
  //     <Overview />
  //     <Separator />
  //     <TabsContainer />
  //   </div>
  // );

//Not Logged In //
return (
  <div className="container">
    <Welcome />
  </div>
);

}
export default Home;


