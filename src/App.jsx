import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
    const [inputList, setInputList] = useState("");

    const [items, setItems] = useState([]);                       //! so here we have the problem that how another item a item will be stored so we created a useState array

    const eventItem = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {

        setItems((oldItems) => {
            return [...oldItems, inputList];

        });
        setInputList('');               //! here we are emptying the placeholder after clicked and item added
    }

    const deleteItem = (id) => {
        console.log('deleted');

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })

    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type='text' placehol-smder="Add a Item" value={inputList} onChange={eventItem}></input>
                    <button onClick={listOfItems}> + </button>
                    <ol>
                        {/* <li>{inputList}</li>  */}

                        {items.map((itemVal, index) => {
                            return <ToDoList
                                text={itemVal}
                                key={index}
                                id={index}
                                onSelect={deleteItem}
                            />
                        })}
                    </ol>
                </div>
            </div>

        </>
    )
}

export default App;