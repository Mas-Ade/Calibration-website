import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Button, Input, Table, Modal, Space} from "antd"
import { Col, Container, Row } from 'react-bootstrap';
import BASE_URLAPI from '../../../config/URLAPI'
import moment from 'moment'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

function AllData (props) {

const [gridData, setGridData] = useState([])
const [loading, setLoading] = useState(false)
const [searchText, setSearchText] =useState("")

// const [tempData, setTempData] = useState([])
const [isEditing, setIsEditing] = useState(false)
const [editing, setEditing] = useState([])

// // search not global
// const [searchText2, setSearchText2] =useState("")
// const [searchedColumn, setSearchedColumn] = useState('');
// const searchInput = useRef(null);
// // search not global #2
// const [searchText3, setSearchText3] =useState("")
// const [searchedColumn2, setSearchedColumn2] = useState('');
// const searchInput2 = useRef(null);


// const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText2(selectedKeys[1]);
//     setSearchedColumn(dataIndex);
//   };

// const handleSearch2 = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText3(selectedKeys[1]);
//     setSearchedColumn2(dataIndex);
//   };

// const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText2('');
//   };

// const handleReset2 = (clearFilters2) => {
//     clearFilters2();
//     setSearchText3('');
//   };


  // const getColumnSearchProps = (dataIndex) => ({
  //   filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
  //     <div
  //       style={{
  //         padding: 8,
  //       }}
  //       onKeyDown={(e) => e.stopPropagation()}
  //     >
  //       <Input
  //         ref={searchInput}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[0]}
  //         onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{
  //           marginBottom: 8,
  //           display: 'block',
  //         }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Search
  //         </Button>
          
  //         <Button
  //           onClick={() => clearFilters && handleReset(clearFilters)}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Reset
  //         </Button>
    
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             close();
  //           }}
  //         >
  //           close
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: (filtered) => (
  //     <SearchOutlined
  //       style={{
  //         color: filtered ? '#1890ff' : undefined,
  //       }}
  //     />
  //   ),
  //   onFilter: (value, record) =>
  //     record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  //   onFilterDropdownOpenChange: (visible) => {
  //     if (visible) {
  //       setTimeout(() => searchInput.current?.select(), 100);
  //     }
  //   },
  //   render: (text) =>
  //     searchedColumn === dataIndex ? (
  //       <Highlighter
  //         highlightStyle={{
  //           backgroundColor: '#ffc069',
  //           padding: 0,
  //         }}
  //         searchWords={[searchText2]}
  //         autoEscape
  //         textToHighlight={text ? text.toString() : ''}
  //       />
  //     ) : (
  //       text
  //     ),
  // });

  // const getColumnSearchProps2 = (dataIndex) => ({
  //   filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
  //     <div
  //       style={{
  //         padding: 8,
  //       }}
  //       onKeyDown={(e) => e.stopPropagation()}
  //     >
  //       <Input
  //         ref={searchInput2}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[1]}
  //         onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
  //         onPressEnter={() => handleSearch2(selectedKeys, confirm, dataIndex)}
  //         style={{
  //           marginBottom: 8,
  //           display: 'block',
  //         }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch2(selectedKeys, confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Search
  //         </Button>
          
  //         <Button
  //           onClick={() => clearFilters && handleReset2(clearFilters)}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Reset
  //         </Button>
    
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             close();
  //           }}
  //         >
  //           close
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: (filtered) => (
  //     <SearchOutlined
  //       style={{
  //         color: filtered ? '#1890ff' : undefined,
  //       }}
  //     />
  //   ),
  //   onFilter: (value, record) =>
  //     record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  //   onFilterDropdownOpenChange: (visible) => {
  //     if (visible) {
  //       setTimeout(() => searchInput2.current?.select(), 100);
  //     }
  //   },
  //   render: (text) =>
  //     searchedColumn === dataIndex ? (
  //       <Highlighter
  //         highlightStyle={{
  //           backgroundColor: '#ffc069',
  //           padding: 0,
  //         }}
  //         searchWords={[searchText3]}
  //         autoEscape
  //         textToHighlight={text ? text.toString() : ''}
  //       />
  //     ) : (
  //       text
  //     ),
  // });


// let filteredData = useState()

useEffect(() => {
    loadData()
    // callDataTemp()
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

// const callDataTemp = async () => {
//     const response = await axios.get(`${BASE_URLAPI}/api/getdata_calibration_tempctrl_temprec`)
//     setTempData(response.data.data)
// }
    // # optional to show (for checking only)
    // console.log("gridData", gridData)
    // console.log("filter:", tempData )
    // console.log("editing: --> " , editing)
    
    const columns  = [
                {
                title: 'Reg_no',
                dataIndex: 'reg_no',
                align: 'center',
                filteredValue: [searchText],
                onFilter:(value,record) => {
                return String(record.reg_no)
                .toLowerCase()
                .includes(value.toLowerCase())  || 
                 String(record.new_reg_no)
                .toLowerCase()
                .includes(value.toLowerCase()) || 
                String(record.date_calibration)
                .toLowerCase()
                .includes(value.toLowerCase())
                }
                },

                {
                title: 'New Reg No',
                dataIndex: "new_reg_no",
                align: 'center',
                
                
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
                align: 'center',
                // ...getColumnSearchProps2('date_calibration'),
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
                render: (record) => (
                <Button onClick={() => {
                    onClickButton(record)
                }} >test button 
                </Button>),
                align: 'center'
                }
            ]
        
            const onClickButton = (record) => {
                setIsEditing(true)
                setEditing(record.reg_no)
            }

            const editingData = editing
            
    return (
            <div>
                
                {/* search button */}
                <Container className='container mb-3'>
                <Row>
                <Col>
                <Input.Search
                placeholder="cari device"
                onSearch={(value) => {
                setSearchText(value)
                }}
                onChange= {(e) => {
                setSearchText(e.target.value)
                }}
                allowClear
                type="text"
                />
                </Col>
                <Col xs={3}>
                <Button onClick={ () => props.handleClick('today')} type="primary" style={{}}> Currently</Button>
                <Button onClick={ () => props.handleClick('all')} className='ml-3' type="primary" style={{marginLeft:8}}> All Data</Button>
                </Col>
                </Row>
                </Container>

                {/* table */}
                <div key={gridData} className='container '>
                    <Table 
                        columns={columns}
                        dataSource={gridData}
                        bordered
                        loading={loading}
                        size= "small"
                    ></Table>
                    <Modal 
                        title="test tampil data : "
                        open={isEditing}
                        okText='Download'
                        onCancel={() => {
                        setIsEditing(false)
                        }}
                        onOk= {()=> {
                        setIsEditing(false)
                        }}
                    >
                    <h3>Data : {editingData}</h3>
                    </Modal>

                </div>

            </div>
    );

}

export default AllData;




