import * as React from 'react';
import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ReservedDaysContext } from '../Contexts/ReservedDays';


export default function TableComponent({ room }) {

    const { state, setState } = useContext(ReservedDaysContext)
    console.log("asdfghj", state[room]) 
    return (
        <TableContainer component={Paper} sx={{ width: '90%' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ad Soyad</TableCell>
                        <TableCell>Telefon</TableCell>
                        <TableCell>Tc kimlik</TableCell>
                        <TableCell>Giriş Tarihi</TableCell>
                        <TableCell>Çıkış Tarihi</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { state[room].map((item,index) => (
                        <TableRow
                            key={item.visitor.identity}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{item.visitor.name}</TableCell>
                            <TableCell>{item.visitor.identity}</TableCell>
                            <TableCell>{item.visitor.tel}</TableCell>
                            <TableCell>{item.start}</TableCell>
                            <TableCell>{item.end}</TableCell> 
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
