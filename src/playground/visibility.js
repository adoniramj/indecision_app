const appRoot = document.getElementById('app')

let bool_hidden = true

const visibilityHandler = () => {
    bool_hidden = !bool_hidden
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={visibilityHandler}>{bool_hidden ? 'Show details' : 'Hide details'}</button>
            <p hidden={bool_hidden}>The details are visible</p>
        </div>
    )
    ReactDOM.render(template,appRoot)

}

render()