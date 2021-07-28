import React from 'react'
import {  TableRow,  TableCell } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    icons: {
        display: 'flex',
        justifyContent: 'space-evenly',
        cursor: 'pointer'
    }
})
function Order({ single }) {
    const classes = useStyles()
    return (
        <>
                <TableRow>
                    <TableCell>{single.check}</TableCell>
                    <TableCell>{single.name}</TableCell>
                    <TableCell>{single.company}</TableCell>
                    <TableCell>{single.type}</TableCell>
                    <TableCell>&#36;{single.amount}</TableCell>
                    <TableCell>{single.button}</TableCell>
                    <TableCell>
                        <div className={classes.icons}>
                        <span>{single.icon1}</span>
                        <span>{single.icon2}</span>
                        <span style={{color: 'red'}}>{single.icon3}</span>
                        <img src={single.icon4} alt='action' />
                        </div>
                    </TableCell>
                </TableRow>
        </>
    )
}

export default Order
