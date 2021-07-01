import React from 'react'
import { Card, Typography, Container, CardContent, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    card: {
        margin: '5rem 1rem 0',
        borderRadius: '5%'
    },

})
export default function Snap({ single }) {
    const classes = useStyles()
    return (
        <Card className={classes.card} elevation={2}>
            <Container>
            <CardContent>
            <Typography variant='body2' color='textSecondary' style={{ paddingTop: '3rem'}}>{single.content}</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '2rem'}}>
            <Avatar src={single.img} alt='identity' style={{marginTop: '2rem'}} />
            <div style={{marginLeft: '2rem', marginTop: '2rem'}}>
            <Typography variant='h6' style={{ fontWeight: 'bold'}} className={classes.desc}>{single.name}</Typography>
            <Typography variant='body2' color='textSecondary'>{single.role}</Typography>
            </div>
            </div>
            </CardContent>
            </Container>
        </Card>
    )
}


