import React, { useState ,  useEffect, useMemo } from "react";
import axios from "axios";
// import { Button, Input, Table } from "antd"
import BASE_URLAPI from '../../config/URLAPI'
// import moment from "moment";
import { useTable } from 'react-table'
import './table.css'


const TbHomeNow = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    const loadData = async () => {
    setLoading(true)
    const response = await axios.get(`${BASE_URLAPI}/api/getdata_schedule_calibration`)
    setData(response.data.data)
    setLoading(false)
    }
    console.log("Data", data)

    useEffect(() => {
    loadData()
    }, [])

    
    const columns = useMemo(() => ([
        {
    Header: 'ID',
    Accessor: 'schedule_id',
    },
    {
    Header: 'Reg No',
    Accessor: 'reg_no',
    }
    ])) 

    const tableData = useMemo(() => [...data], [data])
    
    const tableInstance = useTable({
        columns: columns,
        data: tableData
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
        } = tableInstance

   return (

   // apply the table props
   <table {...getTableProps()}>
     <thead>
       {// Loop over the header rows

       headerGroups.map(headerGroup => (
         // Apply the header row props
         <tr {...headerGroup.getHeaderGroupProps()}>
           {// Loop over the headers in each row
           headerGroup.headers.map(column => (
             // Apply the header cell props
             <th {...column.getHeaderProps()}>
               {// Render the header
               column.render('Header')}
             </th>
           ))}
         </tr>
       ))}
     </thead>

     {/* Apply the table body props */}
     <tbody {...getTableBodyProps()}>
       {// Loop over the table rows
       rows.map(row => {
         // Prepare the row for display
         prepareRow(row)
         return (
           // Apply the row props
           <tr {...row.getRowProps()}>
             {// Loop over the rows cells
             row.cells.map(cell => {
               // Apply the cell props
               return (
                 <td {...cell.getCellProps()}>
                   {// Render the cell contents
                   cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
   </table>

 )

}


export default TbHomeNow















// const TbHomeNow = () =>  { 
// const [data, setData] = useState([])

// // const [dateTime, setDateTime] = useState(new Date ())
// const [loading, setLoading] = useState(false)
// const [searchText, setSearchText] =useState("")
// const [customData, setCustomData] =useState([])

// let filteredData = useState()

// useEffect(() => {
//     loadData()
    
// }, [])

// const loadData = async () => {
//     setLoading(true)
//     const response = await axios.get(`${BASE_URLAPI}/api/getdata_schedule_calibration`)
//     setData(response.data.data)
//     setLoading(false)
// }

// console.log("Data", data)


// const columns = [
//     {
//     title: 'next calibration',
//     dataIndex: 'next_calibration',
//     align: "center",
    
//     },
//     {
//     title: 'New Reg No',
//     dataIndex: 'new_reg_no',
//     align: "center",
//     ediatble:true
//     },
//     {
//     title: 'Date Calibration',
//     dataIndex: 'date_calibration',
//     align: "center",
//     ediatble:true
//     },
//     {
//     title: 'Device Name',
//     dataIndex: 'device_name',
//     align: "center",
//     ediatble:true
//     },
//     {
//     title: 'Machine No',
//     dataIndex: 'machine_no',
//     align: "center",
//     ediatble:true
//     },
//     {
//     title: 'Location',
//     dataIndex: 'location',
//     align: "center",
//     ediatble:true
//     },
//     {
//     title: 'Last Calibration',
//     dataIndex: 'last_calibration',
//     align: "center",
//     ediatble:true
//     },
//     {
//     title: 'Next Calibration',
//     dataIndex: 'next_calibration',
//     align: "center",
//     ediatble:true
//     },
//     {
//     title: 'Batch',
//     dataIndex: 'batch_calibration',
//     align: "center",
//     ediatble:true
//     },
//     {
//     title: 'Date Calibration',
//     dataIndex: 'date_calibration',
//     align: "center",
//     ediatble:true
//     }
// ]

// const handleSearch = (e) => {
//     setSearchText(e.target.value)
//     if(e.target.value === "") {
//         loadData()
//     }
// }



//     return(
//         <div>
//         <h3 className="container mt-3 text-center"> Trial data table from react table </h3>
//         <div className="mt-3">
//         <Input
//         placeholder="cari device"
//         onChange={handleSearch}
//         allowClear
//         type="text"
//         value={searchText}
//         />
//         <Button type="primary" > Today</Button>
//         <Button type="primary" > All Day</Button>
        
//         <Table
//             columns={columns}
//             dataSource={ customData }
//             bordered
//             loading={loading}
//         />
//         </div>
//         </div>
//     )

// }

// export default TbHomeNow