import React, { useState } from 'react'
import { Container, Card, Box, Typography, Button, Checkbox } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import {CustomInput, PasswordInputs} from '../../components/Basic/CustomInput';
import { indigo } from '@material-ui/core/colors'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/clientAction'
import ErrorAlert from '../../components/Basic/Alerts/Client/Register/ErrorAlert';
import SuccessAlert from '../../components/Basic/Alerts/Client/Register/SuccessAlert';
import CustomHeader2 from '../../components/Basic/CustomHeader/CustomHeader2';
import CustomFooter2 from '../../components/Basic/CustomFooter/CustomFooter2';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#C4C4C41A',
        width: '100%',
        minHeight: '180vh',
        position: 'relative'
    },
    loginCard: {
        position: 'absolute',
        top: '7rem',
        marignBottom: '10rem',
        left: '30%',
        right: '30%',
        width: '40%',
        minHeight: '80%',
        borderRadius: '5%'
    },
    loginCardS: {
        position: 'absolute',
        top: '7rem',
        marignBottom: '4rem',
        left: '20%',
        right: '20%',
        width: '60%',
        minHeight: '80%',
        borderRadius: '5%'
    },
    loginCardXs: {
        position: 'absolute',
        top: '7rem',
        marignBottom: '4rem',
        left: '10%',
        right: '10%',
        width: '80%',
        minHeight: '80%',
        borderRadius: '5%'
    },
    headText: {
        font: 'inter',
        paddingTop: '2rem',
        paddingLeft: '1rem'
    },
    buttons: {
        paddingTop: '2rem',
        textAlign: 'center'
    },
    buttons1: {
        paddingTop: '2rem',
        display: 'flex'
    },
    btn: {
        textTransform: 'inherit',
        backgroundColor: '#F6F6F6',
        fontWeight: 'bold'
    },
    icon: {
        color: '#6056D7'
    },
    form: {
        marginTop: '2rem'
    },
    field: {
        marginTop: '1rem',
        marginBottom: '1rem',
        background: '#F6F6F6'

    },
    check: {
        display: 'flex',
        flexDirection: 'row'
    },
    toggleParent: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row'
    },
    loginBtn: {
        width: '15rem',
        margin: '1.5rem 0 0 0'
    },
    active: {
        border: '1px solid #6056D7',
        textTransform: 'inherit',
        backgroundColor: '#F6F6F6',
        fontWeight: 'bold'
    },
    footer: {
        position: 'absolute',
        width: '100%',
        top: '70rem'
    }
})

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(indigo[400]),
      backgroundColor: indigo[400],
      '&:hover': {
        backgroundColor: indigo[700],
      },
    },
  }))(Button);

function ClientLogin() {
    const classes = useStyles()

    const[checked, setChecked] = useState(false)
    const handleCheck = e => {
        setChecked(e.target.checked)
    }

    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const clientRegister = useSelector(state => state.clientRegisterReducer)
    const { loading, error, clientInfo } = clientRegister

    const onSubmit = values  => {
      const { name, username, email, phone, country, password, confirm } = values
      dispatch(register( name, username, email, phone, country, password, confirm ))
    };

    const validate = values => {
        const errors = {}
        if(!values.name) {
            errors.name = 'This field is required'
        }
        if(!values.username) {
            errors.username = 'This field is required'
        }
        if(!values.email) {
            errors.email = 'This field is required'
        }
        if(!values.phone) {
            errors.phone = 'This field is required'
        }
        if(!values.country) {
            errors.country = 'This field is required'
        }
        if(!values.password){
            errors.password = 'This field is required'
        }
        if(!values.confirm){
            errors.confirm = 'This field is required'
        }
        if(values.password !== values.confirm){
            errors.confirm = 'Passwords do not match!'
        }
        return errors;
    }

    return (
    <>
        <CustomHeader2 />
        <Box component='div' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} className={classes.root}>
                <Card data-aos="fade-up" data-aos-delay='700'  className={classes.loginCard}>
                    <Container>
                    <Typography variant='h3' className={classes.headText}>Register as</Typography>
                    <div className={classes.buttons}>
                        <Button
                        variant='contained'
                        startIcon={<PersonIcon className={classes.icon}  />}
                        className={location.pathname === '/register/client' ? classes.active : classes.btn}
                        style={{marginRight: '2rem'}}
                        disableRipple
                        disableElevation
                        onClick={() => history.push('/register/client')}
                        >
                            Merchant
                        </Button>
                        <Button
                        variant='contained'
                        startIcon={<BusinessIcon className={classes.icon}  />}
                        className={location.pathname === '/register/marketer' ? classes.active : classes.btn}
                        style={{marginLeft: '2rem'}}
                        disableRipple
                        disableElevation
                        onClick={() => history.push('/register/marketer')}
                        >
                            Marketer
                        </Button>
                    </div>
                    <div>
                       <Form
                       onSubmit={onSubmit}
                       validate={validate}
                       render={({ handleSubmit }) => (
                           <Container>
                           <form onSubmit={handleSubmit} noValidate autoComplete='off' className={classes.form}>
                               {loading && <h5>Loading...</h5>}
                               {error && <ErrorAlert />}
                               {clientInfo && <SuccessAlert />}
                               <div>
                                    <label>Full Name</label>
                                    <br />
                                    <Field 
                                    name="name" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                               <div>
                                    <label>Username</label>
                                    <br />
                                    <Field 
                                    name="username" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <br />
                                    <Field 
                                    name="email" 
                                    component={CustomInput}
                                    type='email'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <br />
                                    <Field 
                                    name="phone" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div><div>
                                    <label>Country</label>
                                    <br />
                                    <Field 
                                    name="country" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                               <div>
                                    <label>Password</label>
                                    <br />
                                    <Field 
                                    name="password" 
                                    component={PasswordInputs}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <br />
                                    <Field 
                                    name="confirm" 
                                    component={PasswordInputs}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                               <div className={classes.check}>
                               <Checkbox
                                    checked={checked}
                                    onChange={handleCheck}
                                    color='primary'
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <Typography variant='body2' style={{ paddingTop: '.7rem'}}>
                                    By creating an account, you agree to <br /> 
                                    <Link to='#'>Conditions of Use</Link> and <Link to='#'>Privacy Notice</Link>
                                </Typography>
                               </div>
                               <div style={{ textAlign: 'center'}}>
                               <ColorButton variant='contained' 
                               color='primary' 
                               className={classes.loginBtn} 
                               type='submit' 
                               >
                                   Register
                                </ColorButton>
                               </div>
                           </form>
                           </Container>
                       )} /> 
                    </div>
                    </Container>
                </Card>
                <div className={classes.footer}>
                <CustomFooter2 />
                </div>
        </Box>

        {/* small screen */}
        <CustomHeader2 />
        <Box component='div' display={{ xs: 'none', sm: 'block', md: 'none', lg: 'none' }} className={classes.root}>
                <Card data-aos="fade-up" data-aos-delay='700' className={classes.loginCardS}>
                    <Container>
                    <Typography variant='h3' className={classes.headText}>Register as</Typography>
                    <div className={classes.buttons}>
                        <Button
                        variant='contained'
                        startIcon={<PersonIcon className={classes.icon}  />}
                        className={location.pathname === '/register/client' ? classes.active : classes.btn}
                        style={{marginRight: '2rem'}}
                        disableRipple
                        disableElevation
                        onClick={() => history.push('/register/client')}
                        >
                            Merchant
                        </Button>
                        <Button
                        variant='contained'
                        startIcon={<BusinessIcon className={classes.icon}  />}
                        className={location.pathname === '/register/marketer' ? classes.active : classes.btn}
                        style={{marginLeft: '2rem'}}
                        disableRipple
                        disableElevation
                        onClick={() => history.push('/register/marketer')}
                        >
                            Marketer
                        </Button>
                    </div>
                    <div>
                    <Form
                       onSubmit={onSubmit}
                       validate={validate}
                       render={({ handleSubmit }) => (
                           <Container>
                           <form onSubmit={handleSubmit} noValidate autoComplete='off' className={classes.form}>
                           {loading && <h5>Loading...</h5>}
                               {error && <ErrorAlert />}
                               {clientInfo && <SuccessAlert />}
                               <div>
                                    <label>Full Name</label>
                                    <br />
                                    <Field 
                                    name="name" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                               <div>
                                    <label>Username</label>
                                    <br />
                                    <Field 
                                    name="username" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <br />
                                    <Field 
                                    name="email" 
                                    component={CustomInput}
                                    type='email'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <br />
                                    <Field 
                                    name="phone" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Country</label>
                                    <br />
                                    <Field 
                                    name="country" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                               <div>
                                    <label>Password</label>
                                    <br />
                                    <Field 
                                    name="password" 
                                    component={PasswordInputs}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <br />
                                    <Field 
                                    name="confirm" 
                                    component={PasswordInputs}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                               <div className={classes.check}>
                               <Checkbox
                                    checked={checked}
                                    onChange={handleCheck}
                                    color='primary'
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <Typography variant='body2' style={{ paddingTop: '.7rem'}}>
                                    By creating an account, you agree to <br /> 
                                    <Link to='#'>Conditions of Use</Link> and <Link to='#'>Privacy Notice</Link>
                                </Typography>
                               </div>
                               <div style={{ textAlign: 'center'}}>
                               <ColorButton variant='contained' 
                               color='primary' 
                               className={classes.loginBtn} 
                               type='submit' 
                               >
                                   Register
                                </ColorButton>
                               </div>
                           </form>
                           </Container>
                       )} /> 
                    </div>
                    </Container>
                </Card>
            <div className={classes.footer}>
            <CustomFooter2 />
            </div>
        </Box>


        {/* Extra small screen */}
        <CustomHeader2 />
        <Box component='div' display={{ xs: 'block', sm: 'none', md: 'none', lg: 'none' }} className={classes.root}>
                <Card data-aos="fade-up" data-aos-delay='700' className={classes.loginCardXs}>
                    <Container>
                    <Typography variant='h3' className={classes.headText}>Register as</Typography>
                    <div className={classes.buttons}>
                        <Button
                        variant='contained'
                        startIcon={<PersonIcon className={classes.icon}  />}
                        className={location.pathname === '/register/client' ? classes.active : classes.btn}
                        style={{marginRight: '2rem'}}
                        disableRipple
                        disableElevation
                        onClick={() => history.push('/register/client')}
                        >
                            Merchant
                        </Button>
                        <Button
                        variant='contained'
                        startIcon={<BusinessIcon className={classes.icon}  />}
                        className={location.pathname === '/register/marketer' ? classes.active : classes.btn}
                        style={{marginLeft: '2rem'}}
                        disableRipple
                        disableElevation
                        onClick={() => history.push('/register/marketer')}
                        >
                            Marketer
                        </Button>
                    </div>
                    <div>
                    <Form
                       onSubmit={onSubmit}
                       validate={validate}
                       render={({ handleSubmit }) => (
                           <Container>
                           <form onSubmit={handleSubmit} noValidate autoComplete='off' className={classes.form}>
                           {loading && <h5>Loading...</h5>}
                               {error && <ErrorAlert />}
                               {clientInfo && <SuccessAlert />}
                               <div>
                                    <label>Full Name</label>
                                    <br />
                                    <Field 
                                    name="name" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                               <div>
                                    <label>Username</label>
                                    <br />
                                    <Field 
                                    name="username" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <br />
                                    <Field 
                                    name="email" 
                                    component={CustomInput}
                                    type='email'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <br />
                                    <Field 
                                    name="phone" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Country</label>
                                    <br />
                                    <Field 
                                    name="country" 
                                    component={CustomInput}
                                    type='text'
                                    required
                                    className={classes.field} 
                                    />
                                </div>
                               <div>
                                    <label>Password</label>
                                    <br />
                                    <Field 
                                    name="password" 
                                    component={PasswordInputs}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <br />
                                    <Field 
                                    name="confirm" 
                                    component={PasswordInputs}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                               <div className={classes.check}>
                               <Checkbox
                                    checked={checked}
                                    onChange={handleCheck}
                                    color='primary'
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <Typography variant='body2' style={{ paddingTop: '.7rem'}}>
                                    By creating an account, you agree to <br /> 
                                    <Link to='#'>Conditions of Use</Link> and <Link to='#'>Privacy Notice</Link>
                                </Typography>
                               </div>
                               <div style={{ textAlign: 'center'}}>
                               <ColorButton variant='contained' 
                               color='primary' 
                               className={classes.loginBtn} 
                               type='submit' 
                               >
                                   Register
                                </ColorButton>
                               </div>
                           </form>
                           </Container>
                       )} /> 
                    </div>
                    </Container>
                </Card>
            <div className={classes.footer}>
            <CustomFooter2 />
            </div>
        </Box>
        </>
    )
}

export default ClientLogin
