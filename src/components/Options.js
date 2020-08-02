import React from 'react'

import { Option } from './Option'

const Options = (props) => ( 
  <div>
    <div className='widget-header' >
      <h3 className='widget-header__title'>Your options</h3>
      <button 
        className='button button--link'
        onClick={props.handleDeleteOptions}
        disabled={!props.hasOptions}
      >
        Remove all options
      </button>
    </div>
      {
        !props.hasOptions && <p className="widget__message">Please add an option to get started!</p>
      }    
    {
      props.options.map((option,index) => (
      <Option  
        key={index}
        index={index + 1}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />))
    }
  </div>
)


export { Options }