import React, { useEffect } from 'react'
import {
    Box,
    Container,
    Typography,
    Grid,
    Divider,
    TableContainer,
    Table,
    TableBody,
    TableRow
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Chat from '../../components/Dashboard/Chat'
import ChatBox from '../../components/Dashboard/ChatBox'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { connect } from 'react-redux';
import Editor from '../../components/Dashboard/Editor'
import Footer from '../../components/Dashboard/Footer'
import Head from '../../components/Head'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { details } from '../../actions/clientAction'
import { userProductList, deleteProduct } from '../../actions/productAction'
import InfoAlert from '../../components/Basic/Alerts/Products/InfoAlert'

const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh',
        overflowX: 'auto',
        "@media (max-width: 900px)": {
            overflowX: 'auto'
          },
    },
    chat: {
        display: 'flex',
        marginBottom: '3rem',
        maxWidth: '100%!important'
    },
    table: {
        width: '10%',
        marginLeft: '10%',
        "@media (max-width: 900px)": {
            width: '50%',
            display: 'block',
            overflowX: 'auto',
            marginLeft: 0
          },
    },
    chatbox: {
        width: '80%',
        "@media (max-width: 900px)": {
            width: '80%'
          },
    },
    footer: {
        display: 'flex',
        marginBottom: '3rem',
        "@media (max-width: 900px)": {
            width: '70%',
            margin: '1rem 0'

          },
    }
})

function Dashboard({ chat }) {
    const classes = useStyles()

    const history = useHistory()
    const dispatch = useDispatch()
    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin
    const clientDetails = useSelector(state => state.clientDetailsReducer)
    const { user } = clientDetails
    const userProducts = useSelector(state => state.userProductReducers)
    const {loading, error, products} = userProducts
    const deletedProduct = useSelector(state => state.productDeleteReducer)
    const { success } = deletedProduct

    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete this product?'))
        dispatch(deleteProduct(id))
    }
    useEffect(() => {
         localStorage.setItem('userInfo', JSON.stringify(user))
        if(!clientInfo){
            history.push('/login/client')
        } else {
            if(!user._id){
                dispatch(details())
            } else {
                history.push(`/client/dashboard`)
            }
        }
        dispatch(userProductList())
}, [clientInfo, history, user, user._id, dispatch, success])

let listOfProducts = products.length > 0 ? 
        <>
        {products &&  products.slice(0, 2).map((product, i) => {
              return (
                <Grid item xs={12} md={6} key={i}>
                    <Footer product={product} handleDelete={() => handleDelete(product._id)}  />
                </Grid>
              )
          })}
      </> : <InfoAlert />
    return (
        <div className={classes.root}>
            <Head />

            {/* Large Screen Display for Chat and Table */}
            {/* <Box component='div' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                <Container>
                    <div style={{ display: 'flex', paddingBottom: '1rem', paddingLeft: '.5rem' }}>
                        <ChatBubbleOutlineIcon />
                        <Typography variant='body1' style={{ fontWeight: 'bold', paddingLeft: '1rem' }}>Live Message</Typography>
                    </div>
                    <Divider orientation='horizontal' />
                    </Container>
                <div className={classes.chat}>
                    <TableContainer>
                        <Table className={classes.table}  responsive>
                            <TableBody>
                                {chat.map((single, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <Chat single={single} />
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className={classes.chatbox}>
                        <Container>
                             <ChatBox />
                             <Editor />
                        </Container>
                    </div>
                </div>
            </Box> */}

            {/* Samll Screen Display for Chat and Table */}
            <Box component='div' display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}>
                <Container>
                    <div style={{ display: 'flex', paddingBottom: '1rem', paddingLeft: '.5rem' }}>
                        <ChatBubbleOutlineIcon />
                        <Typography variant='body1' style={{ fontWeight: 'bold', paddingLeft: '1rem' }}>Live Message</Typography>
                    </div>
                    <Divider orientation='horizontal' />
                    </Container>
                    <TableContainer className={classes.table}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableBody>
                                {chat.map((single, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <Chat single={single} />
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className={classes.chatbox}>
                        <Container>
                             <ChatBox />
                             <Editor />
                        </Container>
                    </div>
            </Box>

            <Box component='div' className={classes.footer}>
                <Container>
                    <div style={{ display: 'flex'}}>
                    <BusinessCenterIcon style={{ color: '#03053D'}} />
                <Typography variant='span' style={{paddingLeft: '1rem'}}>
                    Order according chat
                </Typography>
                    </div>
                <Grid container>
                    {loading && <h5>Loading...</h5>}
                    {error && <h5>{error}</h5>}
                    {listOfProducts}
                </Grid>
                </Container>
            </Box>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        board: state.board.data,
        chat: state.chat.data
    }
}

export default connect(mapStateToProps)(Dashboard)