
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from "moment"

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
});

export default function Order(props: any) {
    const { orderOwner, numberOfSeats, insideOrOutside, date, onDeleteOrder } = props
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {orderOwner}
                </Typography>
                <Typography variant="h5" component="h2">
                    {moment(date).format("DD MMM YYYY")}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {insideOrOutside}
                </Typography>
                <Typography variant="body2" component="p">
                    Number of seats: {numberOfSeats}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => { onDeleteOrder(`${orderOwner}_${date}`) }} size="small">Cancel Order</Button>
            </CardActions>
        </Card>
    );
}
