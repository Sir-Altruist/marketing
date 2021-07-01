import React from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    listItem: {
        display: 'flex',
    },
    image: {
        marginTop: '-4rem',
        marginRight: '1rem'
    }
})
function Affiliate({ single }) {
    const classes = useStyles()
    return (
            <ListItem className={classes.listItem}>
                <img src={single.image} alt='icon' className={classes.image} />
                <ListItemText>
                    <Typography variant='body1'>{single.title}</Typography>
                    <Typography variant='body2' color='textSecondary' style={{paddingTop: '.5rem'}}>{single.detail}</Typography>
                </ListItemText>
            </ListItem> 
    )
}

export default Affiliate
