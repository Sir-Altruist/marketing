import React, { useEffect } from 'react'
import Head from '../../../components/Head'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography, Card, Grid, TableContainer, Table, TableBody, TableRow, TableCell, TableHead,  Paper } from '@material-ui/core'
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateOutlined from '@material-ui/icons/CreateOutlined';
import LocalMallOutlined from '@material-ui/icons/LocalMallOutlined';
import Visa from '../../../assets/home/visa.png'
import Order from '../../../components/Order'
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { details } from '../../../actions/clientAction'

const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh'
    },
    card: {
        marginTop: '1rem'
    },
    content: {
        margin: '2rem auto'
    },
   space: {
       paddingLeft: '2rem'
   },
   order: {
       marginTop: '5rem'
   },
   table: {
       marginTop: '1rem',
       marginBottom: '3rem'
   }
})


function Status({ order }) {
    const classes = useStyles()

    const history = useHistory()
    const dispatch = useDispatch()
    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin
    const clientDetails = useSelector(state => state.clientDetailsReducer)
    const { user } = clientDetails

    useEffect(() => {
        if(!clientInfo){
            history.push('/login/client')
        } else {
            if(!user._id){
                dispatch(details(user._id))
            } else {
                history.push(`/order/status/${user._id}`)
            }
        }
    }, [history, clientInfo, user._id, dispatch])

    return (
        <div className={classes.root}>
            <Head />
            <Box component='div'>
                <Container>
                    <div style={{ display: 'flex', paddingLeft: '1rem'}}>
                    <PaymentIcon />
                    <Typography variant='body2' style={{paddingLeft: '1rem'}}>Payment Info</Typography>
                    </div>
                    <Card className={classes.card} data-aos='fade-up'>
                        <Container>
                        <Grid container className={classes.content}>
                            <Grid item xs={12} md={5} className={classes.space}>
                                <div>
                                <Typography variant='body2'>Name</Typography>
                                <Typography variant='body1' style={{ fontWeight: 'bold', paddingTop: '1rem'}}>
                                    Tom Clay
                                </Typography>
                                </div>
                                <div style={{ marginTop: '2rem'}}>
                                <Typography variant='body2'>Card Number</Typography>
                                <Typography variant='body1' style={{ fontWeight: 'bold', paddingTop: '1rem'}}>
                                    1234 - 1234 - 1234 - 1234
                                </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={6} md={3}>
                            <div>
                                <Typography variant='body2'>Type of Card</Typography>
                                <Typography variant='body1' style={{ fontWeight: 'bold', paddingTop: '1rem'}}>
                                    Debit Card
                                </Typography>
                            </div>
                            <div style={{ marginTop: '2rem'}}>
                                <Typography variant='body2'>Bank</Typography>
                                <img src={Visa} alt='visa' />
                                </div>
                            </Grid>
                                <Grid item xs={6} md={3} className={classes.space}>
                                    <div style={{ display: 'flex', cursor: 'pointer'}}>
                                    <AddCircleOutlineIcon />
                                    <Typography variant='body2' style={{paddingLeft: '1rem'}}>Add</Typography>
                                    </div>
                                    <div style={{ display: 'flex', paddingTop: '3rem', cursor: 'pointer'}}>
                                    <CreateOutlined />
                                    <Typography variant='body2' style={{paddingLeft: '1rem'}}>Edit</Typography>
                                    </div>
                                    <div style={{ display: 'flex', paddingTop: '3rem', cursor: 'pointer'}}>
                                    <DeleteForeverIcon  />
                                    <Typography variant='body2' style={{paddingLeft: '1rem'}}>Delete</Typography>
                                    </div>
                                </Grid>
                        </Grid>
                        </Container>
                    </Card>
                </Container>
            </Box>
            <Box component='div' className={classes.order}>
                <Container>
                <div style={{ display: 'flex', paddingLeft: '1rem'}}>
                    <LocalMallOutlined />
                    <Typography variant='body2' style={{paddingLeft: '1rem'}}>Overall Order</Typography>
                </div>
                <TableContainer component={Paper} className={classes.table} data-aos='fade-right'>
                    <Table>
                        <Container>
                            
                        </Container>
                    <TableHead>
                <TableRow>
                    <TableCell style={{ fontWeight: 'bold'}}>
                         Paid
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold'}}>
                         Name
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold'}}>
                         Company
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold'}}>
                         Type
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold'}}>
                         Amount
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold'}}>
                         Staus
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold', textAlign: 'center'}}>
                         Option
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {order.map((single, i) => {
                            return(
                                <Order single={single} key={i} />
                            )
            })}
            </TableBody>
                    </Table>
                </TableContainer>
                </Container>

            </Box>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        order: state.order.data
    }
}

export default connect(mapStateToProps)(Status)
