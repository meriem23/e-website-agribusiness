import React, { useState } from 'react';
import './Upload.css';
import { TextField, classes, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

const Categories = [
    { key: 1, value: 'Aromatics' },
    { key: 2, value: 'Bee Products' },
    { key: 3, value: 'Beverages' },
    { key: 4, value: 'Cereals and Grains' },
    { key: 5, value: 'Dairies' },
    { key: 6, value: 'Fruits' },
    { key: 7, value: 'Livestock' },
    { key: 8, value: 'Olive and Oil Products' },
    { key: 9, value: 'Poultry and Eggs' },
    { key: 10, value: 'Spices' },
    { key: 11, value: 'Vegetables' },
    { key: 12, value: 'Others' },
];

const Units = [
    { key: 1, value: 'Grams - 0.001Kg' },
    { key: 2, value: 'Kilograms - 1Kg' },
    { key: 3, value: 'Tons - 1000Kg' },
    { key: 4, value: 'Millilitres - 0.001L' },
    { key: 5, value: 'Litres - 1L' },
    { key: 6, value: 'DoubleLitres - 2L' },
    { key: 7, value: 'Decalitres - 10L' },
    { key: 8, value: 'Themna - 20L' },
    { key: 9, value: 'Weeba - 40L' },
    { key: 10, value: 'Qfiz - 640L' },
    { key: 11, value: 'Hara - 4Eggs' },
    { key: 12, value: 'Half Dozen - 6Eggs' },
    { key: 13, value: 'Dozen - 12Eggs' },
    { key: 14, value: 'Arbitrary Unit - Always 1' }
]

function Upload() {

    const [category, setCategory] = useState('')
    const [unit, setUnit] = useState('')
    const [TitleValue, setTitleValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)

    const onTitleChange = (e) => {
        setTitleValue(e.target.value)
    }

    const onPriceChange = (e) => {
        setPriceValue(e.target.value)
    }

    const onCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const onUnitChange = (e) => {
        setUnit(e.target.value)
    }

    return (
        <div className='productFormCont'>
            <div className='title'>
                <h2>Add a new product</h2>
            </div>
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Product Title and Description" variant="outlined" onChange={onTitleChange} value={TitleValue} />
                    <br />
                    <br />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={category}
                            onChange={onCategoryChange}
                        >
                            {Categories.map(el => (
                                <MenuItem key={el.key} value={el.key}>{el.value}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Quantity in stock" variant="outlined" />
                    <br />
                    <br />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Unit of Purchase</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={unit}
                            onChange={onUnitChange}
                        >
                            {Units.map(el => (
                                <MenuItem key={el.key} value={el.key}>{el.value}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Price per Unit" variant="outlined" type='number' onChange={onPriceChange} value={PriceValue} />
                    <br />
                    <br />
                    <Button variant="contained" color="success" href="#contained-buttons">
                        Link
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Upload
