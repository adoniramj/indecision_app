 class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }

  handleDeleteOptions () {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick () {
    const pick = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[pick])
  }

  handleAddOption (option) {
    if(!option){
      return 'Enter a valid item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already in the system'
    } 
    this.setState((prevState) => {
      return {
        options : prevState.options.concat(option)
      }
    })
  }

  render(){
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computers'
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0 ? true : false}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          hasOptions={this.state.options.length > 0 ? true : false}
        />
        <AddOptions handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    )
}

const Action = (props) => {
    return (
      <div>
        <button 
          disabled={!props.hasOptions}
          onClick={props.handlePick}>
          What should I do?
        </button>
      </div>
    )
}

const Options = (props) => {
    return ( 
      <div>
        <button 
          onClick={props.handleDeleteOptions}
          disabled={!props.hasOptions}
        >
          Remove all options
        </button>
        {props.options.map((option,index) => <Option  key={index} optionText={option}/>)}
      </div>
    )
}

const Option = (props) => {
  return (
    <p>Option: {props.optionText}</p>
  )
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error : undefined
    }
  }
  handleAddOption(e){
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option) //return a string or undefine

    this.setState(()=> {
      return { error }
    })

    e.target.elements.option.value = ''

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Submit option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

const appRoot = document.getElementById('app')

ReactDOM.render(<IndecisionApp/>, appRoot) 