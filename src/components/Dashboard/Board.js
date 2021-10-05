import React from 'react'
import { Container, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    //    width: '80%',
       margin: '3rem .5rem',
       "@media (max-width: 900px)": {
        width: '70%',
        // margin: '1rem',
      },
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    box: {
        width: '2rem',
        height: '2rem',
        borderRadius: '30%',
        marginTop: '1rem',
        position: 'relative'
    },
    icon: {
        color: '#ffffff',
        position: 'absolute',
        top: '.3rem',
        left: '.25rem'
    }
})
function Board({ single }) {
    const classes = useStyles()
    return (
        <Card className={classes.root} elevation={0} 
        data-aos='fade-right' 
        data-aos-delay='400' 
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        >
            <Container>
                <div className={classes.content}>
                    <div className={classes.box} style={{ backgroundColor: single.color}}>
                        <span className={classes.icon}>{single.icon}</span>
                    </div>
                    <CardContent>
                        <Typography variant='body2' color='textSecondary'>{single.name}</Typography>
                        <Typography variant='h4' style={{padding: '1rem 0 2rem'}}>{single.amount}</Typography>
                    </CardContent>
                </div>
            </Container>  
        </Card>
    )
}

export default Board
