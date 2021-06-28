import React from 'react'
import { Card, CardContent,  Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    quote: {
        color: '#2EC5CE',
        fontSize: '2rem'
    },
    image: {
        width: '2rem',
        height: '2rem'
    }
})
function TestimonialSection({ testimonial }) {
    const classes = useStyles()
    return (
        
             <Card className={classes.root} elevation={5}>
            <CardContent>
                <Typography variant='body1'>{testimonial.comment}</Typography>
            </CardContent>
        </Card>
    )
}

export default TestimonialSection
