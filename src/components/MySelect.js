import InputLabel from "@mui/material/InputLabel"
import DeleteIcon from "@mui/icons-material/Delete"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"
import IconButton from "@mui/material/IconButton"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import {Reorder} from "framer-motion"
import React, {useState} from "react"

function MySelect({arr, setArr}) {
    const [selectedItem, setSelectedItem] = useState('')
    const [listItems, setListItems] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        setSelectedItem(e.target.value)
    }

    const handleAdd = () => {
        if (selectedItem === '') return
        setListItems([...listItems, selectedItem])
        setArr(arr.filter(el => el !== selectedItem))
        setSelectedItem('')
        console.log(arr)
    }
    const handleDelete = (el, index) => {
        setListItems(listItems.filter(el => listItems.indexOf(el) !== index))
        setArr([...arr, el])
    }
    return (
        <div>
            <FormControl sx={{m: 1, minWidth: 200}}>
                <InputLabel>Item</InputLabel>
                <Select
                    sx={{m: 1, width: 300}}
                    value={selectedItem}
                    onChange={handleChange}
                >
                    {arr.map(el => (
                        <MenuItem key={el} value={el}>
                            {el}
                        </MenuItem>))
                    }
                </Select>
            </FormControl>
            <div>
                <Button variant='outlined' size='small' onClick={handleAdd}>
                    Add
                </Button>
            </div>
            <div className='list'>
                <Reorder.Group axis='y' onReorder={setListItems} values={listItems}>
                    <ul>
                        {listItems.map((el, index) => (
                            <Reorder.Item className='listItem' key={el} value={el}>
                                {el}
                                <IconButton onClick={() => handleDelete(el, index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </Reorder.Item>
                        ))}
                    </ul>
                </Reorder.Group>
            </div>
        </div>
    )
}

export default MySelect
