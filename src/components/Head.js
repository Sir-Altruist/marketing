import React from 'react'
import {Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Board from './Dashboard/Board'
import {connect} from 'react-redux';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        "@media (max-width: 900px)": {
            width: '80%',
            overflowX: 'auto'
          }
    }
})

function Head({ board }) {
    const classes = useStyles()

    return (
        <Box component='div' className={classes.root}>
        <Container>
            <Grid container>
                {board.map((single, i) => {
                    return (
                        <Grid item xs={12} md={3} key={i}>
                            <Board single={single} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    </Box>
    )
}

const mapStateToProps = state => {
    return {
        board: state.board.data
    }
}

export default connect(mapStateToProps)(Head)
