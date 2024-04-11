import React, { useState } from 'react';
import Heading from './Heading';
import ListItem from './ListItem';
// import ReactDOM from 'react-dom/client';

function App() {
    // let todoListArr = [{ "id": 1, "text": "Buy Apple" }, { "id": 2, "text": "Buy Banana" }, { "id": 3, "text": "Buy Mango" }]
    function myFunction(obj, index) {
        return <ListItem text={obj} id={index} key={index} onSelect={deleteItem} />
    }
    function deleteItem(id) {
        setTodoListArr((prevStateArray) => {
            return prevStateArray.filter((arrEle, index) => {
                return index !== id
            })
        })
    }
    function addItem() {
        setTodoListArr(prevStateArray => [...prevStateArray, itemValue]);
        console.log(todoListArr)
        setItemValue("")
    }
    function setItem(e) {
        setItemValue(e.target.value)
    }
    const [todoListArr, setTodoListArr] = useState([]);
    const [itemValue, setItemValue] = useState("");


    return (
        <>
            <Heading />
            <div className='parentContainer'>
                <input type="text" className='EnterListItem' id='EnterListItem' placeholder='Enter the items to add' onChange={setItem} value={itemValue} />
                <button className='addIcon' onClick={addItem} disabled={itemValue === "" ? true : false}>+</button>
                {/* <button className='addIcon'>+</button> */}
            </div>
            <div className="displayListContainer">
                {todoListArr.length === 0 ? "" : <h1>Your ToDo List Items</h1>}
                <div className="list">
                    <ol id='listItems'>
                        {todoListArr.map(myFunction)}
                    </ol>
                </div>
            </div>
            <div className="footer">
                <footer>
                    <p>Darshan Jain </p>
                    <p style={{"fontSize":"20px"}}>&copy; 2024 All Copyrights reserved</p>
                    <div>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-github"></ion-icon>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default App;