import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';




function Datatables2 () {

  const url2 = `http://10.202.100.84:3003/api/getdata_devicemaster_calibration`
    const getData = async () => {
    const datas = await axios.get(url2)
    return datas
    }

// hooks data api
   const [getData1,setGetdata1] = useState([])
   const [searchInput, setSearchInput] = useState("");

   
   useEffect (() => {
    getData().then((result) => {
    setGetdata1(result.data.data)
    })
     
     },[])
     console.log("result :", getData1)

     const columns = [
    {
        name: 'Reg-No',
        selector: row => row.reg_no,
    },
    {
        name: 'New-Reg_No',
        selector: row => row.new_reg_no,
    },
    {
        name: 'Device-Name',
        selector: row => row.device_name,
    },
    {
        name: 'Brand',
        selector: row => row.brand,
    },
    {
        name: 'Type-Model',
        selector: row => row.type_model,
    },
    
];

 // fungsi seacrh
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    };
   
if (searchInput.length > 0) {
    getData1.filter((a) => {
    return a.new_reg_no.match(searchInput);
});
}

  return (
    <div className='container'>
        <div>
            <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
        </div>
        
    <DataTable 
            columns={columns}
            data={getData1}
            pagination
            />
    </div>
    );

}

export default Datatables2;

