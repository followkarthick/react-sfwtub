import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import CheckBox from './CheckBox'
import './style.css';
import axios from 'axios';


const API = "https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/serviceGroup"

class App extends Component {
 constructor(){
  super();
  this.state = {
        serviceGroupList: []
  };
}

componentDidMount() {
    axios.get(API)
      .then(res => {
        const serviceGroupList = res.data;
        this.setState({ serviceGroupList });
      })
  }


  render() {
    const data = this.state.serviceGroupList;
console.log(data);
    return (
      <div>
                
        <CheckBox/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
