


import React, { useState ,  useEffect } from "react";
import axios from "axios";
import { Button, Input, Table } from "antd"
import BASE_URLAPI from '../../config/URLAPI'
import moment from "moment";

const TbHomeNow = () =>  {
const [data, setData] = useState([])

// const [dateTime, setDateTime] = useState(new Date ())
const [loading, setLoading] = useState(false)
const [searchText, setSearchText] =useState("")
const [customData, setCustomData] =useState([])

let filteredData = useState()

useEffect(() => {
    loadData()
    changeDate()
}, [])

const loadData = async () => {
    setLoading(true)
    const response = await axios.get(`${BASE_URLAPI}/api/getdata_schedule_calibration`)
    setData(response.data.data)
    setLoading(false)
}

console.log("Data", data)


const columns = [
    {
    title: 'next calibration',
    dataIndex: 'next_calibration',
    align: "center",
    
    },
    // {
    // title: 'New Reg No',
    // dataIndex: 'new_reg_no',
    // align: "center",
    // ediatble:true
    // },
    // {
    // title: 'Date Calibration',
    // dataIndex: 'date_calibration',
    // align: "center",
    // ediatble:true
    // },
    // {
    // title: 'Device Name',
    // dataIndex: 'device_name',
    // align: "center",
    // ediatble:true
    // },
    // {
    // title: 'Machine No',
    // dataIndex: 'machine_no',
    // align: "center",
    // ediatble:true
    // },
    // {
    // title: 'Location',
    // dataIndex: 'location',
    // align: "center",
    // ediatble:true
    // },
    // {
    // title: 'Last Calibration',
    // dataIndex: 'last_calibration',
    // align: "center",
    // ediatble:true
    // },
    // {
    // title: 'Next Calibration',
    // dataIndex: 'next_calibration',
    // align: "center",
    // ediatble:true
    // },
    // {
    // title: 'Batch',
    // dataIndex: 'batch_calibration',
    // align: "center",
    // ediatble:true
    // },
    // {
    // title: 'Date Calibration',
    // dataIndex: 'date_calibration',
    // align: "center",
    // ediatble:true
    // }
]

const handleSearch = (e) => {
    setSearchText(e.target.value)
    if(e.target.value === "") {
        loadData()
    }
}

const changeDate = () => {
    const formatTanggal = data.map((item) => {
        return(
            moment(item.next_calibration).format("YYYY-MM-DD")
        )
    })

    setCustomData(formatTanggal)
}
console.log("custom data", customData)

    return(
        <div>
        <h3 className="container mt-3 text-center"> Trial data table from react table </h3>
        <div className="mt-3">
        <Input
        placeholder="cari device"
        onChange={handleSearch}
        allowClear
        type="text"
        value={searchText}
        />
        <Button type="primary" > Today</Button>
        <Button type="primary" > All Day</Button>
        
        <Table
            columns={columns}
            dataSource={ customData }
            bordered
            loading={loading}
        />
        </div>
        </div>
    )

}

export default TbHomeNow