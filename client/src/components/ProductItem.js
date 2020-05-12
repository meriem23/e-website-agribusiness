import React from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../actions/ProductActions'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'


const ProductItem = ({ prod, deleteProduct }) => {
    return (
        <div>
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            R
                       </Avatar>}
                    title={prod.name}
                    subheader={prod.date} />
                {/* <CardMedia
                    image={prod.image}
                    title={prod.name} /> */}
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>{prod.category}</p>
                        <p>{prod.quantity}</p>
                        <p>{prod.unit}</p>
                        <p>{prod.price}</p>
                        <p>{prod.description}</p>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
                <div>
                    <button onClick={() => deleteProduct(prod._id)}>Delete Product</button>
                </div>
            </Card>
        </div>
    )
}

export default connect(null, { deleteProduct })(ProductItem)