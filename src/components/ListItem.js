import React from 'react'
import {Reorder} from 'framer-motion'
import DeleteButton from './DeleteButton'


export default function ListItem({handleDelete, item, index}) {
    return (
        <>
            <Reorder.Item className="listItem" key={item} value={item}>
                {item}
                <DeleteButton handleDelete={handleDelete} item={item} index={index}/>
            </Reorder.Item>
        </>
    )
}