let count = 0

const addOne = function(e){
    console.log(e)
    console.log(typeof e)
    console.log(e.type)
    console.log(arguments)
    count++
    renderCounterApp()
}
// const addOne = (e) => {
//     console.log(e)
//     console.log(e.type)
//     count++
//     console.log('addOne', count)
//     renderCounterApp()
// }

const minusOne = (e) => {
    count--
    console.log('minusOne')
    renderCounterApp()
}

const reset = () => {
    count = 2
    console.log('reset')
    renderCounterApp()
}

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minusOne} className="button">-1</button>
            <button onClick={reset} className="button">Reset</button>
        </div>
    )
    ReactDOM.render(templateTwo,appRoot)
}


var appRoot = document.getElementById('app')

renderCounterApp()