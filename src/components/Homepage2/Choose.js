import React from 'react'
import { Card, Typography, Container, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    card: {
        margin: '5rem 1rem 0',
        borderRadius: '5%'
    },
    image: {
        width: '2.5rem',
        height: '2.5rem',
        margin: '2rem 40% 1rem 40%'
    },
    desc: {
        padding: '1rem 0'
    }
})
export default function Choose({ single }) {
    const classes = useStyles()
    return (
        <Card className={classes.card} elevation={2}>
            <Container>
            <img src={single.image} alt='choose' className={classes.image} />
            <CardContent>
            <Typography variant='h6'>{single.title}</Typography>
            <Typography variant='body2' color='textSecondary' className={classes.desc}>{single.desc}</Typography>
            </CardContent>
            </Container>
        </Card>
    )
}


