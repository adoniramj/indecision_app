import React from 'react'

class Option extends React.Component{

    render(){
      return(
        <div>
        Option: {this.props.optionText}
        <button onClick={() => this.props.handleDeleteOption(this.props.optionText)}>Remove option</button>
      </div>
      )
    }
}

export { Option }