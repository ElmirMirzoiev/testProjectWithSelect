import "./App.css"
import axios from "axios"
import MySelect from "./components/MySelect"
import React, {useEffect, useRef, useState} from "react"

function App() {

    const src = "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5"
    const shouldLoad = useRef(true)
    const [arr, setArr] = useState([])
    useEffect(() => {
        if (shouldLoad.current) {
            shouldLoad.current = false
            axios.get(src).then(res => setArr(res.data))
        }
    }, [])

    return (
        <div className='App'>
            <div className='board1'>
                <MySelect setArr={setArr} arr={arr}/>
            </div>
            <div className='board2'>
                <MySelect setArr={setArr} arr={arr}/>
            </div>
        </div>
    )
}

export default App
