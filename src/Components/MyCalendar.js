import './Calendar.css'
import React from 'react'
import { useEffect, useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import { ReservedDaysContext } from '../Contexts/ReservedDays';

const MyCalendar = ({ room }) => {
  const [value, onChange] = useState(new Date());
  const [startValue, setStartValue] = useState(null)
  const [endValue, setEndValue] = useState(null)
  const [startValueText, setStartValueText] = useState('')
  const [endValueText, setEndValueText] = useState('')

  const { reservedDays, setReservedDays } = useContext(ReservedDaysContext)
  const { state, setState } = useContext(ReservedDaysContext)
  const { visitors, setVisitors } = useContext(ReservedDaysContext)

  const HandleDayChange = (e) => {
    if (!startValue) {
      setStartValue(e)
      setStartValueText(dayjs(e).format('YYYY-MM-DD'))
      //textInputStart.current.value = startValueText
    }
    else if (!endValue) {
      setEndValue(e)
      setEndValueText(dayjs(e).format('YYYY-MM-DD'))
    }
    else {
      alert("hata")
    }
  }
  const deleteStartDate = () => {
    setStartValue(null)
    setStartValueText('')
  }
  const deleteEndDate = () => {
    setEndValue(null)
    setEndValueText('')
  }
 const getDateArray = (startValue, endValue) => {
  let day = dayjs(endValue).subtract(1,'day')
  //let closeDay = new Date(endValue-1)
  let currentDate = dayjs(startValue).subtract(1, 'day');
  const ranges = []
  while (currentDate.isBefore(day)) {
    currentDate = currentDate.add(1, 'day');  
    ranges.push(dayjs(currentDate).format('YYYY-MM-DD'));
  }
  return ranges
 }
  const handleClick = () => {
    const date1 = dayjs(endValueText)
    console.log("difference dayjs",date1.diff(startValueText, 'day'))
    const array = getDateArray(startValue,endValue);
    array.map((item) =>{
      reservedDays[room].push(item)
    })
    //reservedDays[room].push(startValueText)
    setReservedDays(reservedDays)
    localStorage.setItem(`${room}`, JSON.stringify(reservedDays[room]))
    const visitor = visitors[room][Object.keys(visitors[room]).length - 1]
    state[room].push({
      visitor: visitor,
      start: startValueText,
      end: endValueText
    })
    setState(state)
    localStorage.setItem(`state${room}`, JSON.stringify(state[room]))
    setStartValue("")
    setEndValue("")
    setStartValueText("")
    setEndValueText("")
  }


  return (
    <div>
      <Grid display='flex' alignItems='center'>
        Başlangıç Tarihi:<FormControl sx={{ m: 1, width: 220 }}>
          <InputLabel htmlFor="outlined-adornment-start">Startdate</InputLabel>
          <OutlinedInput
            value={startValueText}
            id="outlined-adornment-start"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={deleteStartDate}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        Bitiş Tarihi:<FormControl sx={{ m: 1, width: 220 }}>
          <InputLabel htmlFor="outlined-adornment-end">Enddate</InputLabel>
          <OutlinedInput value={endValueText}
            id="outlined-adornment-end"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={deleteEndDate}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" disabled={!(startValue && endValue)} onClick={handleClick}>
          Onayla
        </Button>
      </Grid>
      <Calendar onChange={onChange} value={value} onClickDay={HandleDayChange}
        tileDisabled={(date) => {
          return reservedDays[room].some(reservedDay => {
            //console.log(reservedDay)
            return dayjs(date.date).isSame(reservedDay)
          })
        }}
      />
    </div>
  )
}

/*MyCalendar.defaultProps = {
  reservedDays: []
}*/

export default MyCalendar