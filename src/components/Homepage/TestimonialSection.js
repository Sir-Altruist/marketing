import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    marginLeft: "1rem",
    marginTop: '1rem'
  },
  quote: {
      color: '#2EC5CE'
  },
  text: {
      padding: '0 1rem'
  },
  user: {
      fontWeight: 'bold',
      paddingTop: '1rem',
      paddingLeft: '1rem'
  }
});

export default function TestimonialSection({ testimonial }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
       <img src={testimonial.src} alt='testimonial' className={classes.media} />
        <CardContent>
          <Typography variant='h4' className={classes.quote}>
            &ldquo;
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
            {testimonial.comment}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
       <Typography variant='body2' component='p' className={classes.user}>
           {testimonial.user}
       </Typography><br />
       <Typography variant='caption' component='span' color="textSecondary" className={classes.user}>
           {testimonial.role}
       </Typography>
      </CardContent>
    </Card>
  );
}