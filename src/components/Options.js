import React from 'react'

import { Option } from './Option'

const Options = (props) => ( 
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


export { Options }