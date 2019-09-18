import React, { Component } from 'react';
import { render } from 'react-dom';
import ItemList from './ItemList';
import ServiceGroup from './ServiceGroup'
import './style.css';



class App extends Component {
 constructor(){
  super();
  this.state = {
        serviceGroupList: []
  };
}



  render() {
    const data = this.state.serviceGroupList;
console.log(data);
    return (
      
      <div id="mainContain">
        <h3> Service Groups</h3>   
        <input className="txtBox" type="text" placeholder=" Enter your search here" />    
        <ServiceGroup/>
         <ItemList/>

         
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
