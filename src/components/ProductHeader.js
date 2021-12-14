import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, Button, Grid, TextField, Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import TextsmsIcon from '@material-ui/icons/TextsmsOutlined'
import User from '../assets/icons/user.png'


const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    icon: {
        width: '6rem'
    },
    iconButton: {
        padding: 10,
        height: '2.5rem',
        borderTopRightRadius: '25%',
        borderBottomRightRadius: '25%',

      },
    
      divider: {
        height: 28,
        margin: 4,
      },
      form: {
        display: 'flex',
        flexDirection: 'row',
        // marginTop: '2rem',
        width: '80%'
    },
    // header: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // }
})
function ProductHeader() {

    const classes = useStyles()
    return (
        <Box component='div' className={classes.root}>
            <Container>
                <Grid container className={classes.header}>
                    <Grid item xs={8} md={6}>
                        <form noValidate autoComplete='off' className={classes.form}>
                            <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            placeholder='Search' />
                        <Button 
                        type="submit"
                        variant='contained'
                        className={classes.iconButton} 
                        aria-label="search"
                        color='primary'
                        >
                        <SearchIcon style={{color: '#ffffff'}} />
                        </Button>
                        </form>
                        {/* <Divider className={classes.divider} orientation='vertical' /> */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextsmsIcon style={{paddingTop: '.5rem'}} />
                            <ShoppingCartIcon style={{paddingTop: '.5rem'}} />
                            <NotificationsNoneIcon style={{paddingTop: '.5rem'}} />
                            <div style={{display: 'flex'}}>
                                <Typography variant='body2' style={{paddingRight: '.5rem', paddingTop: '.5rem'}}>
                                    Afif hanifuldin
                                </Typography>
                                <Avatar alt="user" src={User} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ProductHeader
