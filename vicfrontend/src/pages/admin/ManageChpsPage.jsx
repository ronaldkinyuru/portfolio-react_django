import React from 'react'
import ManageChps from '../../components/Admin/ManageChps'
import AdminSidebar from '../../components/Admin/AdminSidebar'

const ManageChpsPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>
        <AdminSidebar/>
      </div>
      <div style={{paddingLeft: '1vw'}}>
        <ManageChps/>
      </div>
    </div>
  )
}

export default ManageChpsPage
