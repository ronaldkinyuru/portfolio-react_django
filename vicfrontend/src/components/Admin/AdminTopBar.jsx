import React from 'react'
import { Box } from '@mui/system'
import { Business, PeopleAlt,} from '@mui/icons-material'
import DonutSmallSharpIcon from '@mui/icons-material/DonutSmallSharp';



const AdminTopBar = () => {
  return (
  <Box sx={{ display: "flex", marginTop: '20px'}}>
    <Box sx={{display: 'flex', backgroundColor:"#FFFF", height: '80px', borderRadius: '10px'}}>
        <p style={{ marginLeft: "20px"}}> ACTIVE CLINICS</p>
        <Box sx={{ marginTop: "20px", marginLeft:"150px",marginRight:"20px"}}>
        <Business/>
        </Box>
    </Box>
    <Box sx={{ display:"flex", backgroundColor: "#FFFF", marginLeft: '32px', height: '80px', borderRadius: '10px'}}>
        <p style={{ marginLeft: "20px"}}> TOTAL USERS</p>
        <Box sx={{ marginTop: "20px", marginLeft:"150px", marginRight:"20px"}}>
            <PeopleAlt/>
        </Box>
    </Box>
    <Box sx={{ display:"flex", backgroundColor: "#FFFF", marginLeft: '32px', height: '80px', borderRadius: '10px'}}>
        <p style={{ marginLeft: "20px"}}> TOTAL BOOKINGS</p>
        <Box sx={{ marginTop: "20px", marginLeft:"150px", marginRight:"20px"}}>
            <DonutSmallSharpIcon/>
        </Box>
    </Box>
  </Box>
  )
}

export default AdminTopBar
