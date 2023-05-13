import React, {Component} from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            list: [],
            editInput: -1,
            savedInput: ''
        }
    }
    // shouldComponentUpdate(nextProps) {
    //     console.log(nextProps, " wefwefwefwef1")
    //     console.log(this.props, " wefwefwefwef123")
    //     return true
    // }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
        // const value = event.target.value;
        // this.setState((prevState) => ({
        //     ...prevState,
        //     text: value,
        // }))
    }

    addTextInput = () => {
        if (this.state.text !== "") {
            this.setState({
                list: [...this.state.list, this.state.text],
            })
        }
        this.state.text = ''
        this.setState({
            text: ""
        })
    }

    editButton = (index,item) => {
         this.state.list.some((num, i) => {
            if (i === index) {
                this.setState({
                    editInput: index,
                    savedInput : item
                })
            }
        })
    }


    removeButton = (index) => {
     //   console.log(index)
        const newList = this.state.list.filter((num, i) => i !== index)
        this.setState({
            list: newList,
        })
    }


    changeEditInput = (event) => {
        const value = event.target.value;
        this.setState({
            savedInput: value,
        });
    }


    handleSave = (index) => {
        let newArr = this.state.list;
        newArr[index] = this.state.savedInput
       // console.log(this.state.list[index])
        this.setState({
            list: newArr,
            editInput: -1
        })
    }


    render() {

        const {list, text, editInput, savedInput} = this.state
        // console.log(this.state.list, "List")
       // console.log(list)
        return (<div className="todo">
            <h1 className='todo__text'>список задач</h1>
            <div className="todo__box">
                <input className="todo__input2" type="text" onChange={this.handleChange} value={text}
                       placeholder='enter your text'/>
                <button className="todo__btn1" onClick={this.addTextInput}>Add</button>
            </div>
            <div className="todo__list">
                <ul className="todo__out-list">
                    {list.map((item, index) => (
                        <li className="todo__out_text" key={index}><p>{editInput === index ?
                            <input className="todo__edite-text" value={!savedInput ? item : savedInput} onChange={this.changeEditInput}/> : item}</p>
                            {
                                editInput === index ?
                                    <button className="todo__btn1" onClick={() => this.handleSave(index)}>Save</button> :
                                    <button className="todo__btn1" onClick={() => this.editButton(index,item)}>Edit</button>

                            }

                            <button className="todo__btn1"  disabled={!editInput} onClick={() => this.removeButton(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>);
    }
}

export default ToDoList;