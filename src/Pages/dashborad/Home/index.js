import React, {useState, useEffect} from 'react';
import AllData from './allData';
import FilterToday from './filterToday';

function IndexHome () {

const [todayData, setTodayData] = useState("today")
// const [allData, setAllData] =useState("all")

const handleClick = (table) => {
    setTodayData(table)
}

return(
    <div className='App'>
    <h2 className='container text-center fw-bold mb-3 mt-3' style={{fontFamily: 'Segoe UI'}}> Calibration Progress </h2>

    {(() => {
        switch(todayData) {
            case 'today' :
            return <FilterToday handleClick={handleClick} />
            case 'all' :
            return <AllData handleClick={handleClick} />
            default:
            return <FilterToday handleClick={handleClick} />

        }
    })()}

    </div>
)
}

export default IndexHome;




