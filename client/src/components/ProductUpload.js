import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../actions/ProductActions'
import { TextField, FormControl, InputLabel, Select, MenuItem, InputAdornment } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
    root: {
        '& > *': {
            margin: '10px',
            width: '20ch',
        },
    },
    largeIcon: {
        width: 50,
        height: 50,
        color: 'blue'
    },
}
class ProductUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            quantity: "",
            unit: "",
            price: "",
            location: "",
            description: "",
            image: ""
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="MyContainer">
                <div className="MyProductCard">
                    <div className='title'>
                        <p className="LogoTitle">The Farm</p>
                        <h2>Add a New Product</h2>
                    </div>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Product Name"
                                variant="outlined"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange} />
                            <FormControl variant="outlined" >
                                <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Location"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.handleChange} >
                                    <MenuItem value="">
                                        <em>Your Location</em>
                                    </MenuItem>
                                    <MenuItem value={"Ariana"}>Ariana</MenuItem>
                                    <MenuItem value={"Béja"}>Béja</MenuItem>
                                    <MenuItem value={"Ben Arous"}>Ben Arous</MenuItem>
                                    <MenuItem value={"Bizert"}>Bizert</MenuItem>
                                    <MenuItem value={"Gabès"}>Gabès</MenuItem>
                                    <MenuItem value={"Gafsa"}>Gafsa</MenuItem>
                                    <MenuItem value={"Jandouba"}>Jandouba</MenuItem>
                                    <MenuItem value={"Kairouan"}>Kairouan</MenuItem>
                                    <MenuItem value={"Kasserine"}>Kasserine</MenuItem>
                                    <MenuItem value={"Kébili"}>Kébili</MenuItem>
                                    <MenuItem value={"Kef"}>Kef</MenuItem>
                                    <MenuItem value={"Mahdia"}>Mahdia</MenuItem>
                                    <MenuItem value={"Manouba"}>Manouba</MenuItem>
                                    <MenuItem value={"Médnine"}>Médenine</MenuItem>
                                    <MenuItem value={"Monastir"}> Monastir</MenuItem>
                                    <MenuItem value={"Nabeul"}>Nabeul</MenuItem>
                                    <MenuItem value={"Sfax"}>Sfax</MenuItem>
                                    <MenuItem value={"Sidi Bouzid"}>Sidi Bouzid</MenuItem>
                                    <MenuItem value={"Siliana"}>Siliana</MenuItem>
                                    <MenuItem value={"Sousse"}>Sousse</MenuItem>
                                    <MenuItem value={"Tataouine"}>Tataouine</MenuItem>
                                    <MenuItem value={"Tozeur"}>Tozeur</MenuItem>
                                    <MenuItem value={"Tunis"}>Tunis</MenuItem>
                                    <MenuItem value={"Zaghouan"}>Zaghouan</MenuItem>
                                </Select>
                            </FormControl>
                            <br />
                            <FormControl variant="outlined" >
                                <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Category"
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.handleChange} >
                                    <MenuItem value="">
                                        <em>Product Category</em>
                                    </MenuItem>
                                    <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
                                    <MenuItem value={"Fruits"}>Fruits</MenuItem>
                                    <MenuItem value={"Livestock"}>Livestock</MenuItem>
                                    <MenuItem value={"Dairies"}>Dairies</MenuItem>
                                    <MenuItem value={"Poultry & Eggs"}>Poultry & Eggs</MenuItem>
                                    <MenuItem value={"Fish"}>Fish</MenuItem>
                                    <MenuItem value={"Spices"}>Spices</MenuItem>
                                    <MenuItem value={"Cereals & Beans"}>Cereals & Beans</MenuItem>
                                    <MenuItem value={"Nuts & Seeds"}>Nuts & Seeds</MenuItem>
                                    <MenuItem value={"Olives & Oils"}>Olives & Oil</MenuItem>
                                    <MenuItem value={"Beverages"}>Beverages</MenuItem>
                                    <MenuItem value={"Bee Products"}>Bee Products</MenuItem>
                                </Select>
                            </FormControl> 
                            <TextField id="outlined-basic" label="Quantity"
                                variant="outlined"
                                name="quantity"
                                value={this.state.quantity}
                                onChange={this.handleChange} />
                            <br />
                            <FormControl variant="outlined" >
                                <InputLabel id="demo-simple-select-outlined-label">Sales Unit</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Sales Unit"
                                    name="unit"
                                    value={this.state.unit}
                                    onChange={this.handleChange} >
                                    <MenuItem value="">
                                        <em>Product Unit</em>
                                    </MenuItem>
                                    <MenuItem value={"1 - Arbitrary Uni"}>1 - Arbitrary Unit</MenuItem>
                                    <MenuItem value={"Grams - 0.001Kg"}>Grams - 0.001Kg</MenuItem>
                                    <MenuItem value={"Kilograms - 1Kg"}>Kilograms - 1Kg</MenuItem>
                                    <MenuItem value={"Tons - 1000Kg"}>Tons - 1000Kg</MenuItem>
                                    <MenuItem value={"Millilitres - 0.001L"}>Millilitres - 0.001L</MenuItem>
                                    <MenuItem value={"Litres - 1L"}>Litres - 1L</MenuItem>
                                    <MenuItem value={"Decalitres - 10L"}>Decalitres - 10L</MenuItem>
                                    <MenuItem value={"Themna - 20L"}>Themna - 20L</MenuItem>
                                    <MenuItem value={"Weeba - 40L"}>Weeba - 40L</MenuItem>
                                    <MenuItem value={"Qfiz - 640L"}>Qfiz - 640L</MenuItem>
                                    <MenuItem value={"Hara - 4Eggs"}>Hara - 4Eggs</MenuItem>
                                    <MenuItem value={"Half Dozen - 6Eggs"}>Half Dozen - 6Eggs</MenuItem>
                                    <MenuItem value={"Dozen - 12Eggs"}>Dozen - 12Eggs</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Price per Unit"
                                variant="outlined"
                                name="price"
                                value={this.state.price}
                                onChange={this.handleChange}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">DT</InputAdornment>
                                }} />
                            <br />
                            <TextField id="outlined-basic" label="Product Description"
                                variant="outlined"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange} />
                            <TextField id="outlined-basic" label="Product Picture"
                                variant="outlined"
                                name="image"
                                value={this.state.image}
                                onChange={this.handleChange} />
                            <br />
                            <br />
                            <button className="InBtn"
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.props.addProduct(this.state)
                                    this.setState({
                                        name: "", category: "", quantity: "", unit: "",
                                        price: "", location: "", description: "", image: ""
                                    })
                                }}>Add Product
                           </button>
                        </form>
                        <br />
                        <hr />
                        <Link id="LinkItem" to="/store">Return to the Store</Link>
                    </div>
                </div>
            </div>
        )
    }
}
ProductUpload.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default connect(null, { addProduct })(withStyles(styles)(ProductUpload))