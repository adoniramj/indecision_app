console.log('App.js is running')

// JSX - JavaScript XML

var template = (
    <div>
      <h1>Adoniram</h1> 
      <p>This is some info</p>
      <ol>
      <li>Item one</li>
      <li>Item two</li>
      </ol>
    </div>
)

var templateTwo = (
  <div>
    <h1>Adoniram Vargas</h1>
    <p>age: 46</p>
    <p>location: Miami</p>
  </div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot)