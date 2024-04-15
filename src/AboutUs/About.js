import React from 'react'
import Startaproject from '../MyComponents/Startaproject';
import Aboutbanner from './Aboutbanner';
import Aboutthreediv from "./Aboutthreediv";
import Ourprocess from "./Ourprocess";
import Whyaccordian from "./whyaccordian";


function About() {
  return (
    <div>
      <Aboutbanner/>
      <Aboutthreediv/>
      <Ourprocess/>
      <Whyaccordian/>
      <Startaproject/>
    </div>
  )
}

export default About;
