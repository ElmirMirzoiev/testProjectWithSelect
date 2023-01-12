import React, {useState} from 'react'
import AddButton from './AddButton'
import List from './List'
import MySelect from './MySelect'

export default function AppContainer({data, setData}) {

    const [selectedItem, setSelectedItem] = useState('')
    const [listItems, setListItems] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        setSelectedItem(e.target.value)
    }

    const handleAdd = () => {
        if (selectedItem === '') return
        setListItems([...listItems, selectedItem])
        setData(data.filter(item => item !== selectedItem))
        setSelectedItem('')
    }

    const handleDelete = (item, index) => {
        setListItems(listItems.filter(item => listItems.indexOf(item) !== index))
        setData([...data, item])
    }

    return (
        <div>
            <MySelect selectedItem={selectedItem} data={data} handleChange={handleChange}/>
            <AddButton handleAdd={handleAdd}/>
            <List setListItems={setListItems} listItems={listItems} handleDelete={handleDelete}/>
        </div>
    )
}
