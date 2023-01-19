// import Component from React 
import React, {Component} from 'react';
//Library API
import axios from "axios";
//Import config URL API
import { BASE_URLAPI } from '../config/URLAPI';

// ======================================================================================================

class TestAPI extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataAndon: []
    }
  }

// komponen life cycle pada react 
  componentDidMount() {
    axios.get(`${BASE_URLAPI}/api/getandondata`)
    .then(response => {
      this.setState({ dataAndon: response.data.data })
    })
    .catch(error =>{
      console.log('error', error)
    })
  }
  // 
   render() {  
  return (
    <div className="container">
      <h1> Table data from API AndonSystem</h1>
        <div className='row'>
          <div className="col">
            { this.state.dataAndon.map((dataAndon, index) => (
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id_machine</th>
                    <th scope="col">status_machine</th>
                    <th scope="col">start</th>
                    <th scope="col">stop</th>
                    <th scope="col">created_at</th>
                    <th scope="col">updated_at</th>
                    <th scope="col">machine_call</th>
                      </tr>
                        </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>{dataAndon.id_machine}</td>
                                  <td>{dataAndon.status_machine}</td>
                                  <td>{dataAndon.start_time_call}</td>
                                  <td>{dataAndon.end_time_call}</td>
                                  <td>{dataAndon.created_at}</td>
                                  <td>{dataAndon.updated_at}</td>
                                  <td>{dataAndon.machine_call}</td>
                                </tr>
                              </tbody>
                          </table>
))}
          </div>
        </div>
     </div>
  )
   }
  }

// ==============================================

export default TestAPI;