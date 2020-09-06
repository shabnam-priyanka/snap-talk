import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
import Comments from '../Comments/Comments';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



const Post = (props) => {
    // console.log(props);

    const { title, body, id } = props.post;
    // console.log(props.post);

    const addPost = props.addPost;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const nextPage = () => {
        console.log('click');
    }

    return (
        <div style = {{float: "left", margin: '10px'}}>

            <Card className={classes.root}>
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
                    title= {title}
                    subheader="Aug 7, 2020"
                />
                <CardMedia
                    className={classes.media}
                    image="https://swikblog.com/wp-content/uploads/2017/06/World-Environment-Day-1-700x445.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                    <br/>
                    <br/>
                    <Link  to={"/postDetail/" +id} > <Button variant="contained" color="secondary" onClick={nextPage}>
                    Comment Details
                    </Button></Link>
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
        

        </div>

    );
};

export default Post;