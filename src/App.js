import './App.css';
import App_Header from "./Components/Header/App_Header";
import AppMain from "./Components/Header/AppMain";
import {Component} from "react";
import Add_delete from "./Components/Header/Add_delete";
import ToDoList from "./Components/Header/ToDoList";
import ToDoListUse from "./Components/Header/ToDoListUse";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 10
        }
        console.log("hi")
    }
    componentDidMount() {
        console.log("did mount")
    }

    handleClick = () => {
        this.setState({
            x: 15
        })
    }

    render() {
        const nav = ["Home", "About Us", "Contact", "Products"]
        return (
            <div className="App">
             {/*   <App_Header age={this.state.x} nav={nav}/>
                <AppMain/>
                <button className="btn" onClick={this.handleClick}>Click</button>
                <hr/>
                <Add_delete/>
                <hr/>*/}
                <ToDoList/>
                <ToDoListUse/>

            </div>

        );
    }
}

export default App;
