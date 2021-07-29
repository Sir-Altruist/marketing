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

function Dashboard({ chat, footer }) {
    const classes = useStyles()

    const history = useHistory()
    const dispatch = useDispatch()
    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin
    const clientDetails = useSelector(state => state.clientDetailsReducer)
    const { user } = clientDetails

    useEffect(() => {
        const client = JSON.parse(localStorage.getItem('clientInfo')) 
        console.log(client)
        if(!clientInfo){
            history.push('/login/client')
        } else {
            if(!user._id){
                dispatch(details(user._id))
            } else {
                history.push(`/dashboard/client/${user._id}`)
            }
        }
    }, [user._id, clientInfo, history, dispatch])
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
                <Grid container data-aos='fade-right' data-aos-offset='200'>
                    {footer.map((single, i) => {
                        return(
                            <Grid item xs={12} md={6} key={i}>
                                <Footer single={single} />
                            </Grid>
                        )
                    })}
                </Grid>
                </Container>
            </Box>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        board: state.board.data,
        chat: state.chat.data,
        footer: state.footer.data
    }
}
export default connect(mapStateToProps)(Dashboard)
