import React, { Component } from 'react';
import { render } from 'react-dom';
import ItemList from './ItemList';
import ServiceGroup from './ServiceGroup'
import './style.css';



class App extends Component {
  constructor() {
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
        <div>
          <div class="checkbox-list">
            <label><input name="select-all" type="checkbox" value="ALL" />ALL</label>
            <input className="txtBox" type="text" placeholder=" Enter your search here" />
          </div>
        </div>
          
          <ServiceGroup />
          <ItemList />


        </div>
        );
      }
    }
    
render(<App />, document.getElementById('root'));
