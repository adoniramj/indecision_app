import React from 'react'

class AddOptions extends React.Component {
    state = {
        error : undefined
    }

handleAddOption = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option) //return a string or undefined
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

export {AddOptions}