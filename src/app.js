class IndecisionApp extends React.Component{
  render(){
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computers'
    const options = ['One', 'Two', 'Four']
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} what='Say what'/>
        <AddOptions />
      </div>
    )
  }
}

class Header extends React.Component { // React.Component is a class. Uppercase is enforced.
  render() { // render method does not take arguments. Returns jsx
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick(){
    alert('Handle picked')
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll(){
    alert('Remove all?')
  }
  render() {
    return ( 
      <div>
        <button onClick={this.handleRemoveAll}>Remove all options</button>
        {this.props.options.map((option,index) => <Option  key={index} optionText={option}/>)}
      </div>
    )
  }
}

class Option extends React.Component {
  render(){
    return (
      <p>Option: {this.props.optionText}</p>
    )
  }
}

class AddOptions extends React.Component {
  handleAddOption(e){
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if(option){
      alert(option)
    }
    e.target.elements.option.value = ''

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Submit option</button>
        </form>
      </div>
    )
  }
}

const appRoot = document.getElementById('app')

ReactDOM.render(<IndecisionApp />, appRoot) 