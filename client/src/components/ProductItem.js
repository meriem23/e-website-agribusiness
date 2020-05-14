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
import Avatars from './Avatars'
// import { Button } from 'react-bootstrap'
// import Card from 'react-bootstrap/Card'


const ProductItem = ({ prod, deleteProduct, props }) => {
    return (
        <div>
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            {prod.name.slice(0,1)}
                    </Avatar>
                    }
                    title={prod.name}
                    subheader={prod.date} />
                {<CardMedia
                    image={prod.image}
                    title={prod.name} />}
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
                </CardActions>
                <div>
                    <button onClick={() => deleteProduct(prod._id)}>Delete Product</button>
                </div>
            </Card>
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { deleteProduct })(ProductItem)