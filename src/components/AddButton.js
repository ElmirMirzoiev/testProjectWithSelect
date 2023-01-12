import React from 'react'
import Button from '@mui/material/Button'


export default function AddButton({handleAdd}) {
    return (
        <div>
            <Button variant="outlined" size="small" onClick={handleAdd}>
                Add
            </Button>
        </div>
    )
}