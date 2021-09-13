import React, { useState, useEffect } from 'react'
import { Container, Card, Box, Typography, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { singleProductDetails, editProduct } from '../../actions/productAction'
import EditAlert from '../../components/Basic/Alerts/Products/EditAlert'
import ErrorAlert from '../../components/Basic/Alerts/Products/ErrorAlert'




const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#C4C4C41A',
        width: '100%',
        minHeight: '150vh',
        position: 'relative'
    },
    header: {
        textAlign: 'center'
    },
    field: {
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: "#E8E8E880"
    },
    formCard: {
        width: '60%',
        minHeight: '60vh',
        margin: '5rem auto',
        borderRadius: '5%',
        marginLeft: '10%'
    },
    form: {
        margin: '2rem 0 2rem 0'
    },
    btn: {
        backgroundColor: '#008000',
        textTransform: 'inherit',
        color: '#ffffff',
        width: '8rem',
        '&:hover': {
            backgroundColor: '#008000',
        }
    }
})

function EditProduct({ match }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin
    const productDetails = useSelector(state => state.productDetailsReducer)
    const { loading, error, product } = productDetails
    const productEdit = useSelector(state => state.productEditReducer)
    const { loading: editLoading, success } = productEdit


    //product Id
    const productId = match.params.id

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [budget, setBudget] = useState('')
    const [commission, setCommission] = useState('')
    const [rating, setRating] = useState('')
    const [productImg, setProductImg] = useState('')
    const [link1, setLink1] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if(!clientInfo){
            history.push('/login/client')
        } else {
            if(product._id !== productId){
                dispatch(singleProductDetails(productId))
            } else {
                setName(product.name)
                setAmount(product.amount)
                setBudget(product.budget)
                setCommission(product.commission)
                setRating(product.rating)
                setProductImg(product.productImg)
                setLink1(product.link1)
                setDescription(product.description)
            }      
        }
    }, [dispatch, history, productId, product._id, clientInfo])
       //image upload
       const [uploading, setUploading] = useState(false)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editProduct({
            _id: productId,
            name,
            amount,
            budget,
            commission,
            rating,
            productImg,
            link1,
            description
        }))
    }

    return (
        <Box className={classes.root}>
            <Card className={classes.formCard}>
                <Container className={classes.form}>
                    <Typography variant='h3' className={classes.header}>Edit Product</Typography>
                    {loading ? <h5>Loading...</h5>
                    : error ? <h5>{error}</h5> : (
                        <form noValidate autoComplete='false' style={{margin: '2rem 0'}} onSubmit={handleSubmit}>
                           {editLoading && <h5>Loading...</h5>}
                           {success && <EditAlert />}
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
                                     style={{textTransform: 'inherit'}}>
                                         Select image
                                     </Button>
                                 </label>
                                 {uploading && <h5>Product image uploading... </h5>}
                                 <TextField 
                                size='small' 
                                fullWidth 
                                label='Product Link'
                                name='link'
                                 variant='outlined'
                                 onChange={e => setLink1(e.target.value)}
                                 value={link1}
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
                                <Button 
                                type='submit' 
                                className={classes.btn}
                                onClick={handleSubmit}
                                >
                                    Update
                                </Button>
                                </div>
                               </div>
                </form>
                    )}
                </Container>
            </Card>
        </Box>
    )
}

export default EditProduct
