import './Calendar.css'
import React from 'react'
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import dayjs from 'dayjs';

const MyCalendar = ({reservedDays}) => {
  const [value, onChange] = useState(new Date());
  const [startValue, setStartValue] = useState(null)
  const [endValue, setEndValue] = useState(null)
  const [startValueText, setStartValueText] = useState('')
  const [endValueText, setEndValueText] = useState('')

  const HandleDayChange = (e) => {
    if (!startValue) {
      setStartValue(e)
      setStartValueText(dayjs(e).format('YYYY-MM-DD'))
      console.log(typeof (startValueText))
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
  const deleteStartDate = () =>{
    setStartValue(null)
    setStartValueText('')
  }
  const deleteEndDate = () =>{
    setEndValue(null)
    setEndValueText('')
  }

  return (
    <div>
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
      <Calendar onChange={onChange} value={value} onClickDay={HandleDayChange}
      tileDisabled={(date) => {
        return reservedDays.some(reservedDay => {
          return dayjs(date.date).isSame(reservedDay)
        })
      }}
       />
    </div>
  )
}

MyCalendar.defaultProps = {
  reservedDays: []
}

export default MyCalendar