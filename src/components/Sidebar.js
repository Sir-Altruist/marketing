import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText, ListItemIcon, Collapse, List } from '@material-ui/core';
import { useHistory, useLocation, Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    root: {
      paddingTop: '2rem',
      display: 'flex',
      justifyContent: 'space-around',
      color: '#796F6F',
      textDecoration: 'none',
      '&:hover': {
        color: '#796F6F',
      }
    },
    active: {
        paddingTop: '2rem',
        color: '#5A4EEC',
        display: 'flex',
        justifyContent: 'space-around',
        textDecoration: 'none',
    },
    nested1: {
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(2)
    },
    nested2: {
        color: '#5A4EEC',
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(2),

    },

}))
function Sidebar({ item }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const[open, setOpen ] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <>
        <ListItem 
        button
        // onClick={() => history.push(item.path)}
        >
            <Link 
            to={item.path} 
            className={location.pathname === item.path ? classes.active : classes.root}
            onClick={item.subNav && toggle}>
            <ListItemIcon>{location.pathname === item.path ? item.icon2 : item.icon1}</ListItemIcon>
            <ListItemText primary={item.name} style={{paddingRight: '3rem'}} />
         {
         item.subNav && open
         ? item.iconOpen
        : item.subNav
        ? item.iconClose 
        : null
        }
           </Link>
           </ListItem>
           {open && item.subNav.map((item, i) => {
               return(
                <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding key={i}>
                  <ListItem 
                  button 
                  className={location.pathname === item.path ? classes.nested2 : classes.nested1}
                  onClick={() => history.push(item.path)}>
                {item.name}
                  </ListItem>
                </List>
              </Collapse>
               )
           })}
         </>
    )
}

export default Sidebar
