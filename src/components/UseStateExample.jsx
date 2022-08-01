import {useState} from 'react'

function UseStateExample() {
    const[state, setState] = useState({count:4, theme: 'blue'})
    const count = state.count
    const theme = state.theme 

    function decrementCount(){
        setState(prevState => {
            return {...prevState, count:prevState.count - 1}
        })
    }
    function incrementCount(){
        setState(prevState => {
            return {...prevState, count:prevState.count + 1}
        })
    }

    return (
        <div className='container flex'>
            <button onClick={decrementCount}>-</button>
            <h1>{count}</h1>
            <h1>{theme}</h1>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default UseStateExample