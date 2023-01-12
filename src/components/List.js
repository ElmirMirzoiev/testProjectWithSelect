import React from 'react'
import {Reorder} from 'framer-motion'
import ListItem from './ListItem'

export default function List({setListItems, listItems, handleDelete}) {
    return (
        <>
            <Reorder.Group className="list" axis="y" onReorder={setListItems} values={listItems}>

                {listItems.map((item, index) => (
                    <ListItem key={item} item={item} index={index} handleDelete={handleDelete}/>
                ))}

            </Reorder.Group>
        </>
    )
}