import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {  TextField } from '@material-ui/core'

const useStyles = makeStyles({
    root: {

    }
})
function CustomInput(props) {
    const classes = useStyles()
    return (
        <>
        <TextField variant='outlined' fullWidth size='small' {...props.input} {...props} />
        {props.meta.touched && props.meta.error && (
            <div className={classes.root}>
                <small>{props.meta.error}</small>
            </div>
        )}   
        </>
    )
}

export default CustomInput
