import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: '10rem',
    }
})
function FeaturedSection({ logo }) {

    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={logo.src} alt='logo'  />
            </div>
        </Container>
    )
}

export default FeaturedSection
