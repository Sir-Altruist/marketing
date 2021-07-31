import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import User from '../assets/home/user.png'
import { Avatar, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
    root: {
        width: '100%',
        paddingTop: '3rem',
        display: 'flex',
        justifyContent: 'space-between'
    },
    avatar: {
        width: '1.5rem',
        height: '1.5rem'
    },
})

function PaymentHead() {
    const classes = useStyles()

    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin

    return (
        <div>
            <Container className={classes.root}>
                <div>
                    <Typography variant='h6' style={{ fontWeight: 'bold'}}>Payment</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <NotificationsNoneIcon  />
           <Typography variant='body2' style={{ padding: '0 1rem'}}>{clientInfo ? clientInfo.user.username : null}</Typography>
           <Avatar src={User} alt='user' className={classes.avatar} />
                </div>
            </Container>
        </div>
    )
}

export default PaymentHead;
