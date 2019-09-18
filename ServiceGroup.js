import React, { useState, useEffect } from 'react';
import CheckboxList from './CheckboxList';

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

<CheckboxList data={details} />



    </div>



  );



}


export default ServiceGroup;
