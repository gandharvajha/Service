import React from 'react';
import { Button } from 'react-bootstrap';
import Typewriter from './Typewriter';
 
const Banner = () => {

  

  return (
    <div style={{ }}>
   <div className='bg-gradient-a banner-background'>
    <div className="banner   row py-5  pb-0 m-0  bg-dot ">
       <div className="banner-content mt-5  col-lg-6 py-5">
       <p className="banner-subtitle">Fastest And Most Lightweight WP Theme</p>
        <div className="title-1 display-6" >Create Amazing Business Websites</div>
        <p className="banner-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Morbi fringilla congue libero, ac malesuada vulputate pharetra.</p>
       <div>
        <Button className='mt-3'  >
         GET STARTED
        </Button>
        </div>
      </div>

      {/* <img src='./home/Dashboard.png' className='rounded-top-5 pt-4 w-75'  /> */}
    </div>
    </div>
    </div>
  );
};

export default Banner;