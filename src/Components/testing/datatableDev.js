
// Import Component React
import React, { useState, useEffect } from 'react';
//import axios module
import axios from 'axios'

//main fungsi
export default function DataTables() {
    
    

    // configurasi datatables
//     const dataTables = () => {
//     if (!$.fn.DataTable.isDataTable("#table")) {
//             $(document).ready(function () {
//             $('#table').DataTable({
//               pageLength: 30
//             });
// });}}

    //deklarasi state dan setstate ( getandon1 = state, setgetandon1 = setstate
     const [getData1,setGetdata1] = useState([])

    // call useEffect function untuk load data pertama kali web dimuat
     useEffect (() => {
      // Request data dari API
      const url = `http://10.202.10.42:3003/api/getdata_devicemaster_calibration`
    const getDataTable = async () => {
    const datas = await axios.get(url)
    return datas
    }
    // call fungsi get data api dan di run satu kali setiap reload page
     getDataTable().then((result) => {
     setGetdata1(result.data.data)
     })
     },
     []
     )
     console.log('Berhasil Tampil ', getData1 )
     // fungsi memuat isi data table dengan data dari api
     const deviceCalibration_data = () => {
      // dataTables()
    return getData1.map((item, index) => {
        return(
          <tr>
               <td className="text-xs font-weight-bold">{index +1}</td>
               <td className="text-xs font-weight-bold">{item.reg_no}</td>
               <td className="text-xs font-weight-bold">{item.new_reg_no}</td>
               <td className="text-xs font-weight-bold">{item.device_name}</td>
               <td className="text-xs font-weight-bold">{item.brand}</td>
               <td className="text-xs font-weight-bold">{item.type_model}</td>
        </tr>
        )
        
      })
     }

return (
 <div class="container-fluid py-4">
         <div class="table-responsive p-0 pb-2">
       <table id="table" className="table align-items-center justify-content-center mb-0">
            <thead>
               <tr>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">No</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Reg-No</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">New-Reg-No</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Device Name</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Brand</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Type/Model</th>
              </tr>
            </thead>   
           <tbody>
            {deviceCalibration_data()}
           </tbody>
       </table>
           </div>
           </div>
)
}

