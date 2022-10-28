// How "this" and "bind" works in React

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state= {isToggleOn: true};

        // This binding is necessary to make "this" work in the callback
        this.handleClick = this.handleClick.bind(this);
        //Note: We must bind "this.handleClick" to the class "Toggle", so the "this" keyword doesn't refer to the actual button clicked on. Because bellow we use "this.setState" we want to set the state of Toggle.
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
