import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button,  Avatar, Container, IconButton, Drawer, Link, MenuItem } from '@material-ui/core';
import  MenuIcon  from '@material-ui/icons/Menu';
import Logo from '../../../assets/home/logo.png';
import menuItems from './menuItems';
import {Link as RouterLink } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textTransform: 'initial',
    paddingRight: '1rem'
  },
  header: {
      backgroundColor: '#ffffff',
      color: '#000000',
      fontFamily: "inter"
  },
  icon: {
      marginRight: '.5rem'
  },
  login: {
      backgroundColor: '#6056D7',
      textTransform: 'initial'
  },
  menu: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  logo: {
      display: 'flex'
  },
  mobile: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  }

}));

export default function CustomHeader() {
  const classes = useStyles();

  const[state, setState] = useState({
      mobile: false,
      isOpen: false
  })
  const { mobile, isOpen } = state;

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
                    <div className={classes.logo}>
                        <Avatar src={Logo} alt='logo' className={classes.icon} />
                        <Typography variant='h6' component='h1' className={classes.header}>Lilo Group</Typography>
                    </div>
                    <div>
                        {menuItems.map(({label, path}) => (
                            <Button
                            className={classes.title}
                            {...{
                                key: label,
                                to: path,
                                component: RouterLink
                            }}>
                                {label}
                            </Button>
                        )
                        )}
                        <Button variant='contained' color='primary' className={classes.login}>
                            <RouterLink to='/login/client' style={{ textDecoration: 'none', color: '#ffffff'}}>
                                Log in
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
            <div className={classes.logo}>
                <Avatar src={Logo} alt='logo' className={classes.icon} />
                <Typography variant='h6' component='h1' className={classes.header}>Lilo Group</Typography>
            </div>
            </Container>
        </Toolbar>;
    }

    const getDrawerChoices = () => {
        return menuItems.map(({label, path}) => {
            return(
                <Link
                {...{
                    to: path,
                    color: 'inherit',
                    style: {
                        textDecoration: 'none'
                    },
                    key: label,
                    component: RouterLink,
                }}>
                    <MenuItem>{label}</MenuItem>
                </Link>
            )
        })
    }
 
    return <div className={classes.root}>
      <AppBar className={classes.header}>
          {mobile ? mobileView() : desktopView()}
      </AppBar>
    </div>
}
