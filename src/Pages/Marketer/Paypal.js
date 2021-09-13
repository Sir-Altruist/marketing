import React, { useEffect } from 'react'
import { Box, Container, Typography, Card, CardActionArea, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { details } from '../../actions/marketerAction'


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
        color: '#ffffff'
    },
    btn: {
        textTransform: 'inherit',
        marginRight: '1rem'
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

function MarketerPaypal() {
    const classes = useStyles()


    const history = useHistory()
    const dispatch = useDispatch()
    const marketerLogin = useSelector(state => state.marketerLoginReducer)
    const {marketerInfo} = marketerLogin

    useEffect(() => {
        if(!marketerInfo){
            history.push('/login/marketer')
        } else {
         dispatch(details())
        }
    }, [history, marketerInfo, dispatch])

    return (
        <div>
            <Box component='div' className={classes.root}>
                <Container style={{ marginTop: '3rem'}}>
                <Typography variant='span' style={{ fontWeight: 'bold'}}>Payment Methods</Typography>
                <Card className={classes.card} data-aos='fade-up' data-aos-offset='0'>
                    <Container className={classes.container}>
                    <CardActionArea>
                        <Button 
                        variant='outlined' 
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple 
                        className={classes.btn}
                        onClick={() => history.push('/marketer/payment')}
                        >
                            Card
                        </Button>
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

export default MarketerPaypal
