import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import './App.css'
import AppContainer from './components/AppContainer'

function App() {

    const src = 'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5'
    const shouldLoad = useRef(true)
    const [data, setData] = useState([])
    useEffect(() => {
        if (shouldLoad.current) {
            shouldLoad.current = false
            axios.get(src).then(res => setData(res.data))
        }
    }, [])

    return (
        <div className="App">
            <div className="board1">
                <AppContainer data={data} setData={setData}/>
            </div>
            <div className="board2">
                <AppContainer data={data} setData={setData}/>
            </div>
        </div>
    )
}

export default App
