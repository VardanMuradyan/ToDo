import {Component} from "react";


class add_delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0
        }
    }

    buttonAdd = () => {
        let count = this.state.x;
        count++;
        this.setState({x: count});
    }
    buttonDelete = () => {
        let count = this.state.x;
        count--;
        this.setState({x: count});
    }

    render() {
        return (
            <div className="add_delete">
                <button className="btn" onClick={this.buttonAdd}>+</button>
                <div className="number">{this.state.x}</div>
                <button className="btn" onClick={this.buttonDelete}>-</button>
            </div>
        )

    }

}


export default add_delete;