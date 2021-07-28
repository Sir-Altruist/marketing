import React from 'react'
import {Box, Container, Typography, Avatar, Grid } from '@material-ui/core'
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles'
import User from '../assets/home/user.png'
import Board from './Dashboard/Board'
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        paddingTop: '3rem',
        width: '100%',
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    icons: {
        width: '15rem',
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer'
    },
    avatar: {
        width: '1.5rem',
        height: '1.5rem'
    },
})

function Head({ board }) {
    const classes = useStyles()
    return (
        <Box component='div' className={classes.root}>
        <Container>
            <div className={classes.top}>
                <div data-aos='fade-right'>
                    <Typography variant='body1'>Welcome back, User Tom Clay</Typography>
                </div>
                <div className={classes.icons} data-aos='fade-left'>
                    <Avatar src={User} alt='user' className={classes.avatar} />
                    <NotificationsNoneIcon />
                    <ChatBubbleOutlineIcon />
                    <SettingsOutlined />
                    <ExitToAppIcon />
                </div>
            </div>
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
