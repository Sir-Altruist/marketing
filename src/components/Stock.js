import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    root: {
    width: '10rem',
    height: '10rem',
    borderRadius: '5%'
    }
})
function Stock({ single }) {
    const classes = useStyles()
    return (
        <img src={single.path} alt='product' className={classes.root}/>
    )
}

export default Stock
