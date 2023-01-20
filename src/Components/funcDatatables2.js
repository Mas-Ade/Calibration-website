import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';


function Datatables2 () {

  const url2 = `http://10.202.100.84:3003/api/getdata_devicemaster_calibration`
    const getData = async () => {
    const datas = await axios.get(url2)
    return datas
    }
   const [getData1,setGetdata1] = useState([])
   
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

  return (
    <div className='container'>
            <DataTable
            
                columns={columns}
                data={getData1}
                pagination
  
            />
    </div>
    );

}

export default Datatables2;