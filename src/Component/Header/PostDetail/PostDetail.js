import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },

  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});




const PostDetail = () => {
    const { id } = useParams();
    const [postDetail, setPostDetail] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, [])

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    }

    
    const bull = <span className={classes.bullet}>•</span>;

    return (

        <div style= {{justifyContent:'center', height:'550px', marginTop:'20px', backgroundColor:'#E1E1E1'}}>
            <Card className={classes.root} style={{margin:'0 auto', marginBottom:'10px'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe"  src='https://media-exp1.licdn.com/dms/image/C4D03AQEYijPq5pBubQ/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=tk8q6rqUKFRt_lwcYz_cXnopA5d3sRx3cmk6ySGVMWQ' className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shabnam Priyanka"
        subheader="Aug 7, 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://swikblog.com/wp-content/uploads/2017/06/World-Environment-Day-1-700x445.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Details: {postDetail.title}
        <br/>
        Body:{postDetail.body}
        <br/>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
     
    </Card>

    <Card className={classes.root} style={{margin:'0 auto'}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Comments Detail:
        </Typography>
        <Typography variant="h5" component="h2">
          Want{bull}to{bull}know{bull}More
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
        <Typography variant="body2" component="p">
        <Comments postId={postDetail.id} > </Comments>
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    
    
        </div>
        
    
 
        // <div>
        // <h1>This is details: {postDetail.title} </h1>
        // <h2>Body:{postDetail.body} </h2>
        // <h1>Name:{postDetail.name} </h1>
        // <h2>E-mail:{postDetail.email} </h2>
        // <br />
        // <h2>comments section </h2>
        // <Comments postId={postDetail.id} ><li>{postDetail.id} </li> </Comments>
         
        // </div> 
    );
};

export default PostDetail;