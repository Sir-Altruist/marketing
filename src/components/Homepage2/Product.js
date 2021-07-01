import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop: '5rem',
    },
    media: {
      height: 140,
    }
  });
function Product({ product }) {

    const classes = useStyles()
    return (
        <Card className={classes.root} elevation={2}>
            <CardActionArea>
                <CardMedia
                image={product.img}
                className={classes.media}
                title='product'
            />
            </CardActionArea>
            <CardContent>
                <Container>
                <Typography varaint='body2' color='textSecondary'>{product.item}</Typography>
                <Typography varaint='h6' color='textSecondary'>{product.name}</Typography>
                <img src={product.rate} alt='rating' />
                <Typography varaint='h5' color='textPrimary'>&#36;{product.amount}</Typography>
                </Container>
            </CardContent>
        </Card>
    )
}

export default Product
