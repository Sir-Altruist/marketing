import React from 'react';
import { Box, Typography, Container, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import sideMenu from './sideMenu'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '20%',
        minHeight: '100vh',
        backgroundColor: '#cccccc'
    },
    headText: {
        color: '#5A4EEC',
        paddingTop: '10rem',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

function SidebarDesktop() {
    const classes = useStyles()
    return (
    <Box component='div' className={classes.root}>
        <Container>
        <Typography variant='h5' className={classes.headText}>CUSTOMER</Typography>
        <List>
            {sideMenu.map(menu => {
                return(
                    <ListItem key={menu.name}>

                    </ListItem>
                )
            })}
        </List>
        </Container>
    
    </Box>
    )
}

export default SidebarDesktop;