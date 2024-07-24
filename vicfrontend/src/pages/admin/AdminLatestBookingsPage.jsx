import React from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminsLatestBookings from '../../components/Admin/AdminsLatestBookings'


const AdminLatestBookingsPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>
        <AdminSidebar/>
      </div>
      <div style={{paddingLeft: '1vw'}}>
        <AdminsLatestBookings/>
      </div>
    </div>
  )
}

export default AdminLatestBookingsPage
