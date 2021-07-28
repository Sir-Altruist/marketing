import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

function Rating({ value, color }) {
    return (
        <div>
           <span style={{ color }}>
               {value >= 1 ? <StarIcon /> : value >= 0.5 ? <StarHalfIcon /> : <StarBorderIcon />}
           </span>
           <span style={{ color }}>
               {value >= 2 ? <StarIcon /> : value >= 1.5 ? <StarHalfIcon /> : <StarBorderIcon />}
           </span>
           <span style={{ color }}>
               {value >= 3 ? <StarIcon /> : value >= 2.5 ? <StarHalfIcon /> : <StarBorderIcon />}
           </span>
           <span style={{ color }}>
               {value >= 4 ? <StarIcon /> : value >= 3.5 ? <StarHalfIcon /> : <StarBorderIcon />}
           </span>
           <span style={{ color }}>
               {value >= 5 ? <StarIcon /> : value >= 4.5 ? <StarHalfIcon /> : <StarBorderIcon />}
           </span> 
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}
export default Rating
