import React from 'react'

import { AddOptions } from './AddOptions'
import { Action } from './Action'
import { Header } from './Header'
import { Options } from './Options'

class IndecisionApp extends React.Component{
    state = {
      options : []
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
  
    handleDeleteOptions = () => {
      this.setState(() => ({options: []}))
    }
  
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) =>({ options : prevState.options.filter((option) => option != optionToRemove )}))
    }
  
    handlePick = () => {
      const pick = Math.floor(Math.random() * this.state.options.length)
      alert(this.state.options[pick])
    }
  
    handleAddOption = (option) => {
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

export { IndecisionApp }