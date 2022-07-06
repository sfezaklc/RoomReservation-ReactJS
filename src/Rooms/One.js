import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Grid, Button } from '@mui/material'
import Calendar from '../Components/MyCalendar';
import { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import Visitors from '../Components/Visitors';
import TableComponent from '../Components/Table'
const One = () => {
  const grid = useRef();
  const classes = useStyles();

  const [btn, setBtn] = useState(false)
  const CreateReservation = () => {
    setBtn(true)
    let gridc = grid.current;
    //gridc.className.remote('classes.disable')
    //gridc.className.add('classes.enable')
    //gridc.className.contains('disable', 'enable')
  }
  const [state, setState] = useState(false)
  return (
    <>
      <Grid container>
        <Grid sx={{ marginTop: 5 }} xs={12}>
          <Button variant="outlined" onClick={CreateReservation}>
            <AddIcon></AddIcon>Yeni rezervasyon
          </Button>
        </Grid>
        <Grid /*className={btn ? classes.enable : classes.disable}*/ sx={{ width: '100%' }}>
          <Grid xs={12} sx={{marginTop: 5}}>
            <Visitors roomVisitors={'roomOne'} setState={setState}></Visitors>
          </Grid>
          <Grid sx={{ marginTop: 5 }} xs={12} ref={grid} /*className={state ? classes.enable : classes.disable}*/>
            <Calendar room={'roomOne'}></Calendar>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: 5, width: '100%' }}>
          <TableComponent room={'roomOne'}></TableComponent>
        </Grid>
      </Grid>
    </>
  )
}
const useStyles = makeStyles({
  disable: {
    pointerEvents: 'none',
    opacity: 0.7
  },
  enable: {
    pointerEvents: 'cursor',
    opacity: 1
  }
});

export default One