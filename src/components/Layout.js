import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, Drawer, Typography } from '@material-ui/core'
import menuItems from '../components/menuItems'
import Sidebar from '../components/Sidebar'

const drawerWidth = '15rem'
const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh',
        background: '#E5E5E5',
        display: 'flex'
    },
    drawer: {
        width: drawerWidth,
        textAlign: 'center'
    },
    header: {
        paddingTop: '3rem'
    },
    drawerPaper: {
        width: drawerWidth,
      },
    children: {
        width: '100%',
        minHeight: '100vh'
    }
})
function Layout({ children }) {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Drawer className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{
                paper: classes.drawerPaper,
              }}
            >
                <div className={classes.header}>
                <Typography variant='h5' color='primary'>Customer</Typography>
                </div>
                <List>
                    { menuItems.map((item, i) => {
                        return(
                            <Sidebar key={i} item={item} />
                        )
                    })}
                </List>
            </Drawer>
        <div className={classes.children}>
           {children} 
        </div>
        </div>
    )
}

export default Layout
