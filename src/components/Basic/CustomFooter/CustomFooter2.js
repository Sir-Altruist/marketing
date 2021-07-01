import React from 'react'
import { Box, Container, Grid, Typography, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../../../assets/icons/logo2.svg'
import { YouTube, LinkedIn, Instagram } from '@material-ui/icons'
import { SectionComponent } from './SectionComponent'
import { section, company, products} from './section'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#14089C',
        width: '100%',
        minHeight: '80vh'
    },
    section: {
        paddingTop: '5rem'
    },
    icons: {
        color: '#ffffff',
        paddingTop: '2rem'
    }
})
function CustomFooter2() {
    const classes = useStyles()

    
    return (
        <Box component='div' className={classes.root} >
           <Container>
               <Grid container className={classes.section}>
                   <Grid item xs={12} sm={6} md={4} className={classes.section}>
                       <img src={Logo} alt='logo' />
                       <Typography variant='body2' style={{ color: '#ffffff', paddingTop: '1rem'}}>
                       Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. 
                       Facilisis nibh feugiat pulvinar <br /> bibendum facilisis proin ut praesent dictum.
                       </Typography>
                       <div className={classes.icons}>
                           <YouTube />
                           <LinkedIn />
                           <Instagram />
                       </div>
                   </Grid>
                   <Grid item xs={12} sm={6} md={2} className={classes.section} spacing={3}>
                       <Typography variant='h6' style={{ color: '#ffffff', paddingLeft: '1rem', fontWeight:'bold'}}>
                           Section
                        </Typography>
                       <List>
                           {section.map(link => {
                               return (
                                   <SectionComponent key={link.name} link={link} />
                               )
                           })}
                       </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.section}>
                    <Typography variant='h6' style={{ color: '#ffffff', paddingLeft: '1rem', fontWeight:'bold'}}>Company</Typography>
                    <List>
                           {company.map(link => {
                               return (
                                   <SectionComponent key={link.name} link={link} />
                               )
                           })}
                    </List>
                    </Grid>
                   <Grid item xs={12} sm={6} md={3} className={classes.section}>
                   <Typography variant='h6' style={{ color: '#ffffff', paddingLeft: '1rem', fontWeight:'bold'}}>
                       Products
                    </Typography>
                   <List>
                           {products.map(link => {
                               return (
                                   <SectionComponent key={link.name} link={link} />
                               )
                           })}
                    </List>
                   </Grid>
                </Grid>
            </Container> 
        </Box>
    )
}

export default CustomFooter2
