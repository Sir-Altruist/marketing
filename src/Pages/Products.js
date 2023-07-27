import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Divider, Container, Button, Card, CardContent} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ProductHeader from '../components/ProductHeader'
import Stars from '../assets/home/stars.png'
import TextsmsIcon from '@material-ui/icons/TextsmsOutlined'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorderOutlined'
import  Laptop  from '../assets/icons/laptop.png'
import Stock from '../components/Stock'
import { connect } from 'react-redux'
import Carousel from 'react-elastic-carousel'
import Product from '../components/Homepage2/Product'
import { productList } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import CustomFooter2 from '../components/Basic/CustomFooter/CustomFooter2'
import CustomHeader2 from '../components/Basic/CustomHeader/CustomHeader2'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: '100vh',
        marginTop: '5rem'
    },
    list: {
        display: 'flex'
    },
    img: {
        width: '100%',
        borderRadius: '5%',
        marginTop: '3rem',
    },
    single: {
        marginTop: '3rem',
        "@media (max-width: 900px)": {
            width: '50%',
            margin: '2rem auto'
            },
    },
    product: {
        width: '100%',
        minHeight: '100vh',
        paddingTop: '5rem'
    },
    card: {
        width: '60%',
        marginTop: '2rem',
        "@media (max-width: 900px)": {
          width: '80%',
          margin: '2rem auto'
          },
    }
})
function Products({ image }) {
    const[value, setValue] = useState(2)
    const addValue = () => {
        setValue(prevState => {
            return prevState + 1
        })
    }
    const removeValue = () => {
        setValue(prevState => {
            return prevState - 1
        })
    }
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
    
    const dispatch = useDispatch()

    const productLists = useSelector(state => state.productReducers)
  
    const { loading, error, products } = productLists

    useEffect(() => {

        dispatch(productList())
      }, [dispatch])

      let listOfProducts = products?.length > 0 ? <Carousel 
      breakPoints={breakPoints}
      enableAutoPlay={true}
      autoPlaySpeed={5000}
    >

        {products &&  products?.map((product, i) => {
              return (
                  <Grid item key={i}>
                      <Product product={product} />
                  </Grid>
              )
          })}
      </Carousel> : <h2>No Product has been uploaded yet!</h2>
      

    return (
        <div className={classes.root}>
            <CustomHeader2 />
            <ProductHeader />
            <Box component='div' className={classes.root}>
                <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body2' style={{ color: '#6056D7'}} data-aos="fade-up">Electronic</Typography><br />
                        <Typography variant='h4' color='textPrimary' data-aos="fade-up">Laptop-AsusMX456GM</Typography><br />
                        <div className={classes.list} data-aos="fade-up">
                            <div style={{ marginRight: '1rem', display: 'flex'}}>
                        <Typography variant='body2' color='textSecondary' style={{paddingRight: '1rem'}}>Sold</Typography>
                        <Typography variant='body2' style={{ fontWeight: 'bold'}}>1200</Typography>
                            </div>
                        <Divider oreintation='vertical' />
                        <div style={{ marginRight: '1rem'}} data-aos="fade-up">
                        <img src={Stars} alt='rate' />
                        </div>
                        <Divider oreintation='vertical' />
                        <div style={{ marginRight: '1rem', display: 'flex'}} data-aos="fade-up">
                        <Typography variant='body2' color='textSecondary' style={{paddingRight: '1rem'}}>Discussion</Typography>
                        <Typography variant='body2' style={{ fontWeight: 'bold'}}>200</Typography>
                        </div>
                        </div>
                        <div style={{display: 'flex', marginTop: '2rem'}} data-aos="fade-up">
                            <Button    
                            variant='contained' 
                            color='primary'
                            style={{marginRight: '1rem'}}
                            >
                                Detail Product
                            </Button>
                            <Button
                            variant='outlined'>
                                Reviews
                            </Button>
                        </div>
                        <Typography variant='body2' color='textSecondary' style={{ paddingTop: '2rem'}} data-aos="fade-up">
                        Processor Installed : Intel® Core™ i3-10110U Processor (4M Cache, up to 4.10 GHz)<br />
                        Standard Memory: 8GB DDR4<br />
                        Graphics Type: Intel UHD Graphics<br />
                        Screen Size: 114" FHD (1920*1080), IPS-Level 60Hz 45%NTSC Thin Bezel<br />
                        Screen Resolution: 1920x1080<br />
                        Screen Type: LED<br />
                        Storage: 256GB NVMe PCIe SSD<br />
                        Keyboard: Backlit Keyboard (Single Color, White)
                        </Typography>
                        <Card className={classes.card} 
                        //  data-aos="fade-right"
                         >
                            <Container style={{ textAlign: 'center'}}>
                            <CardContent>
                                <Typography variant='body1' style={{ paddingTop: '1rem', fontWeight: 'bold'}}>
                                    Manage Purchases
                                </Typography>
                            </CardContent>
                            <CardContent>
                            <Typography variant='body2' color='textSecondary'>
                                Quantity
                            </Typography>
                            <div style={{ display: 'flex', marginLeft: '1rem', marginTop: '2rem'}}>
                                <Button
                                variant='outlined'
                                size='small'
                                onClick={removeValue}
                                >
                                    -
                                </Button>
                                <Typography variant='h6' style={{paddingLeft: '2rem'}}>{value}</Typography>
                                <Button
                                variant='contained'
                                size='small'
                                color='primary'
                                onClick={addValue}
                                style={{ marginLeft: '2rem'}}

                                >
                                    +
                                </Button>
                            </div>
                            </CardContent>
                            <Typography variant='body2' color='textSecondary' style={{ paddingTop: '1rem'}}>
                                Subtotal:
                            </Typography>
                            <br />
                            <Typography variant='h6' style={{paddingBottom: '2rem'}}>&#36;1000</Typography>
                            <div style={{marginBottom: '3rem'}}>
                            <Button
                            variant='contained'
                            color='primary'>
                                Order Now
                            </Button>
                            </div>
                            </Container>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ paddingTop: '3rem'}}>
                        <div style={{ display: 'flex'}} data-aos="fade-up">
                        <div style={{ display: 'flex', paddingRight: '3rem'}}>
                            <TextsmsIcon />
                            <Typography variant='body1' style={{fontWeight: 'bold', paddingLeft: '1rem'}}>Chat</Typography>
                        </div>
                        <div style={{ display: 'flex'}}>
                            <FavoriteBorderIcon />
                            <Typography variant='body1' style={{fontWeight: 'bold', paddingLeft: '1rem'}}>Wishlist</Typography>
                        </div>
                        </div>
                        <img src={Laptop} alt='laptop' className={classes.img} data-aos="fade-up"/>
                        <Grid container data-aos="fade-left" data-aos-delay="700">
                        {image.map((single, i) => {
                            return (
                                <Grid item xs={12} md={4}  key={i} className={classes.single} spacing={3}>
                                <Stock single={single} />
                                </Grid>
                            )
                        })}
                        </Grid>
                        
                    </Grid>
                </Grid>
                </Container>
            </Box>
            <Box component='div' className={classes.product}>
            <Container>
            <Typography variant='h6' style={{fontWeight: 'bold', paddingLeft: '5.5rem'}}>More Products</Typography>
            <Grid container>
            {loading && <h2>Loading...</h2>} 
            {error && <h3>{error}</h3>}
            {listOfProducts}
            </Grid>
            </Container>
        </Box>
        <CustomFooter2 />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        image: state.image.data
    }
}
export default connect(mapStateToProps)(Products)
