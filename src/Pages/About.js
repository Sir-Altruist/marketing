import React from 'react';
import { Box, Container, Grid, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Info from '../assets/icons/about.svg'
import CustomHeader2 from '../components/Basic/CustomHeader/CustomHeader2'
import CustomFooter2 from '../components/Basic/CustomFooter/CustomFooter2'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: '90vh',
        backgroundColor: '#C4C4C41A',
        paddingTop: '10rem',
    },
    card: {
        borderRadius: '5%',
        border: '2px solid',
        borderTopColor: 'rgb(201, 177, 223)',
        borderRightColor: 'rgb(201, 177, 223)',
        borderBottomColor: 'rgb(201, 177, 223)',
        borderLeftColor: '#ffffff',
        marginBottom: '3rem'
    },
    title: {
        paddingTop: '3rem',
        paddingLeft: '5rem'
    },
    content: {
        padding: '3rem 5rem 6rem 5rem'
    }
})
function About() {
    const classes = useStyles()
    return (
        <>
        <CustomHeader2 />
        <Box component='div' className={classes.root}>
            <Container>
                <Grid container data-aos="fade-right" data-aos-delay='600'>
                    <Grid item xs={12} md={6}>
                        <img src={Info} alt='info-icon' />
                    </Grid>
                    <Grid item xs={12} md={6} data-aos="fade-left" data-aos-delay='1000'>
                        <Card className={classes.card}>
                            <Container>
                            <Typography variant='h4' component='h2' className={classes.title}>About Us</Typography>
                            <Typography variant='body1' component='p' className={classes.content}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
                            Fusce hendrerit mi mauris, nec lacinia tortor venenatis sit amet. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Mauris interdum erat purus, sit amet consectetur tortor pharetra ac. 
                            Nullam a arcu vel mi faucibus pulvinar. Cras pretium convallis est, at consequat lacus 
                            ornare quis.
                            </Typography>
                            </Container>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <CustomFooter2 />
        </>
    )
}

export default About
