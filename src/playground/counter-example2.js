class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count : props.count
        }

        console.log(props)
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count : 0
            };
        });
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <h2>{this.props.subtitle}</h2>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count : 20,
    subtitle : 'Counter'
}
const appRoot = document.getElementById('app')

ReactDOM.render(<Counter />, appRoot)