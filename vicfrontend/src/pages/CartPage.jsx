import React from 'react'
import EpharmacySidebar from '../components/E-Pharmacy/EpharmacySideBar/EpharmacySidebar'
import Cart from '../components/E-Pharmacy/Cart/Cart'
import { Box } from '@mui/material'

function CartPage() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
    {/* EpharmacySidebar on the left with margin-right */}
    <EpharmacySidebar sx={{display: 'flex', flexDirection: 'column', flex: '0 auto', marginRight: '32px'}} /> {/* Increase margin-right to create a larger gap */}

    <Box sx={{display: 'flex', flexDirection: 'column', flex: '1', overflowY: 'auto', marginTop: '10px', marginLeft: '32px'}}>
      <Cart />
    </Box>
</Box>
  )
}

export default CartPage
