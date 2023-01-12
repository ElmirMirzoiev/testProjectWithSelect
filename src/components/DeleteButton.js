import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

export default function DeleteButton({handleDelete, item, index}) {
    return (
        <>
            <IconButton onClick={() => handleDelete(item, index)}>
                <DeleteIcon/>
            </IconButton>
        </>
    )
}
