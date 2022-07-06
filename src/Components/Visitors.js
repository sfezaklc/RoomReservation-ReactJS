import React, { useState, useContext, useEffect } from 'react'
import { Grid, TextField, Button } from '@mui/material';
import { ReservedDaysContext } from '../Contexts/ReservedDays';

const Visitors = ({ roomVisitors, setState }) => {
    const { visitors, setVisitors } = useContext(ReservedDaysContext)
    const [name, setName] = useState('')
    const [identity, setIdentity] = useState()
    const [tel, setTel] = useState()

    const handleClick = () => {
        visitors[roomVisitors].push({
            name: name,
            identity: identity,
            tel: tel
        })
        console.log("asdf", visitors[roomVisitors])
        setVisitors(visitors)
        console.log("v",visitors)
        localStorage.setItem(`${roomVisitors}Visitors`,JSON.stringify(visitors[roomVisitors]))
        setState(true)
        const element = document.getElementById('standard-basic');
        const element2 = document.getElementById('standard-basic2');
        const element3 = document.getElementById('standard-basic3');
        element.value = '';
        element2.value = '';
        element3.value = '';
        setName('')
        setIdentity('')
        setTel('')
    }

    useEffect(() => {
        console.log("visitor", visitors)
    }, [visitors])
    
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <TextField id="standard-basic" label="Ad Soyad" variant="standard" onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
                <TextField id="standard-basic2" label="Tc kimlik" variant="standard" onChange={(e) => setIdentity(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
                <TextField id="standard-basic3" label="telefon" variant="standard" onChange={(e) => setTel(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" disabled={!(name && identity && tel)} onClick={handleClick}>Kaydet</Button>
            </Grid>
        </Grid>
    )
}

export default Visitors