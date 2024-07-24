import React from 'react'
import CreateChp from '../../components/Admin/CreateChp'
import AdminSidebar from '../../components/Admin/AdminSidebar'

const CreateChpPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>
      <AdminSidebar/>
      </div>
      <div style={{paddingLeft: '20vw'}}>
        <CreateChp/>
      </div>
    </div>
  )
}

export default CreateChpPage
