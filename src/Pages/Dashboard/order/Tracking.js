import React, { useEffect, useState } from 'react'
import LocalMallOutlined from '@material-ui/icons/LocalMallOutlined'
import CreateOutlined from '@material-ui/icons/CreateOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import Spec from '../../../assets/icons/mirror.svg'
import Head from '../../../components/Head'
import { Box, 
    Typography, 
    Container, 
    Card, 
    Grid, 
    Divider, 
    Button, 
    TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { details } from '../../../actions/clientAction'
import { productUpload } from '../../../actions/productAction'
import ErrorAlert from '../../../components/Basic/Alerts/Products/ErrorAlert'
import SuccessAlert from '../../../components/Basic/Alerts/Products/SuccessAlert'
import axios from 'axios'


const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh'
    },
    card: {
        marginTop: '1rem',
        marginBottom: '2rem'
    },
    content: {
        margin: '2rem auto'
    },
    desc: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '2rem'
    },
    form: {
        margin: '2rem 0 2rem 0'
    },
    field: {
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: "#E8E8E880"
    },
    details: {
        paddingTop: '2rem',
        paddingLeft: '2rem'
    },
    icons: {
        paddingLeft: '10rem',
        cursor: 'pointer'
    },
    formCard: {
        width: '60%',
        minHeight: '60vh',
        margin: '5rem auto',
        borderRadius: '5%',
        marginLeft: '10%'
     },
     btn: {
        backgroundColor: '#6056D7',
        textTransform: 'inherit',
        color: '#ffffff',
        width: '8rem',
        '&:hover': {
            backgroundColor: '#6056D7',
        }
    }
})
function Tracking() {
    const classes = useStyles()

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [budget, setBudget] = useState('')
    const [commission, setCommission] = useState('')
    const [rating, setRating] = useState('')
    const [productImg, setProductImg] = useState('')
    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')
    const [description, setDescription] = useState('')

    //image upload
    const [uploading, setUploading] = useState(false)

    const history = useHistory()
    const dispatch = useDispatch()
    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin
    const clientDetails = useSelector(state => state.clientDetailsReducer)
    const { user } = clientDetails
    const productMessage = useSelector(state => state.productUploadReducers)
    const {loading, error, products} = productMessage
 


    useEffect(() => {
        localStorage.setItem('userInfo', JSON.stringify(user))
        if(!clientInfo){
            history.push('/login/client')
        } else {
            if(!user){
                dispatch(details())
            } else {
                history.push(`/client/order/tracking`)
            }
        }
    }, [history, clientInfo, user, dispatch])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('productImg', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': `${clientInfo.token}`
                }
            }

            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/image`, formData, config)

            setProductImg(data)
            setUploading(false)


        } catch (error) {
            console.log(error)
            setUploading(false)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(productUpload(name, amount, budget, commission, rating, productImg, link1, link2, description))
    }
 
      
  

    return (
        <div className={classes.root}>
            <Head />
            <Box component='div'>
                <Container>
                <div style={{ display: 'flex', paddingLeft: '1rem'}}>
                    <LocalMallOutlined />
                    <Typography variant='body2' style={{paddingLeft: '1rem'}}>Order</Typography>
                </div>
                <Card className={classes.card} data-aos='fade-right'>
                    <Container>
                        <Grid container className={classes.content} >
                            <Grid item xs={12} md={8}>
                                <div className={classes.desc}>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Name</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        Marketing
                                    </Typography>
                                </div>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Company</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        Wilmar
                                    </Typography>
                                </div>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Type</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        Service
                                    </Typography>
                                </div>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Amount</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        &#36;100
                                    </Typography>
                                </div>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Status</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        Paid
                                    </Typography>
                                </div>
                                </div>
                                <div className={classes.details}>
                                <Typography variant='body2'>Description</Typography>
                                <Typography variant='body2' style={{paddingTop: '1rem'}} color='textSecondary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nisl eu blandit sagittis, 
                                diam arcu fermentum ex, a eleifend eros dolor ultrices lorem. Pellentesque habitant morbi tristique 
                                senectus et netus et malesuada fames ac turpis egestas. Mauris eu nunc vitae lectus consectetur volutpat. 
                                Nam euismod vitae tortor ac ultricies. Suspendisse suscipit eu nisl placerat faucibus. Sed tempus tristique faucibus. 
                                Nunc euismod, sem in lacinia suscipit, sapien enim finibus lacus, cursus tempor metus risus et lacus. Suspendisse in 
                                dui sit amet eros interdum mattis. Pellentesque et ex ac metus iaculis porta at at dui. Nunc vel sem ac leo consequat 
                                blandit id vel purus. Morbi posuere lectus ut enim sollicitudin, quis pharetra eros auctor.
                                </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className={classes.icons}>
                                <div style={{ display: 'flex', paddingTop: '1rem'}}>
                                   <ChatBubbleOutlineIcon />
                                   <Typography variant='body2' style={{ paddingLeft: '1rem'}}>Message</Typography> 
                                </div>
                                <div style={{ display: 'flex', paddingTop: '3rem'}}>
                                   <CreateOutlined />
                                   <Typography variant='body2' style={{ paddingLeft: '1rem'}}>Edit</Typography> 
                                </div>
                                <div style={{ display: 'flex', paddingTop: '3rem', color: 'red'}}>
                                   <CloseOutlined />
                                   <Typography variant='body2' style={{ paddingLeft: '1rem'}}>Delete</Typography> 
                                </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Card>
                </Container>
            </Box>
            <Box style={{marginTop: '3rem'}}>
                <Card className={classes.formCard}>
                <Container className={classes.form}>  
                <Typography variant='h4' style={{textAlign: 'center'}}>Upload Product</Typography>
                       <form noValidate autoComplete='false' style={{margin: '2rem 0'}} onSubmit={handleSubmit}>
                           {loading && <h5>Loading...</h5>}
                           {error && <ErrorAlert />}
                           {products && <SuccessAlert />}
                               <div>
                               <TextField 
                                size='small' 
                                fullWidth 
                                label='Product Name' 
                                name='name'
                                variant='outlined'
                                onChange={e => setName(e.target.value)}
                                value={name}
                                className={classes.field} 
                                />
                                <TextField 
                                size='small' 
                                fullWidth 
                                label='Amount'
                                name='amount'
                                 variant='outlined'
                                 onChange={e => setAmount(e.target.value)}
                                 value={amount}
                                 className={classes.field} 
                                 />
                                 <TextField 
                                size='small' 
                                fullWidth 
                                label='Budget'
                                name='budget'
                                 variant='outlined'
                                 onChange={e => setBudget(e.target.value)}
                                 value={budget}
                                 className={classes.field} 
                                 />
                                 <TextField 
                                size='small' 
                                fullWidth 
                                label='Commission'
                                name='commission'
                                 variant='outlined'
                                 onChange={e => setCommission(e.target.value)}
                                 value={commission}
                                 className={classes.field} 
                                 />
                                 <TextField 
                                size='small' 
                                fullWidth 
                                label='Prodcut Rating (number)'
                                name='rating'
                                 variant='outlined'
                                 onChange={e => setRating(e.target.value)}
                                 value={rating}
                                 className={classes.field} 
                                 />
                                   <TextField 
                                size='small' 
                                fullWidth 
                                label='Upload product image'
                                name='productImg'
                                 variant='outlined'
                                 onChange={e => setProductImg(e.target.value)}
                                 value={productImg}
                                 className={classes.field} 
                                 />
                                 <input
                                 accept='images/*'
                                //  className={classes.field}
                                 onChange={uploadFileHandler}
                                 id="raised-button-file"
                                 multiple
                                 name='image'
                                 type='file'
                                 hidden />
                                 <label htmlFor='raised-button-file'>
                                     <Button 
                                     variant='contained' 
                                     component='span' 
                                    //  className={classes.field}
                                     style={{textTransform: 'inherit'}}>
                                         Select image
                                     </Button>
                                 </label>
                                 {uploading && <h5>Product image uploading... </h5>}
                                 <TextField 
                                size='small' 
                                fullWidth 
                                label='Product Link'
                                name='link1'
                                 variant='outlined'
                                 onChange={e => setLink1(e.target.value)}
                                 value={link1}
                                 className={classes.field} 
                                 />
                                  <TextField 
                                size='small' 
                                fullWidth 
                                label='Product Link 2'
                                name='link2'
                                 variant='outlined'
                                 onChange={e => setLink2(e.target.value)}
                                 value={link2}
                                 className={classes.field} 
                                 />
                                <TextField 
                                size='small' 
                                fullWidth 
                                label='Description'
                                name='description'
                                variant='outlined'
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                                multiline
                                rows={4}
                                className={classes.field} 
                                />
                                <div style={{ textAlign: 'right', marginTop: '1rem'}}>
                                <Button type='submit' className={classes.btn}>Submit</Button>
                                </div>
                               </div>
                </form>
                </Container>
                </Card>
            </Box>
            <Box component='div'>
                <Container>
                <div style={{ display: 'flex', paddingLeft: '1rem'}}>
                            <img src={Spec} alt='track' />
                            <Typography variant='body2' style={{paddingLeft: '1rem'}}>Tracking</Typography>
                </div>
                        <Card className={classes.card} data-aos='fade-left' data-aos-offset='200'>
                            <Container style={{ padding: '2rem 0 3rem 2rem'}}>
                            <div style={{display: 'flex', paddingTop: '2rem', paddingLeft: '1rem'}}>
                                <Typography variant='body2'>25 May, 2021</Typography>
                                <Typography variant='body2' style={{paddingLeft: '2rem'}}>16:32</Typography>
                                <Typography style={{paddingLeft: '5rem'}}>Negotiation</Typography>
                            </div>
                            <div style={{display: 'flex', paddingTop: '2rem', paddingLeft: '1rem'}}>
                                <Typography variant='body2'>25 May, 2021</Typography>
                                <Typography variant='body2' style={{paddingLeft: '2rem'}}>22:13</Typography>
                                <Typography style={{paddingLeft: '5rem'}}>Paid</Typography>
                            </div>
                            <div style={{display: 'flex', paddingTop: '2rem', paddingLeft: '1rem'}}>
                                <Typography variant='body2'>25 May, 2021</Typography>
                                <Typography variant='body2' style={{paddingLeft: '2rem'}}>22:40</Typography>
                                <Typography style={{paddingLeft: '5rem'}}>Processing to Confirmation</Typography>
                            </div>
                            <div style={{display: 'flex', paddingTop: '2rem', paddingLeft: '1rem'}}>
                                <Typography variant='body2'>28 May, 2021</Typography>
                                <Typography variant='body2' style={{paddingLeft: '2rem'}}>01:13</Typography>
                                <Typography style={{paddingLeft: '5rem'}}>On Work</Typography>
                            </div>
                            <Divider orientation='vertical' style={{ marginLeft: '5rem'}} />
                            </Container>
                        </Card>
                </Container>
            </Box>
        </div>
    )
}

export default Tracking
