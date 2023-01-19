
// // Import Datatables Module
// import "jquery/dist/jquery.min.js";
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import "datatables.net-buttons/js/dataTables.buttons.js";
// // import datatables button module
// import "datatables.net-buttons/js/buttons.colVis.js";
// import "datatables.net-buttons/js/buttons.flash.js";
// import "datatables.net-buttons/js/buttons.html5.js";
// import "datatables.net-buttons/js/buttons.print.js";
// import $ from "jquery";
import ReactPaginate from "react-paginate";
// Import Component React
import React, { useState, useEffect } from 'react';
//import axios module
import axios from 'axios'


//main fungsi
export default function ReactPagi() {
    // Request data dari API
    const url = `http://10.202.10.42:3003/api/getdata_devicemaster_calibration`
    const getData = async () => {
    const datas = await axios.get(url)
    return datas
    }

    //deklarasi state dan setstate ( getandon1 = state, setgetandon1 = setstate
     const [getData1,setGetdata1] = useState([])
     const [pageNumber, setPageNumber] = useState(0);

     useEffect (() => {
     getData().then((result) => {
     setGetdata1(result.data.data)
     })
     },[])

     console.log('Berhasil Tampil ', getData1 )

     const usersPerPage = 20;
     const pagesVisited = pageNumber * usersPerPage;

     const displayUsers = getData1
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item, index) => {
      return (
       <tr>
               <td className="text-xs font-weight-bold">{index +1}</td>
               <td className="text-xs font-weight-bold">{item.reg_no}</td>
               <td className="text-xs font-weight-bold">{item.new_reg_no}</td>
               <td className="text-xs font-weight-bold">{item.device_name}</td>
               <td className="text-xs font-weight-bold">{item.brand}</td>
               <td className="text-xs font-weight-bold">{item.type_model}</td>
        </tr>
      );
    });

    const pageCount = Math.ceil(getData1.length / usersPerPage);

    const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


    //call useEffect function untuk load data pertama kali web dimuat
     

    return (
 <div class="container-fluid py-4">
         <div class="table-responsive p-0 pb-2">
       <table id="table1" className="table align-items-center justify-content-center mb-0">
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
           {displayUsers}
           <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
           </tbody>
       </table>
           </div>
           </div>
)
}



//      // fungsi memuat isi data table dengan data dari api
//      const deviceCalibration_data = () => {
//     return getData1.map((item, index) => {
//         return(
//           <tr>
//                <td className="text-xs font-weight-bold">{index +1}</td>
//                <td className="text-xs font-weight-bold">{item.reg_no}</td>
//                <td className="text-xs font-weight-bold">{item.new_reg_no}</td>
//                <td className="text-xs font-weight-bold">{item.device_name}</td>
//                <td className="text-xs font-weight-bold">{item.brand}</td>
//                <td className="text-xs font-weight-bold">{item.type_model}</td>
//         </tr>
//         )
        
//       })
//      }

//       // configurasi datatables
//     const dataTables = () => {
//     if (!$.fn.DataTable.isDataTable("#table1")) {
//             $(document).ready(function () {
//             $('#table1').DataTable({
//               pageLength: 30,
//               "bDestroy": true
//             });
//     });}}   

     
// return (
  
//  <div class="container-fluid py-4">
//          <div class="table-responsive p-0 pb-2">
//        <table id="table1" className="table align-items-center justify-content-center mb-0">
//             <thead>
//                <tr>
//                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">No</th>
//                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Reg-No</th>
//                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">New-Reg-No</th>
//                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Device Name</th>
//                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Brand</th>
//                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Type/Model</th>
//               </tr>
//             </thead>   
//            <tbody>
//             {deviceCalibration_data()}
//            </tbody>
//        </table>
//            </div>
//            </div>
// )
// }

