import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Grid, Button } from '@mui/material'
import Calendar from '../MyCalendar';
import { useEffect } from 'react';

const One = () => {
  const [reservedDays, setReservedDays] = useState([]);

  useEffect(() => {
    const days = ['2022-06-17', '2022-06-18', '2022-06-19'];
    setReservedDays(days)
  }, [])

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
        <Calendar reservedDays={reservedDays}></Calendar>
      </Grid>
    </>
  )
}

export default One