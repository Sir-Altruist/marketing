import React from 'react';
import { Box, Grid, Typography, Container, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Google from '../../../assets/icons/google.png';
import Apple from '../../../assets/icons/apple.png';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: '70vh',
        marginTop: '10rem'
    },
    brand: {
       fontSize: '2rem',
       fontWeight: 'bold'
    },
    text: {
        paddingTop: '3rem'
    },
    footer: {
        paddingTop: '2rem'
    },
    subscribe: {
     marginLeft: theme.spacing(3)
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2rem'
    },
    field: {
        height: '2rem'
    },
    button: {
        backgroundColor: '#A6A6A6',
        color: '#ffffff',
        textTransform: 'inherit',
        '&:hover': {
            backgroundColor: '#A6A6A6'
        }
    },
    icons: {
        marginTop: '3rem'
    }
}))
function CustomFooter() {

    let date = new Date()
    let year = date.getFullYear()

    const classes = useStyles()
    return (
        <Box component='div' className={classes.root}>
            <Container>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography variant='body1' component='p' className={classes.brand}>Lilo</Typography>
                    <Typography variant='body2' color="textSecondary" className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
                    Fusce hendrerit mi mauris, nec lacinia tortor venenatis sit amet. <br /> 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada <br /> fames ac turpis egestas.
                    </Typography>
                    <Typography variant='body2' className={classes.footer}>Privacy Ploicy</Typography>
                    <Typography variant='body2'>Terms and Condition</Typography>
                    <Typography variant='body2' className={classes.footer}>&copy; {year} All Rights Reserved</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='body2' component='p' className={classes.brand}>Subscribe</Typography>
                    <form noValidate autoComplete='off' className={classes.form}>
                    <TextField label='Enter Email' variant='outlined' fullWidth size='small' />
                    <Button variant='contained' disableElevation className={classes.button} disableRipple>Submit</Button>
                    </form>
                    <div className={classes.icons}>
                        <img src={Google} alt='google-badge' />
                        <img src={Apple} alt='apple-badge' style={{ marginLeft: '1rem'}} />
                    </div>
                </Grid>
            </Grid>
            </Container>
        </Box>
    )
}

export default CustomFooter
