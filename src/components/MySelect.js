import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, {useState} from 'react'
import AddButton from './AddButton'
import List from './List'

export default function MySelect({arr, setArr}) {

    const [selectedItem, setSelectedItem] = useState('')
    const [listItems, setListItems] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        setSelectedItem(e.target.value)
    }

    const handleAdd = () => {
        if (selectedItem === '') return
        setListItems([...listItems, selectedItem])
        setArr(arr.filter(item => item !== selectedItem))
        setSelectedItem('')
        console.log(arr)
    }

    const handleDelete = (item, index) => {
        setListItems(listItems.filter(item => listItems.indexOf(item) !== index))
        setArr([...arr, item])
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
                    {arr.map(item => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <AddButton handleAdd={handleAdd}/>
            <List setListItems={setListItems} listItems={listItems} handleDelete={handleDelete}/>
        </div>
    )
}
