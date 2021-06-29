import React from 'react';
import { Container, Grid, TableCell, Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: '3rem'
    }
})
function ServicePage({ service }) {
    const classes = useStyles()
    return (
        <>
        <Box component='div' display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block' }} className={classes.root}>
            <Container>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                <TableCell component="th" scope="row">
                    <img src={service.img} alt='logo' />
                </TableCell>
                </Grid>
                <Grid item xs={2}>
                <TableCell>
                    <Typography variant='h6'>{service.title}</Typography>
                </TableCell>
                </Grid>
                <Grid item xs={4}>
                <TableCell>
                    <Typography align='center' variant='body2'>{service.content1}</Typography>
                    <Typography align='center' variant='body2'>{service.content2}</Typography>
                </TableCell>
                </Grid>
                <Grid item xs={2}>
                <TableCell>
                    <Link to='#'>{service.type1}</Link><br />
                    <Link to='#'>{service.type2}</Link>
                </TableCell>
                </Grid>
                <Grid item xs={2}>
                <TableCell>
                    <Link to='#'>{service.type3}</Link><br />
                    <Link to='#'>{service.type4}</Link>
                </TableCell>
                </Grid>
            </Grid>
        </Container>
        </Box>
        <Box component='div' display={{ xs: 'block', sm: 'none' }}>
            <Container>
                <TableCell component="th" scope="row">
                    <img src={service.img} alt='logo' />
                </TableCell>
                <TableCell>
                    <Typography variant='h6'>{service.title}</Typography>
                </TableCell>
                <TableCell>
                    <Typography  variant='body2'>{service.content1}</Typography>
                    <Typography  variant='body2'>{service.content2}</Typography>
                </TableCell>
                <TableCell>
                    <Link to='#'>{service.type1}</Link><br />
                    <Link to='#'>{service.type2}</Link>
                </TableCell>
                <TableCell>
                    <Link to='#'>{service.type3}</Link><br />
                    <Link to='#'>{service.type4}</Link>
                </TableCell>
            </Container>
        </Box>
        </>
    )
}

export default ServicePage
