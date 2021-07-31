import React, { useEffect } from 'react'
import PaymentHeader from '../../../components/PaymentHead'
import { Box, Container, Typography, Card, CardActionArea, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { details } from '../../../actions/clientAction'

const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh'
    },
    card: {
        margin: '1rem'
    },
    container: {
        marginTop: '2rem'
    },
    paypal: {
        textTransform: 'inherit',
        color: '#ffffff',
        marginRight: '1rem'
    },
    btn: {
        textTransform: 'inherit'
    },
    form: {
        marginBottom: '5rem'
    },
    submit: {
        textTransform: 'inherit', 
        color: '#ffffff',
        margin: '2rem 0'
    }
})

function Payment() {
    const classes = useStyles()


    const history = useHistory()
    const dispatch = useDispatch()
    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin

    useEffect(() => {
        if(!clientInfo){
            history.push('/login/client')
        } else {
         dispatch(details())
        }
    }, [history, clientInfo, dispatch])

    return (
        <div>
            <PaymentHeader />
            <Box component='div' className={classes.root}>
                <Container style={{ marginTop: '3rem'}}>
                <Typography variant='span' style={{ fontWeight: 'bold'}}>Payment Methods</Typography>
                <Card className={classes.card} data-aos='fade-up' data-aos-offset='0'>
                    <Container className={classes.container}>
                    <CardActionArea>
                        <Button 
                        variant='contained' 
                        color='primary'
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple 
                        className={classes.paypal}
                        onClick={() => history.push('#')}
                        >
                            Paypal
                        </Button>
                        <Button 
                        variant='outlined'
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple 
                        className={classes.btn}
                        onClick={() => history.push('/payment/card/:id')}
                        >
                            Card
                        </Button>
                    </CardActionArea>
                    <Typography variant='body2' color='textSecondary' style={{ paddingTop: '1rem'}}>
                        This is the <span style={{ fontWeight: 'bold', color: '#000000'}}>paypal address</span> that will be used to pay you every month
                    </Typography>
                    <form autoComplete='off' noValidate className={classes.form}>
                        <Typography variant='body2' style={{ padding: '2rem 0 1rem 0', fontWeight: 'bold'}}>Paypal Email Address</Typography>
                        <TextField fullWidth size='small' placeholder='you@example.com' variant='outlined'/>
                        <div style={{ textAlign: 'right'}}>
                            <Button variant='contained' color='primary' className={classes.submit}>Save Changes</Button>
                        </div>
                    </form>
                    </Container>
                </Card>
                </Container>
            </Box>
        </div>
    )
}

export default Payment
