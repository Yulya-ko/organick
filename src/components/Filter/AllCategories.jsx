import { Box, Typography } from "@mui/material"
import Filter from "./Filter"
import * as fonts from "../../assets/fonts/fonts"


function AllCategories() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
        justifyContent: { xs: 'center', md: 'flex-end' },
        alignItems: 'center',
        gap: { xs: '20px', md: '30px' }
      }}
    >
      <Typography
        sx={{
          ...fonts.openSansBold25,
          fontSize: { xs: '20px', md: '25px' }
        }}
      >
        Categories:
      </Typography>

      {/* Замінили Typography на Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row', md: 'row' },
          gap: { xs: '5px', md: '20px' },
          cursor: "pointer"
        }}
      >
        {['All', 'Vegetables', 'Fruits', 'Nuts & Seeds', 'Dairy & Eggs'].map(category => (
          <Filter key={category} category={category} />
        ))}
      </Box>
    </Box>
  )
}


export default AllCategories