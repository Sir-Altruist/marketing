import { ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
    root: {
        color: '#ffffff',
        cursor: 'pointer'
    }
})
function SectionComponent({ link }) {
    const history = useHistory()
    const classes = useStyles()
    return (
        <ListItem className={classes.root}>
            <ListItemText onClick={() => history.push(link.path)} primary={link.name} />
        </ListItem>
    )
}

export {SectionComponent}
