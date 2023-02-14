import { Box, CircularProgress } from '@mui/material'
import { collors } from '../../../constants/color'

const Progress = ({vote_average}) => {
  return (
    <div className='progress' style={{position: "relative"}}>
      <Box sx={{ position: 'absolute', left: "-3px", top: '-3px' , margin: "1px"}}>
        <CircularProgress variant="determinate" value={vote_average} sx={{color: collors.progress}}/>
      </Box>
        <span style={{position: 'absolute', fontSize: "13px" , color: collors.white, fontWeight: 'bold'}}>{vote_average}<sup>%</sup></span>
    </div>
  )
}

export default Progress