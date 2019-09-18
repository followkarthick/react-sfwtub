import React, { useState, useEffect } from 'react';
import './style.css';

const API_URL = "https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/serviceGroup";
const ServiceGroup = () => {
  const [details, setDetails] = useState([]);
  async function getDataFromAPI() {
    const result = await fetch(API_URL);
    const data = await result.json();
    setDetails(details = data.service_groups);

  }

  useEffect(() => {
    getDataFromAPI();
  });

  return (
    <div >


      <div className="row" >
        {details.map(servG => {

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



    </div>



  );



}


export default ServiceGroup;
