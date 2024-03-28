import React from "react";
import HomeTrip from "../components/homeComponents/HomeTrip";
import HomeBlog from "../components/homeComponents/HomeBlog";

function Main() {
  return (
    <>
      <div>{/* <HomeNews/> */}</div>
      <div>
        <HomeTrip />
      </div>
      <div>
        <HomeBlog />
      </div>
      {/* <div>{<HomeGuides/>}</div> */}
    </>
  );
}

export default Main;
