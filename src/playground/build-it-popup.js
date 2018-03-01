class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleOptionOne = this.handleOptionOne.bind(this);
        this.handleOptionTwo = this.handleOptionTwo.bind(this);
        this.handleOptionThree = this.handleOptionThree.bind(this);

        this.state = {
            optionOne: false,
            optionTwo: false,
            optionThree: false
        }
    }
    handleOptionOne() {
        this.setState((prevState) => {
            return {
                optionOne: !prevState.optionOne
            };
        });
    }
    handleOptionTwo() {
        this.setState((prevState) => {
            return {
                optionTwo: !prevState.optionTwo
            };
        });
    } 
    handleOptionThree() {
        this.setState((prevState) => {
            return {
                optionThree: !prevState.optionThree
            };
        });
    }
    render() {
        return (
                <div>
                    <h1>I Love you because...</h1>
                    <button onClick={this.handleOptionOne}>
                        {this.state.optionOne ? "Hide Option" : "Show Option"}
                    </button>
                    <button onClick={this.handleOptionTwo}>
                        {this.state.optionTwo ? "Hide Option" : "Show Option"}
                    </button>
                    <button onClick={this.handleOptionThree}>
                        {this.state.optionThree ? "Hide Options" : "Show Option"}
                    </button>
                    {this.state.optionOne && (
                        <p>...you are such a beautiful person inside and out.</p>
                    )}
                    {this.state.optionTwo && (
                        <p>...the warmth of your heart feels the room.</p>
                    )}
                    {this.state.optionThree && (
                        <p>...Your beauty is unmatched.</p>
                    )}
                </div>
            );
    }
}

ReactDOM.render(<Options />, document.getElementById("app"));