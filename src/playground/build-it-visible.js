class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });        
    }
    render(){
        return 
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>showing details! Wow awesome!</p>
                    </div>
                )}
          </div>;
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));