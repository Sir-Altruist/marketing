import React from 'react';
import { Box, Container, Grid, Card, TextField, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Attendant from '../assets/home/contact.png'
import CustomHeader2 from '../components/Basic/CustomHeader/CustomHeader2'
import CustomFooter2 from '../components/Basic/CustomFooter/CustomFooter2'



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#C4C4C41A',
        paddingTop: '3rem',
    },
    img: {
        width: '100%',
        minHeight: '60vh',
        
    },
    card: {
       width: '90%',
       minHeight: '60vh',
       margin: '5rem auto',
       borderRadius: '5%',
       marginLeft: '10%'
    },
    form: {
        margin: '2rem 0 2rem 0'
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'inter'
    },
    field: {
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: "#E8E8E880"
    },
    btn: {
        backgroundColor: '#6056D7',
        textTransform: 'inherit',
        color: '#ffffff',
        width: '8rem',
        '&:hover': {
            backgroundColor: '#6056D7',
        }
    }
})
function Contact() {
    const classes = useStyles()
    return (
        <>
        <CustomHeader2 />
        <Box component='div' className={classes.root}>
            <Container>
            <Grid container>
                    <Grid item xs={12} md={6} data-aos="fade-right" data-aos-delay='600'>
                    <img src={Attendant} alt='contact' className={classes.img} />
            </Grid>
                    <Grid item xs={12} md={6} data-aos="fade-left" data-aos-delay='1000'>
                        <Card className={classes.card}>
                            <Container className={classes.form}>
                            <Typography variant='h5' className={classes.title}>How We Can Help?</Typography>
                            <form noValidate autoComplete='false'>
                                <TextField 
                                size='small' 
                                fullWidth 
                                label='Email' 
                                variant='outlined'
                                className={classes.field} 
                                />
                                <TextField 
                                size='small' 
                                fullWidth 
                                label='Subject'
                                 variant='outlined'
                                 className={classes.field} 
                                 />
                                <TextField 
                                size='small' 
                                fullWidth 
                                label='Description' 
                                variant='outlined'
                                multiline
                                rows={4}
                                className={classes.field} 
                                />
                                <div style={{ textAlign: 'right', marginTop: '1rem'}}>
                                <Button className={classes.btn}>Submit</Button>
                                </div>
                            </form>
                            </Container>
                        </Card>
                    </Grid>
                </Grid>
             </Container>
        </Box>
        <CustomFooter2 />
        </>
    )
}

export default Contact
