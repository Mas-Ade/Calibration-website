import React, {useState, useEffect} from 'react';
import Testing2 from '../../../Components/testing/testing2';
import Testing3 from '../../../Components/testing/testing3';

function IndexHome () {

const [todayData, setTodayData] = useState("today")
// const [allData, setAllData] =useState("all")

const handleClick = (table) => {
    setTodayData(table)
}

return(
    <div className='App'>
    <h1 className='container'> Halaman index home</h1>

    {(() => {
        switch(todayData) {
            case 'today' :
            return <Testing2 handleClick={handleClick} />
            case 'all' :
            return <Testing3 handleClick={handleClick} />
            default:
            return <Testing3 handleClick={handleClick} />

        }
    })()}

    </div>
)
}

export default IndexHome;




