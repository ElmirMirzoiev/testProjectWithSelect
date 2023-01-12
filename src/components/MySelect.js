import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

export default function MySelect({selectedItem, handleChange, data}) {
    return (
        <>
            <FormControl sx={{m: 1, minWidth: 200}}>
                <InputLabel>Item</InputLabel>
                <Select
                    sx={{m: 1, width: 300}}
                    value={selectedItem}
                    onChange={handleChange}
                >
                    {data.map(item => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}