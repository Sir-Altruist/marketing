import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SidebarDesktop from '../../components/Sidebar/SidebarDesktop'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: '100vh'
    }
})
function Home() {

    const classes = useStyles()
    return (
        <Box component='div' className={classes.root}>
            <SidebarDesktop  />
        </Box>
    )
}

export default Home;