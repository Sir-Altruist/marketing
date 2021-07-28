import React from 'react'
import { Card, CardContent, Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        width: '90%',
        marginTop: '1rem',
        marginRight: '1rem',
        paddingTop: '1rem',
        paddingBottom: '3rem',
        borderRadius: '5%'
    },
    header: {
        display: 'flex'
    },
    head: {
        fontWeight: 'bold',
        paddingLeft: '1rem'
    },
    leftContent: {
    },
    icons: {
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: 'flex-end',
        justifyContent: 'space-between',
        cursor: 'pointer'
    }
})
function Footer({ single }) {
    
    const classes = useStyles()
    return (
        <Card className={classes.root} elevation={0}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <div className={classes.header}>
                            <img src={single.path} alt='icon' />
                            <Typography variant='span' className={classes.head}>{single.service}</Typography>
                        </div>
                        <CardContent>
                                <Typography variant='body2' color='textSecondary'>{single.details}</Typography>
                            </CardContent>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography align='right' style={{ fontWeight: 'bold'}}>{single.amount}</Typography>
                        <div className={classes.icons}>
                            <span style={{width: '.1rem', height: '.1rem'}}>{single.icon1}</span>
                            <span style={{width: '.1rem', height: '.1rem'}}>{single.icon2}</span>
                            <span style={{width: '.1rem', height: '.1rem', color: 'red'}}>{single.icon3}</span>
                            <img src={single.icon4} alt='icon' />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Card>
    )
}

export default Footer
