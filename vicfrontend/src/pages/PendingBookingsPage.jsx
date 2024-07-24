import React from 'react'
import DoctorsSideBar from '../components/DoctorsSideBar/DoctorsSidebar'
import PendingBookings from '..//components/PendingBookings/PendingBookings'

const PendingBookingsPage = () => {
  return (
    <div>
       <div>
      <DoctorsSideBar/>
    </div>
    <div style={{ paddingLeft: "17vw"}}>
      <PendingBookings />
    </div>
    </div>
   
      
    
  )
}

export default PendingBookingsPage
