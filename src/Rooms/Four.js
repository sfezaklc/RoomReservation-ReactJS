import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Grid, Button } from '@mui/material'
import Calendar from '../Components/MyCalendar';

const Four = () => {
  const [btn, setBtn] = useState(false)

  const CreateReservation = () => {
    setBtn(true)
  }

  return (
    <>
      <Grid sx={{ marginTop: 5 }} xs={12}>
        <Button variant="outlined" onClick={CreateReservation}>
          <AddIcon></AddIcon>Yeni rezervasyon
        </Button>
      </Grid>
      <Grid sx={{ marginTop: 5 }} xs={12}>
        <Calendar room={'roomFour'}></Calendar>
      </Grid>
    </>
  )
}

export default Four