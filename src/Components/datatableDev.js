
// Import Datatables Module
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
// import datatables button module
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";

// Import Component React
import React, { useState, useEffect } from 'react';
//import axios module
import axios from "axios";




//main fungsi
export default function DataTables() {

    // deklarasi state dan setstate ( getandon1 = state, setgetandon1 = setstate)
    const [getandon1, setGetandon1] = useState([]);
    const url2 = `http://10.202.10.42:3003/api/getdata_devicemaster_calibration`
    const url = `https://reqres.in/api/users?page=2`

// buat fungsi untuk get respon data api dari end point
    const getData_andon = () => {
            axios
            .get(url)
            .then(res => {
            setGetandon1(res.data.data);
            console.log(getandon1);
            })
        }

//buat fungsi untuk get respon data api dari end point
     const showTable = () => {
        try {
            $(document).ready( function () {
            $('#table_id').DataTable();
            } );
          return getandon1.map((item, index) => {
            return (
              // isi data sesuai format yang ada pada api
                <tr>
                <td className="text-xs font-weight-bold">{index +1}</td>
                <td className="text-xs font-weight-bold">{item.id}</td>
                <td className="text-xs font-weight-bold">{item.email}</td>
                <td className="text-xs font-weight-bold">{item.first_name}</td>
                <td className="text-xs font-weight-bold">{item.last_name}</td>
                </tr>
                );
          });
        } 
        catch (e) {
          alert(e.message);
        }
      };

      return (
        <div>
            <table id="table_id" class="display">
    <thead>
        <tr>
            <th>no</th>
            <th>id2</th>
            <th>email</th>
            <th>first name</th>
            <th>last name</th>
            
        </tr>
    </thead>
    <tbody>
        {}
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
        </tr>
    </tbody>
</table> 
        </div>
      )


// buat fungsi table untuk array data dari api dan dibuat column
    // const showTable = () => {
    //     try {
    //       return getandon1.map((data, index) => {
    //         return (
    //           // isi data sesuai format yang ada pada api
    //             <tr>
    //             <td className="text-xs font-weight-bold">{index +1}</td>
    //            <td className="text-xs font-weight-bold">{data.id}</td>
    //            <td className="text-xs font-weight-bold">{data.email}</td>
    //            <td className="text-xs font-weight-bold">{data.first_name}</td>
    //            <td className="text-xs font-weight-bold">{data.last_name}</td>
    //             </tr>
    //             );

    //       });
    //     } catch (error) {
    //       alert(error.message); 
    //     }
    //   }
// buat fungsi useEffect untuk load fungsi jika ada perubahan atau pertama kali load page
        useEffect (() => {
            // fungsi untuk ambil api
            getData_andon();
            // fungsi untuk merubah format array dari data yang didapat dari getData_andon
            showTable();

        // login dari datatable yang di load di useEffect
    //     if (!$.fn.DataTable.isDataTable("#myTable")) {
    //         $(document).ready(function () {
    //           setTimeout(function () {
    //             $("#table").DataTable({
    //               pagingType: "full_numbers",
    //               pageLength: 100,
    //               processing: true,
    //               dom: "Bfrtip",
    //               select: {
    //                 style: "single",
    //               },
    //               buttons: [
    //                 {
    //                   extend: "pageLength",
    //                   className: "btn btn-secondary bg-secondary",
    //                 },
    //                 {
    //                   extend: "copy",
    //                   className: "btn btn-secondary bg-secondary",
    //                 },
    //                 {
    //                   extend: "csv",
    //                   className: "btn btn-secondary bg-secondary",
    //                 },
    //                 {
    //                   extend: "print",
    //                   customize: function (win) {
    //                     $(win.document.body).css("font-size", "10pt");
    //                     $(win.document.body)
    //                       .find("table")
    //                       .addClass("compact")
    //                       .css("font-size", "inherit");
    //                   },
    //                   className: "btn btn-secondary bg-secondary",
    //                 },
    //               ],
      
    //               fnRowCallback: function (
    //                 nRow,
    //                 aData,
    //                 iDisplayIndex,
    //                 iDisplayIndexFull
    //               ) {
    //                 var index = iDisplayIndexFull + 1;
    //                 $("td:first", nRow).html(index);
    //                 return nRow;
    //               },
      
    //               lengthMenu: [
    //                 [10, 20, 30, 50, -1],
    //                 [10, 20, 30, 50, "All"],
    //               ],
    //               columnDefs: [
    //                 {
    //                   targets: 0,
    //                   render: function (data, type, row, meta) {
    //                     return type === "export" ? meta.row + 1 : data;
    //                   },
    //                 },
    //               ],
    //             });
    //           }, 1000);
    //         });
    //       }

    // })
    // return (

    //     <div class="container-fluid py-4">
    //         <div class="table-responsive p-0 pb-2">
    //     <table id="table" className="table align-items-center justify-content-center mb-0">
    //                 <thead>
    //                     <tr>
    //                     <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">No</th>
    //                     <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">id</th>
    //                     <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">email</th>
    //                     <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">first_name</th>
    //                     <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">last_name</th>
    //                         </tr>
    //                 </thead>
    //             <tbody>
    //         {showTable()}
    //             </tbody>
    //     </table>
    //         </div>
    //         </div>

        })
}
