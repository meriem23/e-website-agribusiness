import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

function Avatars(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Avatar>{props.Name}</Avatar>
        </div>
    );
}
export default Avatars