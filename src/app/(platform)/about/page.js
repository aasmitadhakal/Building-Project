import React from 'react'
import AboutBanner from '../component/aboutcontent2/AboutBanner';
import Aboutus from '../component/Aboutus';
import MissionPart from '../component/aboutcontent2/MissionPart';
import WhychooseUs from '../component/aboutcontent2/WhychooseUs';

function Page() {
  return (
    <div className='mt-20'>
     <AboutBanner/>
     <Aboutus/>
     <MissionPart/>
    <WhychooseUs/>
    
    </div>
  )
}

export default Page