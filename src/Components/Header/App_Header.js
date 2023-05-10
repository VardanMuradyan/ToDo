import {Component} from "react";


class App_Header extends Component {

    render() {
        const {age, nav} = this.props
        const list = nav.map(item => <li key={item} className="nav_list"><a href="#">{item}</a></li>)
        return <div>
            <h2 className="h2">i em {age}</h2>
            <ul className="ul">
                {list}
            </ul>
        </div>
    }

}

// function App_Header() {
//     return (
//         <header className="App-header">
//             <p>
//                 firs React Components
//             </p>
//         </header>
//     );
// }

export default App_Header;