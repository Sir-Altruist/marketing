import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '../Rating'



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
                image={`${product.productImg}`}
                className={classes.media}
                title='product'
            />
            </CardActionArea>
            <CardContent>
                <Container>
                <Typography varaint='h6' color='textSecondary' style={{fontWeight: 'bold'}}>{product.name}</Typography>
                <Typography varaint='body2' color='textSecondary'>{product.description}</Typography>
                <Rating value={product.rating} />
                <Typography varaint='h5' color='textPrimary'>&#36;{product.amount}</Typography>
                </Container>
            </CardContent>
        </Card>
    )
}

export default Product
