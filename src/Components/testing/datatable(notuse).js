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
	
   useEffect (() => {
    getData().then((result) => {
    setGetdata1(result.data.data)
    console.log("result :", getData1)
    })
        
     },[])

     // define coloums
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
    {
        name: 'capacity',
        selector: row => row.type_model,
    },
    {
        name: 'device_standard',
        selector: row => row.type_model,
    },
    {
        name: 'status_calibration',
        selector: row => row.type_model,
    },
    {
        name: 'priod_calibration',
        selector: row => row.type_model,
    },
    {
        name: 'receive_date',
        selector: row => row.type_model,
    },
    {
        name: 'location',
        selector: row => row.type_model,
    },
    {
        name: 'machine_no',
        selector: row => row.type_model,
    },
    {
        name: 'remark',
        selector: row => row.type_model,
    },
    {
        name: 'Type-Model',
        selector: row => row.type_model,
    },
    ];

  return (
<div className='container'>
    <div>
    <h1 className='mt-2 mb-3'>Master Calibration Data</h1>
    
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




