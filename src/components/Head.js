import React from 'react'
import {Box, Container, Typography, Avatar, Grid } from '@material-ui/core'
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles'
import User from '../assets/home/user.png'
import Board from './Dashboard/Board'
import { connect, useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/clientAction'
import { useHistory } from 'react-router-dom'


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

    const history = useHistory()
    const dispatch = useDispatch()
    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin


    const handleLogout = () => {
        dispatch(logout())
        history.push('/login/client')
    }
    return (
        <Box component='div' className={classes.root}>
        <Container>
            <div className={classes.top}>
                <div data-aos='fade-right'>
                    <Typography variant='body1'>Welcome back, {clientInfo ? clientInfo.user.username : null}</Typography>
                </div>
                <div className={classes.icons} data-aos='fade-left'>
                    <Avatar src={User} alt='user' className={classes.avatar} />
                    <NotificationsNoneIcon />
                    <ChatBubbleOutlineIcon />
                    <SettingsOutlined />
                    <ExitToAppIcon onClick={handleLogout} />
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
