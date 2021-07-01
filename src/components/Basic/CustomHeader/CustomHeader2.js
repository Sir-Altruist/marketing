import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, ButtonBase, Button,  Avatar, Container, IconButton, Drawer, Link, MenuItem } from '@material-ui/core';
import  MenuIcon  from '@material-ui/icons/Menu';
import Logo from '../../../assets/icons/logo.svg';
import menuItems from './menuItems';
import {Link as RouterLink, useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
      background: 'transparent'
  },
  icon: {
      width: '6rem'
  },
  title: {
    textTransform: 'initial',
    paddingLeft: '2rem',
    color: '#000000'
  },
  menuLink: {
      paddingRight: '2rem',
      textDecoration: 'none',
      cursor: 'pointer'
  },
  login: {
      backgroundColor: '#6056D7',
      textTransform: 'initial'
  },
  login1: {
    backgroundColor: '#6056D7',
    textTransform: 'initial',
    height: '2rem',
    marginTop: '.5rem'
},
  menu: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  logo: {
      display: 'flex',
      cursor: 'pointer'
  },
  mobile: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  }

}));

export default function CustomHeader2() {
  const classes = useStyles();

  const[state, setState] = useState({
      mobile: false,
      isOpen: false
  })
  const { mobile, isOpen } = state;

  const history = useHistory()

 useEffect(() => {
     const responsive = () => {
         return window.innerWidth < 900
         ? setState(prevState => ({
             ...prevState,
             mobile: true
         }))
         : setState(prevState => ({
             ...prevState,
             mobile: false
         }))
     }
     responsive()
     window.addEventListener('resize', () => responsive())

     return () => {
         window.removeEventListener('resize', () => responsive())
     }
 }, [])

  const desktopView = () => {
    return <Toolbar>
                <Container className={classes.menu}>
                    <div className={classes.logo} onClick={() => history.push('/')}>
                        <img src={Logo} alt='logo' className={classes.icon} />
                    </div>
                    <div>
                        {menuItems.map(({label, path}) => (
                            <ButtonBase
                            className={classes.title}
                            {...{
                                key: label,
                                to: path,
                                component: RouterLink
                            }}
                            disableRipple={true}
                            disableTouchRipple={true}
                            focusRipple={true}
                            >
                                {label}
                            </ButtonBase>
                        )
                        )}
                        </div>
                        <div>
                        <RouterLink to='/register/client' className={classes.menuLink}> Sign Up </RouterLink>
                        <Button 
                         variant='contained' 
                         color='primary' 
                         className={classes.login}>
                            <RouterLink to='#' style={{ textDecoration: 'none', color: '#ffffff'}}>
                                Join Us
                            </RouterLink>
                        </Button>
                        </div>
                    </Container>
            </Toolbar>
    }

    const mobileView = () => {
        const menuIconOpen = () => setState(prevState => ({
            ...prevState,
            isOpen: true
        }))

        const menuIconClose = () => setState(prevState => ({
            ...prevState,
            isOpen: false
        }))
        return <Toolbar>
            <Container className={classes.mobile}>
            <IconButton
            {...{
                edge: 'start',
                color: 'inherit',
                "aria-label": 'menu',
                "aria-haspopup": "true",
                "@media (max-width: 900px)": {
                    paddingLeft: 0,
                  },
                onClick: menuIconOpen
            }}>
               <MenuIcon /> 
            </IconButton>
            <Drawer
            {...{
                anchor: 'left',
                open: isOpen,
                onClose: menuIconClose
            }}>
                <div>{getDrawerChoices()}</div>
            </Drawer>
            <Button 
                         variant='contained' 
                         color='primary' 
                         size='small'
                         className={classes.login1}>
                            <RouterLink to='/login/client' style={{ textDecoration: 'none', color: '#ffffff'}}>
                                Log in
                            </RouterLink>
                        </Button>
            <div className={classes.logo} onClick={() => history.push('/')}>
                <Avatar src={Logo} alt='logo' className={classes.icon} />
                <Typography variant='h6' component='h1' className={classes.header1}>Lilo Group</Typography>
            </div>
            </Container>
        </Toolbar>;
    }

    const getDrawerChoices = () => {
        return menuItems.map(({label, path}) => {
            return(
                <>
                <Link
                {...{
                    to: path,
                    color: 'inherit',
                    style: {
                        textDecoration: 'none'
                    },
                    key: label,
                    component: RouterLink
                }}>
                    <MenuItem>{label}</MenuItem>
                </Link>
                </>
            )
        })
    }
 
    return <div className={classes.root}>
      <AppBar className={classes.header}>
          {mobile ? mobileView() : desktopView()}
      </AppBar>
    </div>
}
