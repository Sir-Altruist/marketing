import React from 'react'
import LocalMallOutlined from '@material-ui/icons/LocalMallOutlined'
import CreateOutlined from '@material-ui/icons/CreateOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import Spec from '../../../assets/icons/mirror.svg'
import Head from '../../../components/Head'
import { Box, Typography, Container, Card, Grid, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles' 

const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh'
    },
    card: {
        marginTop: '1rem',
        marginBottom: '2rem'
    },
    content: {
        margin: '2rem auto'
    },
    desc: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '2rem'
    },
    details: {
        paddingTop: '2rem',
        paddingLeft: '2rem'
    },
    icons: {
        paddingLeft: '10rem',
        cursor: 'pointer'
    }
})
function Tracking() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Head />
            <Box component='div'>
                <Container>
                <div style={{ display: 'flex', paddingLeft: '1rem'}}>
                    <LocalMallOutlined />
                    <Typography variant='body2' style={{paddingLeft: '1rem'}}>Order</Typography>
                </div>
                <Card className={classes.card} data-aos='fade-right'>
                    <Container>
                        <Grid container className={classes.content} >
                            <Grid item xs={12} md={8}>
                                <div className={classes.desc}>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Name</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        Marketing
                                    </Typography>
                                </div>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Company</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        Wilmar
                                    </Typography>
                                </div>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Type</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        Service
                                    </Typography>
                                </div>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Amount</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        &#36;100
                                    </Typography>
                                </div>
                                <div>
                                    <Typography varaint='body2' style={{ fontSize: '12px'}}>Status</Typography>
                                    <Typography varaint='body1' style={{ fontWeight: 'bold', paddingTop: '.5rem'}}>
                                        Paid
                                    </Typography>
                                </div>
                                </div>
                                <div className={classes.details}>
                                <Typography variant='body2'>Description</Typography>
                                <Typography variant='body2' style={{paddingTop: '1rem'}} color='textSecondary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nisl eu blandit sagittis, 
                                diam arcu fermentum ex, a eleifend eros dolor ultrices lorem. Pellentesque habitant morbi tristique 
                                senectus et netus et malesuada fames ac turpis egestas. Mauris eu nunc vitae lectus consectetur volutpat. 
                                Nam euismod vitae tortor ac ultricies. Suspendisse suscipit eu nisl placerat faucibus. Sed tempus tristique faucibus. 
                                Nunc euismod, sem in lacinia suscipit, sapien enim finibus lacus, cursus tempor metus risus et lacus. Suspendisse in 
                                dui sit amet eros interdum mattis. Pellentesque et ex ac metus iaculis porta at at dui. Nunc vel sem ac leo consequat 
                                blandit id vel purus. Morbi posuere lectus ut enim sollicitudin, quis pharetra eros auctor.
                                </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className={classes.icons}>
                                <div style={{ display: 'flex', paddingTop: '1rem'}}>
                                   <ChatBubbleOutlineIcon />
                                   <Typography variant='body2' style={{ paddingLeft: '1rem'}}>Message</Typography> 
                                </div>
                                <div style={{ display: 'flex', paddingTop: '3rem'}}>
                                   <CreateOutlined />
                                   <Typography variant='body2' style={{ paddingLeft: '1rem'}}>Edit</Typography> 
                                </div>
                                <div style={{ display: 'flex', paddingTop: '3rem', color: 'red'}}>
                                   <CloseOutlined />
                                   <Typography variant='body2' style={{ paddingLeft: '1rem'}}>Delete</Typography> 
                                </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Card>
                </Container>
            </Box>
            <Box component='div'>
                <Container>
                <div style={{ display: 'flex', paddingLeft: '1rem'}}>
                            <img src={Spec} alt='track' />
                            <Typography variant='body2' style={{paddingLeft: '1rem'}}>Tracking</Typography>
                </div>
                        <Card className={classes.card} data-aos='fade-left' data-aos-offset='200'>
                            <Container style={{ padding: '2rem 0 3rem 2rem'}}>
                            <div style={{display: 'flex', paddingTop: '2rem', paddingLeft: '1rem'}}>
                                <Typography variant='body2'>25 May, 2021</Typography>
                                <Typography variant='body2' style={{paddingLeft: '2rem'}}>16:32</Typography>
                                <Typography style={{paddingLeft: '5rem'}}>Negotiation</Typography>
                            </div>
                            <div style={{display: 'flex', paddingTop: '2rem', paddingLeft: '1rem'}}>
                                <Typography variant='body2'>25 May, 2021</Typography>
                                <Typography variant='body2' style={{paddingLeft: '2rem'}}>22:13</Typography>
                                <Typography style={{paddingLeft: '5rem'}}>Paid</Typography>
                            </div>
                            <div style={{display: 'flex', paddingTop: '2rem', paddingLeft: '1rem'}}>
                                <Typography variant='body2'>25 May, 2021</Typography>
                                <Typography variant='body2' style={{paddingLeft: '2rem'}}>22:40</Typography>
                                <Typography style={{paddingLeft: '5rem'}}>Processing to Confirmation</Typography>
                            </div>
                            <div style={{display: 'flex', paddingTop: '2rem', paddingLeft: '1rem'}}>
                                <Typography variant='body2'>28 May, 2021</Typography>
                                <Typography variant='body2' style={{paddingLeft: '2rem'}}>01:13</Typography>
                                <Typography style={{paddingLeft: '5rem'}}>On Work</Typography>
                            </div>
                            <Divider orientation='vertical' style={{ marginLeft: '5rem'}} />
                            </Container>
                        </Card>
                </Container>
            </Box>
        </div>
    )
}

export default Tracking
