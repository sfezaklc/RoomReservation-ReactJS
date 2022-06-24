import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Grid, Button } from '@mui/material'
import Calendar from '../MyCalendar';
import Sidebar from '../Sidebar';
const Three = () => {
  const CreateReservation = () => {

  }
  return (
    <>
      <Grid sx={{ marginTop: 5 }} xs={12}>
        <Button variant="outlined" onClick={CreateReservation}>
          <AddIcon></AddIcon>Yeni rezervasyon
        </Button>
      </Grid>
      <Grid sx={{ marginTop: 5 }} xs={12}>
        <Calendar></Calendar>
      </Grid>
    </>
  )
}

export default Three