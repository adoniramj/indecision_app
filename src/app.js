console.log('App.js is running! Is it?')

var template = (
    <div>
        <h1>This is JSX from app.js!</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

var templateTwo = (
    <div>
        <h1>Josue</h1>
        <p>Age: 47</p>
        <p>Location: Miramar</p>
    </div>
)

var appRoot = document.getElementById('app')
ReactDOM.render(templateTwo,appRoot)
