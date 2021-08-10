import React from 'react'
import { Card, CardContent, Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Tag from '../../assets/home/footer.png'
import CreateOutlined from '@material-ui/icons/CreateOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Spec from '../../assets/icons/mirror.svg'
import CloseOutlined from '@material-ui/icons/CloseOutlined';

const useStyles = makeStyles({
    root: {
        width: '90%',
        marginTop: '1rem',
        marginRight: '1rem',
        paddingTop: '1rem',
        paddingBottom: '3rem',
        borderRadius: '5%'
    },
    header: {
        display: 'flex'
    },
    head: {
        fontWeight: 'bold',
        paddingLeft: '1rem'
    },
    leftContent: {
    },
    icons: {
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: 'flex-end',
        justifyContent: 'space-between',
        cursor: 'pointer'
    }
})
function Footer({ product }) {
    
    const classes = useStyles()
    return (
        <Card className={classes.root} elevation={0}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <div className={classes.header}>
                            <img src={Tag} alt='icon' />
                            <Typography variant='span' className={classes.head}>{product.name}</Typography>
                        </div>
                        <CardContent>
                                <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
                            </CardContent>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography align='right' style={{ fontWeight: 'bold'}}>{product.amount}</Typography>
                        <div className={classes.icons}>
                            <span style={{width: '.1rem', height: '.1rem'}}>
                                <CreateOutlined />
                            </span>
                            <span style={{width: '.1rem', height: '.1rem'}}>
                                <ChatBubbleOutlineIcon />
                            </span>
                            <span style={{width: '.1rem', height: '.1rem', color: 'red'}}>
                                <CloseOutlined />
                            </span>
                            <img src={Spec} alt='icon' />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Card>
    )
}

export default Footer
