// import Component from React 
import React, {Component} from 'react';
//Library API
import axios from "axios";
// //Import config URL API
import { BASE_URLAPI } from './URLAPI'

class CallApi extends Component {
  
//   constructor(props){
//     super(props)
//     this.state = {
//       dataAndon: []
//     }
//   }
// // komponen life cycle pada react 
//   componentDidMount() {
//     axios.get(`${BASE_URLAPI}/api/getandondata`)
//     .then(response => {
//       this.setState({ dataAndon: response.data.data })
//     })
//     .catch(error =>{
//       console.log('error', error)
//     })}
//   render() { 
//   return (
//     <div>
// { this.state.dataAndon.map((dataAndon, index) => (
//     console.log(dataAndon))
//    )}
//     </div>
// )}
}
export default CallApi;