import React from 'react';
import Servicebanner from './Servicebanner';
import GetStarted from "../MyComponents/GetStarted";
import Startaproject from "../MyComponents/Startaproject";
import Customer from "../MyComponents/Customer";
import Clients from "../MyComponents/Clients";

function Service() {
  return (
    <div>
      <Servicebanner/>
      <GetStarted/>
      <Clients/>
      <Startaproject/>
    </div>
  )
}

export default Service;
