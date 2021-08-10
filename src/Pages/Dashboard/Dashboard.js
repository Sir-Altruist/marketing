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
import { userProductList } from '../../actions/productAction'
import InfoAlert from '../../components/Basic/Alerts/Products/InfoAlert'

const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh'
    },
    chat: {
        display: 'flex',
        marginBottom: '3rem'
    },
    table: {
        width: '20%'
    },
    chatbox: {
        width: '80%'
    },
    footer: {
        display: 'flex',
        marginBottom: '3rem'
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
}, [clientInfo, history, user, user._id, dispatch])

let listOfProducts = products.length > 0 ? 
        <>
        {products &&  products.slice(0, 2).map((product, i) => {
              return (
                <Grid item xs={12} md={6} key={i}>
                    <Footer product={product} />
                </Grid>
              )
          })}
      </> : <InfoAlert />
    return (
        <div className={classes.root}>
            <Head />
            <Box component='div'>
                <Container>
                    <div style={{ display: 'flex', paddingBottom: '1rem', paddingLeft: '.5rem' }}>
                        <ChatBubbleOutlineIcon />
                        <Typography variant='body1' style={{ fontWeight: 'bold', paddingLeft: '1rem' }}>Live Message</Typography>
                    </div>
                    <Divider orientation='horizontal' />
                    </Container>
                <div className={classes.chat}>
                    <TableContainer className={classes.table}>
                        <Table>
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