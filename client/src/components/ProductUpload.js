import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../actions/ProductActions'
import { TextField, FormControl, InputLabel, Select, MenuItem, InputAdornment } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { DropzoneDialog } from 'material-ui-dropzone'
import PropTypes from 'prop-types'

const Categories = [
    { key: 1, value: 'Vegetables' },
    { key: 2, value: 'Fruits' },
    { key: 3, value: 'Livestock' },
    { key: 4, value: 'Poultry & Eggs' },
    { key: 5, value: 'Fish' },
    { key: 6, value: 'Dairies' },
    { key: 7, value: 'Cereals & Grains' },
    { key: 8, value: 'Nuts & Seeds' },
    { key: 9, value: 'Olives & Oil Products' },
    { key: 10, value: 'Beverages' },
    { key: 11, value: 'Bee Products' },
    { key: 12, value: 'Spices' }
]
const Units = [
    { key: 1, value: '1 - Arbitrary Unit' },
    { key: 2, value: 'Grams - 0.001Kg' },
    { key: 3, value: 'Kilograms - 1Kg' },
    { key: 5, value: 'Tons - 1000Kg' },
    { key: 5, value: 'Millilitres - 0.001L' },
    { key: 6, value: 'Litres - 1L' },
    { key: 7, value: 'Decalitres - 10L' },
    { key: 8, value: 'Themna - 20L' },
    { key: 9, value: 'Weeba - 40L' },
    { key: 10, value: 'Qfiz - 640L' },
    { key: 11, value: 'Hara - 4Eggs' },
    { key: 12, value: 'Half Dozen - 6Eggs' },
    { key: 13, value: 'Dozen - 12Eggs' }
]
const Locations = [
    { key: 1, value: 'Ariana' },
    { key: 2, value: 'Béja' },
    { key: 3, value: 'Ben Arous' },
    { key: 5, value: 'Bizert' },
    { key: 5, value: 'Gabès' },
    { key: 6, value: 'Gafsa' },
    { key: 7, value: 'Jandouba' },
    { key: 8, value: 'Kairouan' },
    { key: 9, value: 'Kasserine' },
    { key: 10, value: 'Kébili' },
    { key: 11, value: 'Kef' },
    { key: 12, value: 'Mahdia' },
    { key: 13, value: 'Manouba' },
    { key: 14, value: 'Médenine' },
    { key: 15, value: 'Monastir' },
    { key: 16, value: 'Nabeul' },
    { key: 17, value: 'Sfax' },
    { key: 18, value: 'Sidi Bouzid' },
    { key: 19, value: 'Siliana' },
    { key: 20, value: 'Sousse' },
    { key: 21, value: 'Tataouine' },
    { key: 22, value: 'Tozeur' },
    { key: 23, value: 'Tunis' },
    { key: 24, value: 'Zaghouan' }
]
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
            image: [],
            open: false
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(image) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            image: image,
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
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
                            <FormControl variant="outlined">
                                <InputLabel
                                    id="demo-simple-select-outlined-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="location"
                                    label="Location"
                                    value={this.state.location}
                                    onChange={this.handleChange}>
                                    {Locations.map(el => (
                                        <MenuItem key={el.key} value={el.key}>{el.value}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br />
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    name="category"
                                    label="Category"
                                    value={this.state.category}
                                    onChange={this.handleChange}>
                                    {Categories.map(el => (
                                        <MenuItem key={el.key} value={el.key}>{el.value}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Quantity"
                                variant="outlined"
                                name="quantity"
                                value={this.state.quantity}
                                onChange={this.handleChange} />
                            <br />
                            <FormControl variant="outlined" >
                                <InputLabel id="demo-simple-select-helper-label">Sales Unit</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    name="unit"
                                    label="Sales Unit"
                                    value={this.state.unit}
                                    onChange={this.handleChange}>
                                    {Units.map(el => (
                                        <MenuItem key={el.key} value={el.key}>{el.value}</MenuItem>
                                    ))}
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
                            <div>
                                <button className="InBtn" onClick={this.handleOpen.bind(this)}>
                                    Add Image
                                </button>
                                <DropzoneDialog
                                    open={this.state.open}
                                    onSave={this.handleSave.bind(this)}
                                    acceptedFiles={['image/jpg', 'image/png']}
                                    showPreviews={true}
                                    maxFileSize={5000000}
                                    onClose={this.handleClose.bind(this)}
                                />
                            </div>
                            <br />
                            <br />
                            <button className="InBtn"
                                onClick={() => this.props.addProduct(this.state)}>Add Product
                           </button>
                        </form>
                        <br />
                        <hr />
                        <Link id="LinkItem" to="/seller_account">Return to your acount</Link>
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