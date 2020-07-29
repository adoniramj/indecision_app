class Visibility extends React.Component {
    constructor(props){
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state = {
            visibility : false
        }
    }

    handleVisibility () {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {
                    this.state.visibility && (
                        <p>Hey. These are the details</p>
                    )
                }
            </div>
        )
    }
}


const appRoot = document.getElementById('app')

ReactDOM.render(<Visibility />, appRoot)