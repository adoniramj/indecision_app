 class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: props.options
    }
  }
  
  static getDerivedStateFromProps(props){

  }

  componentDidMount(){
    try {
      const options = JSON.parse(localStorage.getItem('options'))
      this.setState(() => ({ options }))
    } catch (error) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}))
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) =>({ options : prevState.options.filter((option) => option != optionToRemove )}))
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
    this.setState((prevState) => ({options : prevState.options.concat(option)}))
  }

  render(){
    const subtitle = 'Put your life in the hands of a computers'
    return(
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0 ? true : false}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          hasOptions={this.state.options.length > 0 ? true : false}
          
        />
        <AddOptions 
          handleAddOption={this.handleAddOption}
          addOptions={this.state.options.length == 0 ? true : false } 
          />
      </div>
    )
  }
}


const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
         { props.subtitle &&  <h2>{props.subtitle}</h2>}
      </div>
    )
}

Header.defaultProps = {
  title:'Indecision App'
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
    console.log(props)
    return ( 
      <div>
        <button 
          onClick={props.handleDeleteOptions}
          disabled={!props.hasOptions}
        >
          Remove all options
        </button>
        {props.options.map((option,index) => (
          <Option  
            key={index} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />))}
      </div>
    )
}

class Option extends React.Component{

  componentWillUnmount(){
    
  }

  render(){
    return(
      <div>
      Option: {this.props.optionText}
      <button onClick={() => this.props.handleDeleteOption(this.props.optionText)}>Remove option</button>
    </div>
    )
  }
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error : undefined
    }
    
  }
  componentDidMount(){
   
  }
  componentDidUpdate(){
    
  }

  handleAddOption(e){
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option) //return a string or undefine
    this.setState(()=> ({ error }))
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

ReactDOM.render(<IndecisionApp options={[]}/>, appRoot) 