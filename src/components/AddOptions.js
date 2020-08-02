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
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form className='add-option' onSubmit={this.handleAddOption}>
            <input className='add-option__input' type='text' name='option' />
            <button className='button'>Submit option</button>
        </form>
       
    </div>
    )
}
}

export {AddOptions}