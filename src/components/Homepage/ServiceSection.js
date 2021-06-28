import React from 'react';
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: '5rem',
    },
    image: {
        height: '2rem',
        width: '2rem'
    },
    title: {
        paddingTop: '1rem',
        fontWeight: 'bold'
    },
    text: {
        paddingTop: '1rem' 
    }
})
function ServiceSection({service}) {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={service.src} alt='service-img' /> 
            </div>
            <Typography variant='h6' align='center' className={classes.title}>{service.title}</Typography>
            <Typography variant='body1' align='center' className={classes.text}>{service.body1}</Typography>
            <Typography variant='body1' align='center'>{service.body2}</Typography>
        </Container>
    )
}

export default ServiceSection;
