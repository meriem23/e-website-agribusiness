import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import LinkIcon from '@material-ui/icons/Link'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 340,
        fontFamily: ['Lato', 'sans-serif'],
        color: '#80b435'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

function Blog() {
    const classes = useStyles();
    return (
        <div className="MyBlogContainer">
            <div className="row">
                <div className="col-4">
                    <Card className={classes.root}>
                        <CardHeader
                            title="Eating Fruits & Vegetables is Linked To Emotional Well Being"
                            subheader="September 12, 2015"
                        />
                        <CardMedia
                            className={classes.media}
                            image="/images/Blog.VF.png"
                            title="Vegetables and Fruits"
                        />
                        <CardContent>
                            <p className="BlogContent">
                                Eating more fruits and vegetables each day has a direct bearing on emotional well-being, suggests a new research. <br />
                            Psychology researchers and nutrition researcher from New Zealand teamed up to investigate the relationship between day-to-day emotions and food consumption.
                    </p>
                            <a id="LinkItem" href="https://food.ndtv.com/opinions/eating-fruits-vegetables-linked-to-emotional-well-being-692882">  <LinkIcon /> </a>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-4">
                    <Card className={classes.root}>
                        <CardHeader
                            title="These Healthy Salt Substitutes Are the Real Deal"
                            subheader="May 8, 2017"
                        />
                        <CardMedia
                            className={classes.media}
                            image="/images/Blog.Spices.jpg"
                            title="Spices"
                        />
                        <CardContent>
                            <p className="BlogContent">
                                We’re used to watching a chef sprinkle that last flourish of finishing salt on a dish as part of cooking shows. <br />
                            But for those of you who want to reduce your salt intake a little, however, there are plenty of salt substitutes that ramp up the flavour without the sodium.
                        </p>
                            <a id="LinkItem" href="https://www.foodnetwork.ca/healthy-eating/photos/healthy-salt-substitutes/#!1-garlic-Photo-by-Isabella-Mendes-from-Pexels">  <LinkIcon /> </a>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-4">
                    <Card className={classes.root}>
                        <CardHeader
                            title="Eating Seeds & Nuts is Surprisingly Good for your Health"
                            subheader="November 23, 2019"
                        />
                        <CardMedia
                            className={classes.media}
                            image="/images/Blog.NS.jpg"
                            title="Seeds and Nuts"
                        />
                        <CardContent>
                        <p className="BlogContent">
                        Nuts and seeds such as almonds, pecans, pumpkin seeds, sunflower seeds, and peanuts all contain a host of healthful nutrients.<br />
                        Just a handful packs of vitamins, minerals and fats, all of which work together to affect your heart and your brain.
                        </p>
                            <a id="LinkItem" href="https://www.livestrong.com/article/411381-what-are-the-health-benefits-of-eating-nuts-seeds/">  <LinkIcon /> </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Blog