import React, {useState} from 'react';

function ToDoListUse() {
    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [editInput, setEditInput] = useState(-1)
    const [savedInput, setSavedInput] = useState('')

    console.log(list)
    const handleChange = (event) => {
        setText(event.target.value)
    }

    const addTextInput = () => {
        if (text !== "") {
            setList([...list, text])
        }
        setText("")
    }

    const editButton = (index, item) => {
        list.some((num, i) => {
            if (i === index) {
                // setText({
                //     editInput: index,
                //     savedInput: item
                // })
                setEditInput(index)
                setSavedInput(item)
            }
        })
    }


    const removeButton = (index) => {
        //  console.log(index)
        const newList = list.filter((num, i) => i !== index)
        setList(newList)
    }


    const changeEditInput = (event) => {
        const value = event.target.value;
        setSavedInput(value);
    }


    const handleSave = (index) => {
        let newArr = list;
        newArr[index] = savedInput
        //  console.log(list[index])
        setList(newArr)
        setEditInput(-1)
    }

    return (
        <>
            <div className="todo">
                <h1 className='todo__text'>список задач</h1>
                <div className="todo__box">
                    <input className="todo__input2" type="text" onChange={handleChange} value={text}
                           placeholder='enter your text'/>
                    <button className="todo__btn1" onClick={addTextInput}>Add</button>
                </div>
                <div className="todo__list">
                    <ul className="todo__out-list">
                        {list.map((item, index) => (
                            <li className="todo__out_text" key={index}><p>{editInput === index ?
                                <input className="todo__edite-text" value={!savedInput ? item : savedInput}
                                       onChange={changeEditInput}/> : item}</p>
                                {
                                    editInput === index ?
                                        <button className="todo__btn1"
                                                onClick={() => handleSave(index)}>Save</button> :
                                        <button className="todo__btn1"
                                                onClick={() => editButton(index, item)}>Edit</button>

                                }

                                <button className="todo__btn1" disabled={!editInput}
                                        onClick={() => removeButton(index)}>Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ToDoListUse;