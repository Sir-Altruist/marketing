import React from 'react';
import { Box, Container, Typography, TableContainer, Table, TableBody, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ServicePage from '../components/Service/ServicePage';
import { connect } from 'react-redux'
import CustomHeader2 from '../components/Basic/CustomHeader/CustomHeader2'
import CustomFooter2 from '../components/Basic/CustomFooter/CustomFooter2'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: '100vh'
    },
    contain1: {
        margin: '10rem 0 7rem 0',
        width: '100%',
        // minHeight: '20vh'
    },
    text: {
        paddingTop: '1rem'
    },
    contain2: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#C4C4C41A'
    },
    tableData: {
        margin: '5rem 0'
    }
})
function Service({ servicePage }) {
    const classes = useStyles()
    return (
        <>
        <CustomHeader2 />
        <Box component='div' className={classes.root}>
            <Container className={classes.contain1}>
                <Typography variant='h3' align='center'>Our Service</Typography>
                <Typography variant='body2' component='p' align='center' className={classes.text}>
                    Lorem ipsum is common placeholder text used to demonstrate <br /> the graphic 
                    elements of a document or visual presentation.</Typography>
            </Container>
            <div className={classes.contain2}>
                <TableContainer>
                    <Table className={classes.tableData}>
                        <TableBody>
                        {servicePage.map((service, i) => {
                        return (
                            <TableRow key={i}>
                            <ServicePage service={service} />
                            </TableRow>
                        )
                    })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            </Box>
            <CustomFooter2 />
            </>
    )
}

const mapStateToProps = state => {
    return {
        servicePage: state.servicePage.data
    }
}

export default connect(mapStateToProps)(Service);
