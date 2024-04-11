import React from 'react'
import PackageBanner from '../component/PackagesContent/PackageBanner'
  import HomeData from '../component/PackagesContent/HomeData'
import LandPackage from '../component/PackagesContent/LandPackage'
//  import PackageHome from '../component/PackagesContent/PackageHome'

function page() {
  return (
    <div className='mt-20'>
     <PackageBanner/>
     {/* <PackageHome/> */}
     <HomeData/>
     <LandPackage/>
    </div>
  )
}

export default page