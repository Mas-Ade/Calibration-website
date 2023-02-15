import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Input, Table } from "antd"
import { Col, Container, Row } from 'react-bootstrap';
import BASE_URLAPI from '../../config/URLAPI'

function Datatables2 () {

const [gridData, setGridData] = useState([])
const [loading, setLoading] = useState(false)
const [searchText, setSearchText] =useState("")
let filteredData = useState()

useEffect(() => {
    loadData()
}, [])


const loadData = async () => {
    setLoading(true)
    const response = await axios.get( `${BASE_URLAPI}/api/getdata_devicemaster_calibration`)
    setGridData(response.data.data)
    setLoading(false)
}

console.log("gridData", gridData)

const columns = [
    {
    title: 'Reg No',
    dataIndex: 'reg_no'
    },
    {
    title: 'New Reg No',
    dataIndex: 'new_reg_no',
    align: "center",
    ediatble:true
    },
    {
    title: 'Device Name',
    dataIndex: 'device_name',
    align: "center",
    ediatble:true
    },
    {
    title: 'Brand',
    dataIndex: 'brand',
    align: "center",
    ediatble:true
    },
    {
    title: 'Type/Model',
    dataIndex: 'type_model',
    align: "center",
    ediatble:true
    },
    {
    title: 'Capacity',
    dataIndex: 'capacity',
    align: "center",
    ediatble:true
    },
    {
    title: 'Resolution',
    dataIndex: 'resolution',
    align: "center",
    ediatble:true
    },
    {
    title: 'Status Calibration',
    dataIndex: 'status_calibration',
    align: "center",
    ediatble:true
    },
    {
    title: 'Priod Calibration',
    dataIndex: 'priod_calibration',
    align: "center",
    ediatble:true
    },
    {
    title: 'Receive Date',
    dataIndex: 'receive_date',
    align: "center",
    ediatble:true
    },
    {
    title: 'Location',
    dataIndex: 'location',
    align: "center",
    ediatble:true
    },
    {
    title: 'Machine No',
    dataIndex: 'machine_no',
    align: "center",
    ediatble:true
    },
    {
    title: 'Remark',
    dataIndex: 'remark',
    align: "center",
    ediatble:true
    },
    {
    title: 'Update Staff',
    dataIndex: 'updated_staff',
    align: "center",
    ediatble:true
    }
]

const handleSearch = (e) => {
    setSearchText(e.target.value)
    if(e.target.value === "") {
        loadData()
    }
}

const globalSearch = () => {
    filteredData = gridData.filter((value) => {
        return(
            value.reg_no.toLowerCase().includes(searchText.toLowerCase()) ||
            
            value.device_name.toLowerCase().includes(searchText.toLowerCase()) 
            // value.brand.toLowerCase().includes(searchText.toLowerCase())
        )
    })
    setGridData(filteredData)
}

    return (
    <div>
        <h3 className="container mt-3 mb-3 text-center fw-bold"> Data Master Calibration </h3>
        {/* search button */}
        <Container className='container mb-3'>
        <Row>
        <Col>
        <Input
        placeholder="cari device"
        onChange={handleSearch}
        allowClear
        type="text"
        value={searchText}
        />
        </Col>
        <Col xs={1}>
        <Button type="primary" onClick={globalSearch}> Search</Button>
        </Col>
        </Row>
        </Container>

        {/* table */}
        <Table
            columns={columns}
            dataSource={ gridData }
            bordered
            loading={loading}
        />

        </div>
    );
    

}

export default Datatables2;




