console.log('App.js is running! Is it?')

var app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer!',
    options : []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if(option){
        app.options.push(option)
        console.log(app.options)
        e.target.elements.option.value = ''
        renderingApp()
    }
}

const onRemoveAll = (e)=> {
    console.log(e)
    app.options = []
    renderingApp()
}

const renderingApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove options</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add option</button>
            </form>
        </div>
    )
    ReactDOM.render(template,appRoot)
}


const appRoot = document.getElementById('app')


renderingApp()