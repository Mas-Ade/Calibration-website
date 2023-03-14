import React, { useState } from "react";
import AllData from "./allData";
import FilterToday from "./filterToday";
import "../../../App.css";

function IndexHome() {
  const [todayData, setTodayData] = useState("today");
  // const [allData, setAllData] =useState("all")

  const handleClick = (table) => {
    setTodayData(table);
  };

  return (
    <div className="App">
      <h2
        style={{ fontFamily: "Segoe UI" }}
        className="mb-4 mt-4 text-center mb-4 fw-bold"
      >
        Calibration Progress
      </h2>

      {(() => {
        switch (todayData) {
          case "today":
            return <FilterToday handleClick={handleClick} />;
          case "all":
            return <AllData handleClick={handleClick} />;
          default:
            return <FilterToday handleClick={handleClick} />;
        }
      })()}
    </div>
  );
}

export default IndexHome;
