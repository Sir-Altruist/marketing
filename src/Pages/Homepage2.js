import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import Image from '../assets/home/bg-home.png'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
    },
    leftSide: {
        width: '100%',
        minHeight: "100vh",
        backgroundImage: "linear-gradient(rgba(90, 76, 238, 0.3)), url('../assets/home/bg-home.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
})
function Homepage2() {
    const classes = useStyles()
    return (
        <Box component='div' className={classes.root}>
            <div className='left'>Hi</div>
            <div></div>
        </Box>
    )
}

export default Homepage2
