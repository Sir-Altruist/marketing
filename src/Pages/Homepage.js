import React from 'react'
import { Grid, CardMedia, Typography, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeImg from '../assets/home/home-bg.png';
import ServiceSection from '../components/Homepage/ServiceSection';
import FeaturedSection from '../components/Homepage/FeaturedSection';
import TestimonialSection from '../components/Homepage/TestimonialSection'
import Carousel from 'react-elastic-carousel'
import { connect } from 'react-redux'



 

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#C6E1FF',
        paddingTop: '9rem',
        width: '100%',
        minHeight: '100vh' 
    },
    image: {
        width: '100%',
        minHeight: '70vh'
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'inter',
        fontSize: '2.5rem',
    },
    quote: {
        fontWeight: 'bold',
        fontFamily: 'PT Mono'
    },
    comment: {
        color: '#655BD6',
        fontFamily: 'inter',
        fontSize: '1.5rem',
        paddingTop: '1rem'
    },
    service: {
        width: '100%',
        minHeight: '100vh',
        paddingTop: '5rem'
    },
    serviceHead: {
        color: '#18191F',
        fontFamily: 'inter',
        fontWeight: '800'
    },
    serviceSubHead: {
        color: '#18191F',
        fontSize: '1rem',
        paddingTop: '1rem'
    },
    serviceContent: {
        marginTop: '7rem',
    },
    featured: {
        width: '100%',
        minHeight: '100vh',
        paddingTop: '5rem',
        backgroundColor: '#A6A6A633'
    },
    featuredLogo: {
        marginTop: '10rem'
    }
})
function Homepage({ services, featured, testimonials }) {
    const classes = useStyles()

    const breakPoints = [
        {
            width: 1,
            itemsToShow: 1
        },
        {
            width: 768,
            itemsToShow: 1
        },
        {
            width: 790,
            itemsToShow: 2
        },
        {
            width: 1200,
            itemsToShow: 2
        }
    ]
    return (
        <>
        <Box component='div' className={classes.root}>
            <Container>
            <Grid container>
            <Grid item xs={12} md={7}>
                <CardMedia image={HomeImg} alt='background' className={classes.image} />
            </Grid>
            <Grid item xs={12} md={5}>
                <Typography variant='h1' className={classes.quote}>&ldquo;</Typography>
                <Typography className={classes.text}>
                 We Deliver <br /> Good Quality of Service
                </Typography>
                <Typography variant='body1' className={classes.comment}>
                Partner with us to increase your <br /> marketing level and profitability
                </Typography>
            </Grid>
        </Grid>
            </Container>
        </Box>
        <Box component='div' className={classes.service}>
        <Typography align='center' variant='h4' className={classes.serviceHead}>Our Services</Typography>
        <Typography variant='body1' align='center' className={classes.serviceSubHead}>
            Lorem ipsum is common placeholder text used to demonstrate <br /> the graphic elements of a document or visual presentation.
        </Typography>
        <Grid container className={classes.serviceContent}>
            {services.map((service, i) => {
                return (
                    <Grid item xs={12} md={4} key={i}>
                        <ServiceSection service={service} />
                    </Grid>
                )
            })}
        </Grid>
        </Box>
        <Box component='div' className={classes.featured}>
        <Typography align='center' variant='h4' className={classes.serviceHead}>Featured</Typography>
        <Grid container className={classes.featuredLogo}>
            {featured.map((logo, i) => {
                return (
                    <Grid item xs={12} md={3} key={i}>
                        <FeaturedSection logo={logo} />
                    </Grid>
                )
            })}
        </Grid>
        </Box>
        <Box component='div' className={classes.service}>
        <Typography align='center' variant='h4' className={classes.serviceHead}>Testimonial</Typography>
        <Grid container className={classes.serviceContent}>
            <Container>
            <Carousel 
            breakPoints={breakPoints}
          >
                {testimonials && testimonials.length && testimonials.map((testimonial, i) => {
                    return (
                        <Grid item key={i}>
                            <TestimonialSection testimonial={testimonial} />
                        </Grid>
                    )
                })}
            </Carousel>
            </Container>
        </Grid>
        </Box>
        </>
    )
}

const mapStateToProps = state => {
    return {
        services: state.services.data,
        featured: state.featured.data,
        testimonials: state.testimonials.data
    }
}
export default connect(mapStateToProps)(Homepage)
