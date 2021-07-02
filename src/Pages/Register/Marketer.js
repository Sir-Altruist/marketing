import React, { useState } from 'react'
import { Container, Card, Box, Typography, Button, Checkbox } from '@material-ui/core'
// import { Select } from 'material-ui-react-final-form'
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import {CustomInput, PasswordInput, CategoryInput } from '../../components/Basic/CustomInput';
import { indigo } from '@material-ui/core/colors'
import { Link, useHistory, useLocation } from 'react-router-dom'

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
        marignBottom: '4rem',
        left: '30%',
        right: '30%',
        width: '40%',
        minHeight: '85%',
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
        margin: '1rem 0 2rem 0'
    },
    active: {
        border: '1px solid #6056D7',
        textTransform: 'inherit',
        backgroundColor: '#F6F6F6',
        fontWeight: 'bold'
    },
    category: {
        width: '100%'
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

function Marketer() {
    const classes = useStyles()

    const[checked, setChecked] = useState(false)
    const handleCheck = e => {
        setChecked(e.target.checked)
    }

    const onSubmit = (values)  => {
        try {
            console.log(values)
            history.push('/login/marketer')
        }
        catch (e) {
            console.log(error => error)
        }
    };

    const validate = values => {
        const errors = {}
        if(!values.username) {
            errors.username = 'Username is required'
        }
        if(!values.email){
            errors.email = 'Email is required'
        }
        if(!values.category){
            errors.category = 'Category is required'
        }
        if(!values.password){
            errors.password = 'Password is required'
        }
        if(!values.confirm){
            errors.confirm = 'This field is required'
        }
        if(values.password !== values.confirm){
            errors.confirm = 'Passwords do not match'
        }
        return errors;
    }
    
    const history = useHistory()
    const location = useLocation()
    return (
    <>
        <Box component='div' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} className={classes.root}>
                <Card className={classes.loginCard} data-aos="fade-up" data-aos-delay='700'>
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
                            Client
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
                               <div>
                                    <label>Marketer Name</label>
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
                                    <label>Website (if any)</label>
                                    <br />
                                    <Field 
                                    name="website" 
                                    component={CustomInput}
                                    type='text'
                                    className={classes.field}
                                    />
                                </div>
                                <div>
                                    <label>Category</label>
                                    <br />
                                    <Field 
                                    name="category" 
                                    component={CategoryInput}
                                    type='select'
                                    className={classes.field}
                                    />
                                </div>
                               <div>
                                    <label>Password</label>
                                    <br />
                                    <Field 
                                    name="password" 
                                    component={PasswordInput}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                                <div>
                                    <label>Re-Password</label>
                                    <br />
                                <Field 
                                    name="confirm" 
                                    component={PasswordInput}
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
                                 <Typography variant='body2' style={{ padding: '1rem 0'}}>
                                    By creating an account, you agree to <br />
                                    <Link to='#'> Conditions of Use</Link> and <Link to='#'>Privacy Notice</Link>
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
        </Box>

        {/* small screen */}
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
                            Client
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
                               <div>
                                    <label>Marketer Name</label>
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
                                    <label>Website (if any)</label>
                                    <br />
                                    <Field 
                                    name="website" 
                                    component={CustomInput}
                                    type='text'
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Category</label>
                                    <br />
                                    <Field 
                                    name="category" 
                                    component={CategoryInput}
                                    type='select'
                                    className={classes.field}
                                    />
                                </div>
                               <div>
                                    <label>Password</label>
                                    <br />
                                    <Field 
                                    name="password" 
                                    component={PasswordInput}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                                <div>
                                    <label>Re-Password</label>
                                    <br />
                                <Field 
                                    name="confirm" 
                                    component={PasswordInput}
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
                                 <Typography variant='body2' style={{ padding: '1rem 0'}}>
                                    By creating an account, you agree to <br />
                                    <Link to='#'> Conditions of Use</Link> and <Link to='#'>Privacy Notice</Link>
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
        </Box>


        {/* Extra small screen */}
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
                            Client
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
                               <div>
                                    <label>Marketer Name</label>
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
                                    <label>Website (if any)</label>
                                    <br />
                                    <Field 
                                    name="website" 
                                    component={CustomInput}
                                    type='text'
                                    className={classes.field} 
                                    />
                                </div>
                                <div>
                                    <label>Category</label>
                                    <br />
                                    <Field 
                                    name="category" 
                                    component={CategoryInput}
                                    type='select'
                                    className={classes.field}
                                    />
                                </div>
                               <div>
                                    <label>Password</label>
                                    <br />
                                    <Field 
                                    name="password" 
                                    component={PasswordInput}
                                    required
                                    className={classes.field}
                                    />
                                </div>
                                <div>
                                    <label>Re-Password</label>
                                    <br />
                                <Field 
                                    name="confirm" 
                                    component={PasswordInput}
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
                                 <Typography variant='body2' style={{ padding: '1rem 0'}}>
                                    By creating an account, you agree to <br />
                                    <Link to='#'> Conditions of Use</Link> and <Link to='#'>Privacy Notice</Link>
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
        </Box>
        </>
    )
}

export default Marketer
