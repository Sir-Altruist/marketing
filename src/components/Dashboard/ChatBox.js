import React from 'react'
import { Box, Avatar, Typography } from '@material-ui/core'
import Brian from '../../assets/home/brian.png'
import { makeStyles } from '@material-ui/core/styles'
import Read from '../../assets/icons/read.svg'


const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    chats: {
        display: 'flex',
        paddingTop: '1.5rem'
    },
    message1: {
        minWidth: '5rem',
        minHeight: '3rem',
        backgroundColor: '#00A1FF4D',
        textAlign: 'center',
        paddingTop: '.5rem',
        borderRadius: '0 20px 20px 40px',
        marginLeft: '1rem'
    },
    message2: {
        minWidth: '5rem',
        minHeight: '3.5rem',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        paddingTop: '.5rem',
        borderRadius: '20px 0px 40px 20px',
        marginTop: '2rem',
        marginLeft: '15rem'
    },
    text: {
        padding: '0 2rem'
    }
})
function ChatBox() {

    const classes = useStyles()
    return (
        <Box component='div' className={classes.root}>
            <div className={classes.chats} 
            data-aos='fade-right' 
            data-aos-easing='ease-in-out' 
            >
                <Avatar src={Brian} alt='user' />
                <div className={classes.message1}>
                    <Typography variant='span' className={classes.text}>
                        Hello sir, how about recommended service, do you accept?
                    </Typography>
                </div>
            </div>
            <div className={classes.message2}
                    data-aos='fade-left' 
                    data-aos-delay='20' 
                    data-aos-easing='ease-in-out'
            >
                    <Typography variant='span' className={classes.text}>
                        My boss agreed and i need to make payment later, because i need to wait
                    </Typography>
                    <br />
                    <img src={Read} alt='read' style={{paddingLeft: '28rem', paddingTop: '.5rem'}} />
                </div>

                <div className={classes.chats}
                      data-aos='fade-right' 
                      data-aos-delay='40' 
                      data-aos-easing='ease-in-out'
                >
                <Avatar src={Brian} alt='user' />
                <div className={classes.message1}>
                    <Typography variant='span' className={classes.text}>
                        Amazing! That's great to hear. I'll wait
                    </Typography>
                </div>
            </div>
            <div className={classes.message2}
     data-aos='fade-left' 
     data-aos-delay='60'
     data-aos-easing='ease-in-out'
            >
                    <Typography variant='span' className={classes.text}>
                        Sure! I hope we're doing it well
                    </Typography>
                    <br />
                    <img src={Read} alt='read' style={{paddingLeft: '28rem', paddingTop: '.5rem'}} />
                </div>
                <div className={classes.chats}
                     data-aos='fade-right' 
                     data-aos-delay='80' 
                     data-aos-easing='ease-in-out'
                     >
                <Avatar src={Brian} alt='user' />
                <div className={classes.message1}>
                    <Typography variant='span' className={classes.text}>
                      We try our best
                    </Typography>
                </div>
            </div>
        </Box>
    )
}

export default ChatBox
