import React from 'react'
import { Container, Card, Box, Typography, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#C4C4C41A',
        width: '100%',
        minHeight: '100vh',
        position: 'relative'
    },
    loginCard: {
        position: 'absolute',
        top: '7rem',
        bottom: '5rem',
        left: '30%',
        right: '30%',
        width: '40%',
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
    btn: {
        textTransform: 'inherit',
        backgroundColor: '#F6F6F6',
        fontWeight: 'bold'
        // border: '1px solid #6056D7'
    },
    icon: {
        color: '#6056D7'
    }
})
function ClientLogin() {
    const classes = useStyles()
    return (
        <Box component='div' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} className={classes.root}>
                <Card className={classes.loginCard}>
                    <Container>
                    <Typography variant='h3' className={classes.headText}>Login as</Typography>
                    <div className={classes.buttons}>
                        <Button
                        variant='contained'
                        startIcon={<PersonIcon className={classes.icon}  />}
                        className={classes.btn}
                        style={{marginRight: '2rem'}}
                        disableRipple
                        disableElevation
                        >
                            Client
                        </Button>
                        <Button
                        variant='contained'
                        startIcon={<BusinessIcon className={classes.icon}  />}
                        className={classes.btn}
                        style={{marginLeft: '2rem'}}
                        disableRipple
                        disableElevation
                        >
                            Marketer
                        </Button>
                    </div>
                    </Container>
                </Card>
        </Box>
    )
}

export default ClientLogin
