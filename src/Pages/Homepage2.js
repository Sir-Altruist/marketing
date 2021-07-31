import React, { useEffect } from 'react'
import { Box, Typography, Container, Grid, List, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../assets/home/bg-home.png'
import Chart from '../assets/home/chart.png'
import Choose from '../components/Homepage2/Choose'
import { connect } from 'react-redux'
import Carousel from 'react-elastic-carousel'
import Product from '../components/Homepage2/Product'
import AffiliateImg from '../assets/icons/affiliate2.png'
import Affiliate from '../components/Homepage2/Affiliate'
import Snap from '../components/Homepage2/Snap'
import Buyer from '../components/Homepage2/Buyer'
import BuyerImg from '../assets/home/buyer2.png'
import { productList } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import CustomHeader2 from '../components/Basic/CustomHeader/CustomHeader2'
import CustomFooter2 from '../components/Basic/CustomFooter/CustomFooter2'


//clickup.com
//The problems section

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
    },
    leftSide: {
         background: `linear-gradient(rgba(90, 76, 238, 0.3), rgba(90, 76, 238, 0.3)), url(${Background})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         width: '55%',
         minHeight: "100vh",
         borderBottomRightRadius: '10%',
         position: 'relative',
         color: '#ffffff',
         "@media (max-width: 900px)": {
            background: `linear-gradient(rgba(90, 76, 238, 0.3), rgba(90, 76, 238, 0.3)), url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            minHeight: "100vh",
            borderBottomRightRadius: 0,
            position: 'relative',
          },
    },
    rightSide: {
        marginTop: '10rem',
        position: 'absolute',
        left: '40rem',
        "@media (max-width: 900px)": {
            left: 0
          },
    },
    image: {
       width: '100%',
       height: '27rem'
    },
    choose: {
        width: '100%',
        minHeight: '100vh',
        paddingTop: '10rem'
    },
    product: {
        width: '100%',
        minHeight: '100vh',
        paddingTop: '5rem'
    },
    affiliate: {
        width: '100%',
        minHeight: '100vh',
        paddingTop: '5rem'
    },
    affiliateList: {
        width: '80%',
    },
    buyerList: {
        width: '90%',
    marginLeft: '5rem'    
},
buyerList1: {
    width: '90%',    
},
bgText: {
    padding: '13rem 0 0 4rem',
    // textAlign: 'center'
},
tag: {
    backgroundColor: '#ffffff',
    color: '#6056D7'
},
buttons: {
    marginTop: '5rem',
    "@media (max-width: 900px)": {
        margin: '13rem 0 3rem 0',
        zIndex: 1
      },

},
btn1: {
    color: '#000000',
    textTransform: 'inherit',
    marginRight: '2rem',
    "@media (max-width: 900px)": {
        color: '#000000',
        textTransform: 'inherit',
        marginRight: '.5rem',
      },
},
btn2: {
    color: '#000000',
    textTransform: 'inherit'
},
join: {
    width: '100%',
    minHeight: '60vh'
},
joinBtn:{
    textAlign: 'center',
    marginTop: '5rem'
},
joinBtn1: {
    color: 'blue',
    borderColor: 'blue',
    textTransform: 'inherit',
    marginRight: '2rem'
},
joinBtn2: {
    color: 'blue',
    borderColor: 'blue',
    textTransform: 'inherit',
}
})

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
        width: 900,
        itemsToShow: 2
    },
    {
        width: 1000,
        itemsToShow: 4
    },
    {
        width: 1200,
        itemsToShow: 4
    }
]

function Homepage2({choose, affiliate, buyer, snap}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const productLists = useSelector(state => state.productReducers)
  
    const { loading, error, products } = productLists

    useEffect(() => {

        dispatch(productList())
      }, [dispatch])

    return (
        <>
        <CustomHeader2 />
        <Box  component='div'  className={classes.root}>
            <div className={classes.leftSide}>
                <Container className={classes.bgText}>
                <Typography variant='h5' style={{ fontWeight: 'bold'}}>
                    Join us <span className={classes.tag}>Buyer or Affiliate</span> program <br />
                    and get more benefits
                </Typography>
                <Typography variant='body2' style={{ paddingTop: '2rem'}}>
                We continue to strive to create products that are worth selling with the  <br /> best quality for you. 
                By joining us you will get more benefits. 
                Expand the <br /> reach of your business and make a profit together
                </Typography>
                <div className={classes.buttons}>
                <Button variant='contained' className={classes.btn1}>I am a Buyer</Button>
                <Button variant='contained' className={classes.btn2}>I am an Affiliate</Button>
                </div>
                </Container>
            </div>
            <div className={classes.rightSide} data-aos="fade-left">
                <img src={Chart} alt='chart' className={classes.image} />
            </div>
        </Box>
        <Box component='div' className={classes.choose}>
            <Container data-aos="fade-up">
            <Typography variant='h6' align='center' style={{fontWeight: 'bold'}}>Why Choose Us</Typography>
            <Typography variant='body2' color='textSecondary' align='center' style={{paddingTop: '1rem'}}>
                We provide many benefits for users, therefore you should find out now why <br /> you choose us. 
                Of course we have many best services for you
            </Typography>
                <Grid container>
                    {choose.map((single, i) => {
                        return (
                            <Grid item xs={12} md={3} key={i}>
                                <Choose single={single} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
        <Box component='div' className={classes.product}>
            <Container>
        <Typography variant='h6' align='center' style={{fontWeight: 'bold'}}>Our Products</Typography>
            <Typography variant='body2' color='textSecondary' align='center' style={{paddingTop: '1rem'}}>
            We prepare the highest quality products for customers. <br />
            We strive to continuously improve the quantity and the best quality in the field
        </Typography>
        <Grid container>
            {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> 
            : products.length < 1 ? <h2>No product has been added yet!</h2>
            : <Carousel 
            breakPoints={breakPoints}
            enableAutoPlay={true}
            // autoPlaySpeed={1000}
          >

              {products.map((product, i) => {
                    return (
                        <Grid item key={i}>
                            <Product product={product} />
                        </Grid>
                    )
                })}
            </Carousel> }
            </Grid>
            </Container>
        </Box>
        <Box component='div' className={classes.affiliate}>
            <Container>
            <Typography variant='h6' align='center' style={{fontWeight: 'bold'}} data-aos="fade-up">Why Become Affiliate <br /> With Us</Typography>
            <Typography variant='body2' color='textSecondary' align='center' style={{paddingTop: '1rem'}}
             data-aos="fade-up">
            We invite you to join the Affiliate Program to get many benefits. 
            Now find out <br /> what are your advantages by joining us
            </Typography>
                <Grid container style={{ marginTop: '5rem'}} data-aos="fade-right" data-aos-delay='400'>
                <Grid item xs={12} md={6}>
                    <List className={classes.affiliateList}>
                    {affiliate.map((single, i) => {
                        return ( 
                           <Affiliate single={single} key={i}  />
                        )
                    })}
                    </List>
                    </Grid>
                      <Grid item xs={12} md={6} data-aos="fade-left" data-aos-delay='800'>
                        <img src={AffiliateImg} alt='affiliate' style={{ width: '100%'}} />
                </Grid>
                </Grid>
            </Container>
        </Box>
        <Box component='div' display={{ xs: 'none', md: 'block' }} m={1} className={classes.affiliate}>
            <Container>
            <Typography variant='h6' align='center' style={{fontWeight: 'bold'}} data-aos="fade-up">Why Become A Buyer <br /> With Us</Typography>
            <Typography variant='body2' color='textSecondary' align='center' style={{paddingTop: '1rem'}} data-aos="fade-up">
            We invite you to join the Affiliate Program to get many benefits. 
            Now find out <br /> what are your advantages by joining us
            </Typography>
                <Grid container style={{ marginTop: '5rem'}} data-aos="fade-right" data-aos-delay='400'>
                      <Grid item xs={12} md={6}>
                        <img src={BuyerImg} alt='buyer' style={{ width: '90%'}} />
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-left" data-aos-delay='800'>
                    <List className={classes.buyerList}>
                    {buyer.map((single, i) => {
                        return ( 
                           <Buyer single={single} key={i}  />
                        )
                    })}
                    </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box component='div' display={{ xs: 'block', md: 'none' }} m={1} className={classes.affiliate}>
            <Container>
            <Typography variant='h6' align='center' style={{fontWeight: 'bold'}} data-aos="fade-up">Why Become A Buyer <br /> With Us</Typography>
            <Typography variant='body2' color='textSecondary' align='center' style={{paddingTop: '1rem'}} data-aos="fade-up">
            We invite you to join the Affiliate Program to get many benefits. 
            Now find out <br /> what are your advantages by joining us
            </Typography>
                <Grid container style={{ marginTop: '5rem'}} data-aos="fade-right" data-aos-delay='400'>
                      <Grid item xs={12} md={6}>
                        <img src={BuyerImg} alt='buyer' style={{ width: '90%'}} />
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-left" data-aos-delay='800'>
                    <List className={classes.buyerList1}>
                    {buyer.map((single, i) => {
                        return ( 
                           <Buyer single={single} key={i}  />
                        )
                    })}
                    </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box component='div' className={classes.affiliate}>
            <Container>
            <Typography variant='h6' align='center' style={{fontWeight: 'bold'}}>Testimonials</Typography>
            <Typography variant='body2' color='textSecondary' align='center' style={{paddingTop: '1rem'}}>
            We invite you to join the Affiliate Program to get many benefits. 
            Now find out <br /> what are your advantages by joining us
            </Typography>
            <Grid container>
        <Carousel 
            breakPoints={breakPoints}
          >

              {snap.map((single, i) => {
                    return (
                        <Grid item key={i}>
                            <Snap single={single} />
                        </Grid>
                    )
                })}
            </Carousel>
            </Grid>
            </Container>
        </Box>
        <Box component='div' className={classes.join}>
        <Typography variant='h5' align='center' style={{fontWeight: 'bold'}}>
        Now prove it right now the benefits you will get if <br /> you join us
        </Typography>
        <div className={classes.joinBtn}>
                <Button variant='outlined' className={classes.joinBtn1}>I am a Buyer</Button>
                <Button variant='outlined' className={classes.joinBtn2}>I am an Affiliate</Button>
                </div>
        </Box>
        <CustomFooter2 />
        </>
    )
}



const mapStateToProps = state => {
    return {
        choose: state.choose.data,
        affiliate: state.affiliate.data,
        buyer: state.buyer.data,
        snap: state.snap.data
    }
}

export default connect(mapStateToProps)(Homepage2)