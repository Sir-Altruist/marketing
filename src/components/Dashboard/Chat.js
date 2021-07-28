import React from 'react'
import { TableCell, Avatar, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    details: {
        paddingLeft: '1rem'
    }
  
})
function Chat({ single }) {
    const classes = useStyles()
    return (
        <>
        <TableCell 
        data-aos='fade-up' 
        data-aos-delay='100' 
        data-aos-duration='1000' 
        data-aos-easing='ease-in-out' 
        data-aos-offset='200'
        className={classes.root}>
            <Avatar src={single.img} alt='user' />
            <div className={classes.details}>
                <Typography variant='body1' style={{fontWeight: 'bold'}}>{single.name}</Typography>
                <Typography variant='body2'>{single.company}</Typography>
            </div>
        </TableCell>
        <Divider orientation='horizontal' />
        </>
    )
}

export default Chat
