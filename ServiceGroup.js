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
            <div className="column boxWidth boxColor1" >


              <h4>
                <label>
                  <input type="checkbox"  />
                  {servG.service_group_name }
                </label>
              </h4>


              {servG.services.map(service => {
                return (

                  
                    <h6>
                      <label>
                        <input type="checkbox" />
                        {service.service_name}
                      </label>
                    </h6>

                 

                )
              })}
            </div>
          )
        })}
      </div>



    </div>



  );



}


export default ServiceGroup;
