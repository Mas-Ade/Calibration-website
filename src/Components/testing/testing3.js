import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Input, Table } from "antd"
import { Col, Container, Row } from 'react-bootstrap';
import BASE_URLAPI from '../../config/URLAPI'
import moment from 'moment'

function Testing3 (props) {

const [gridData, setGridData] = useState([])
const [loading, setLoading] = useState(false)
const [searchText, setSearchText] =useState("")
// let filteredData = useState()

useEffect(() => {
    loadData()
}, [])

const loadData = async () => {
    setLoading(true)
    const response = await axios.get( `${BASE_URLAPI}/api/getdata_schedule_calibration`)
    setLoading(false)
    setGridData(
        response.data.data.map(row => ({
            schedule_id: row.schedule_id,
            reg_no: row.reg_no,
            new_reg_no: row.new_reg_no,
            device_name: row.device_name,
            machine_no: row.machine_no,
            location: row.location,
            date_calibration: moment(row.date_calibration).format("YYYY-MM-DD"),
            last_calibration: moment(row.last_calibration).format("YYYY-MM-DD"),
            next_calibration: moment(row.next_calibration).format("YYYY-MM-DD"),

        })))
}

    console.log("gridData", gridData)

    // downloadData = () => {
	// 	fetch('http://localhost:8080/employees/download')
	// 		.then(response => {
	// 			response.blob().then(blob => {
	// 				let url = window.URL.createObjectURL(blob);
	// 				let a = document.createElement('a');
	// 				a.href = url;
	// 				a.download = 'employees.json';
	// 				a.click();
	// 			});
	// 			//window.location.href = response.url;
	// 	});
	// }

    return (
    <div>
        <h3 className="container mt-3 mb-3 text-center fw-bold"> Unit Testing 3 </h3>
        {/* search button */}
        <Container className='container mb-3'>
        <Row>
        <Col>
        <Input.Search
        placeholder="cari device"
        onSearch={(value) => {
        setSearchText(value)
        }}
        allowClear
        type="text"
        />
        </Col>
        <Col xs={1}>
        <Button onClick={ () => props.handleClick('today')} type="primary"> Today</Button>
        </Col>
        <Col xs={1}>
        <Button onClick={ () => props.handleClick('all')} className='ml-3' type="primary"> All Data</Button>
        </Col>
        </Row>
        </Container>

        {/* table */}
        <div className='container '>
        <Table 
        columns = {[
                {
                title: 'ID',
                dataIndex: 'schedule_id',
                align: 'center',
                filteredValue: [searchText],
                onFilter:(value,record) => {
                return String(record.reg_no)
                .toLowerCase()
                .includes(value.toLowerCase()) || 
                String(record.new_reg_no)
                .toLowerCase()
                .includes(value.toLowerCase()) || 
                String(record.date_calibration)
                .toLowerCase()
                .includes(value.toLowerCase())
                },
                },

                {
                title: 'Reg No',
                dataIndex: "reg_no",
                align: 'center',
                width: 110,
                 
                },

                {
                title: 'New Reg No',
                dataIndex: "new_reg_no",
                align: 'center'
                },

                {
                title: 'Device Name',
                dataIndex: 'device_name',
                align: 'center'
                },

                {
                title: 'Machine No',
                dataIndex: 'machine_no',
                align: 'center'
                },

                {
                title: 'Location',
                dataIndex: 'location',
                align: 'center'
                },

                {
                title: 'Date Calibration',
                dataIndex: 'date_calibration',
                align: 'center'
                },

                {
                title: 'Last Calibration',
                dataIndex: 'last_calibration',
                align: 'center'
                },
                
                {
                title: 'Next Calibration',
                dataIndex: 'next_calibration',
                align: 'center'
                },
                {
                title: 'Action',
                key:'action',
                render: (text, record) => (
                <button onClick={()=> console.log(record)}>
                {"Button Text"}
                </button>),
                align: 'center'
                }
                
            ]
            }

            dataSource={gridData}
            bordered
            loading={loading}
            size= "small"
        />

        </div>

        </div>
    );
    

}

export default Testing3;




