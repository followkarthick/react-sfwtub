import React, { useState, useEffect } from 'react';
import './style.css';


const CheckboxList = (props) =>{
console.log(props.data);
  return(
    
<div className="row" >
        {props.data.map(servG => {

          return (
            <div className="column">
            <div className="card">

            <header className="card-header">
              <h4>
                <label>
                  <input type="checkbox"  />
                  {servG.service_group_name }
                </label>
              </h4>
            </header>

              {servG.services.map(service => {
                return (
                      <div>        
                      <label>
                        <input type="checkbox" />
                        {service.service_name}
                      </label>
                         </div>            )
              })}
              </div>
            </div>
          )
        })}
      </div>

  )
}

export default CheckboxList;