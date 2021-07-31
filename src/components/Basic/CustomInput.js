import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {  FormHelperText, TextField, FormControl, Select, MenuItem } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        display: 'inline-block',
        width: '100%'
    },
    icon: {
        position: 'absolute',
        right: 0,
        top: 15,
        width: 20,
        height: 20
    },
    category: {
        paddingBottom: '1rem'
    }
})
function CustomInput(props) {
    return (
        <>
        <TextField variant='outlined' fullWidth size='small' {...props.input} {...props} />
        {props.meta.touched && props.meta.error && (
            <div style={{color: 'red'}}>
                <small>{props.meta.error}</small>
            </div>
        )}   
        </>
    )
}

function PasswordInputs(props) {
    const classes = useStyles()

    const [visible, setVisible] = useState(false)
    const changeVisibility = () => {
        setVisible(!visible)
    }
    return (
        <div className={classes.root}>
            { 
            visible 
            ? <VisibilityIcon onClick={changeVisibility} className={classes.icon} />
            : <VisibilityOffIcon onClick={changeVisibility} className={classes.icon} />
            }
            <TextField
            variant='outlined'
            type={visible ? 'text' : 'password'}
            fullWidth
            size='small'
            {...props.input} {...props} 
            />
            {props.meta.touched && props.meta.error && (
                <div style={{color: 'red'}}>
                    <small>{props.meta.error}</small>
                </div>
            )}
        </div>
    )
}

function ImageInput(props) {
    return (
        <>
        <TextField variant='outlined' fullWidth size='small' type='file' {...props.input} {...props} />
        {props.meta.touched && props.meta.error && (
            <div style={{color: 'red'}}>
                <small>{props.meta.error}</small>
            </div>
        )}   
        </>
    )
}

function CategoryInput({
    input: { name, value, onChange, ...restInput }, 
    meta,
    formControlProps,
    ...rest
}) {
    const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched
    return (
        <FormControl
        {...formControlProps}
        error={ showError }
        style={{
            minWidth: '100%'
        }}>
            <Select
            {...rest}
            // multiple
            name={name}
            onChange={onChange} 
            value={value || []}
            inputProps={restInput}
            >
            <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='category 1'>Category 1</MenuItem>
          <MenuItem value='category 2'>Category 2</MenuItem>
          <MenuItem value='category 3'>Category 3</MenuItem>
            </Select>
            {showError && (
                <FormHelperText>{meta.error || meta.submitError}</FormHelperText>
            )}
        </FormControl>
    )
}


export {CustomInput, PasswordInputs,  CategoryInput, ImageInput }
