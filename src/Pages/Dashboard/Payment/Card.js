import React, { useEffect } from 'react'
import PaymentHeader from '../../../components/PaymentHead'
import { Box, Container, Typography, Card, CardActionArea, Button, Grid, Divider } from '@material-ui/core'
import { CustomInput, PasswordInputs } from '../../../components/Basic/CustomInput'
import { Form, Field } from 'react-final-form'
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
        margin: '2rem 1rem 2rem 0'
    },
    field: {
        marginBottom: '1rem'
    },
    expiry1: {
        width: '20%'
    },
    expiry2: {
        width: '20%'
    }
})

function CreditCard() {
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

    const onSubmit = values  => {
        try {
            console.log(values)
            history.push('/')
        }
        catch (e) {
            console.log(error => error)
        }
    };

    const validate = values => {
        const errors = {}
        if(!values.number) {
            errors.number = 'This is required'
        }
        if(!values.month) {
            errors.month = 'This field is required'
        }
        if(!values.year) {
            errors.year = 'This field is required'
        }
        if(!values.month && !values.year) {
            errors.month = ''
            errors.year = 'Fill expiry date'
        }
        if(!values.security){
            errors.security = 'This field is required'
        }
        if(!values.zip){
            errors.zip = 'This field is required'
        }
        return errors;
    }
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
                            Card
                        </Button>
                        <Button 
                        variant='outlined'
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple 
                        className={classes.btn}
                        onClick={() => history.push('/client/payment/paypal')}
                        >
                            Paypal
                        </Button>
                    </CardActionArea>
                    <Typography variant='body2' color='textSecondary' style={{ paddingTop: '1rem'}}>
                        This is the <span style={{ fontWeight: 'bold', color: '#000000'}}>card number</span> that will be used to pay you every month
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                        <div>
                        <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit}) => (
                            <Container>
                                <form autoComplete='off' onSubmit={handleSubmit} noValidate className={classes.form}>
                                <Typography variant='body1' style={{ padding: '2rem 0 1rem 0', fontWeight: 'bold'}}>Card Information</Typography>
                                <div>
                                    <Typography variant='body2' color='textSecondary'>Card Number</Typography>
                                    <br />
                                    <Field 
                                    name="number" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                <Typography variant='body2' color='textSecondary'>Expiry Date</Typography>
                                    <br />
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: '1rem'
                                    }}>
                                    <Field 
                                    name="month" 
                                    component={CustomInput}
                                    type='text'
                                    placeholder='MM'
                                    required
                                    className={classes.expiry1} 
                                    />
                                    <Divider orientation='vertical' flexItem light variant='middle'/>
                                    <Field 
                                    name="year" 
                                    component={CustomInput}
                                    type='text'
                                    placeholder='YY'
                                    required
                                    className={classes.expiry2} 
                                    />
                                    </div>
                                </div>
                               <div>
                               <Typography variant='body2' color='textSecondary'>Security Code</Typography>
                                    <Field 
                                    name="security" 
                                    component={PasswordInputs}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                                <div>
                                <Typography variant='body2' color='textSecondary'>Zip Code</Typography>
                                    <br />
                                    <Field 
                                    name="zip" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field}
                                    />
                               </div>
                                </form>
                            </Container>
                        )} />
                    </div>
                        </Grid>
                        <Grid item xs={12} md={6}></Grid>
                        </Grid>
                    </Container>
                </Card>
                <div style={{ textAlign: 'right', marginBottom: '5rem', marignRight: '3rem'}}>
                            <Button variant='contained' color='primary' className={classes.submit}>Save Changes</Button>
                </div>
                </Container>
            </Box>
        </div>
    )
}

export default CreditCard
