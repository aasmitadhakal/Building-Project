import React from 'react'
import MaintenanceBanner from '../component/Maintenance/MaintenanceBanner';
import MaintenanceForm from '../component/Maintenance/MaintenanceForm';
function page() {
  return (
    <div className='my-20'>
        <MaintenanceBanner/>
        <MaintenanceForm/>

    </div>
  )
}

export default page