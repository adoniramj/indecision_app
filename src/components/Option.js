import React from 'react'

const Option  = (props) => (
        <div className='option'>
        <p className='option__text'>{(props.index) + '.'} {props.optionText}</p>
        <button 
          className='button button--link'
          onClick={() => props.handleDeleteOption(props.optionText)}>Remove option</button>
      </div>
)

export { Option }