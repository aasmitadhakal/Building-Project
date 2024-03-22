import React from 'react'
import AboutBanner from '../component/aboutcontent2/AboutBanner';
import Aboutus from '../component/Aboutus';
import MissionPart from '../component/aboutcontent2/MissionPart';
import WhychooseUs from '../component/aboutcontent2/WhychooseUs';

function page() {
  return (
    <div className='mt-24'>
     <AboutBanner/>
     <Aboutus/>
     <MissionPart/>
    <WhychooseUs/>
    
    </div>
  )
}

export default page