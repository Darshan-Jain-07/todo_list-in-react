import React, { useState } from 'react';
import Heading from './Heading';
import ListItem from './ListItem';
import CompleteListItem from './CompleteListItem';
import Footer from './Footer'
// import ReactDOM from 'react-dom/client';

function App() {
    // let todoListArr = [{ "id": 1, "text": "Buy Apple" }, { "id": 2, "text": "Buy Banana" }, { "id": 3, "text": "Buy Mango" }]
    function myFunction(obj, index) {
        return <ListItem text={obj} id={index} key={index} onSelectDelete={deleteItem} onSelectUp={priorityUp} onSelectDown={priorityDown} list={todoListArr} onSelection={completeTask}/>
    }
    function myFunction2(obj, index) {
        return <CompleteListItem text={obj} id={index} key={index} onSelectDelete={deleteCompleteItem} list={todoListArr}/>
    }
    function completeTask(event,id){
        event.preventDefault();
        setCompleteListArr(prevStateArray => [...prevStateArray, todoListArr[id]])
        setTodoListArr((prevStateArray) => {
            return prevStateArray.filter((arrEle, index) => {
                return index !== id
            })
        })
        console.log(completeListArr)
    }
    function deleteItem(id) {
        setTodoListArr((prevStateArray) => {
            return prevStateArray.filter((arrEle, index) => {
                return index !== id
            })
        })
    }
    function deleteCompleteItem(id) {
        setCompleteListArr((prevStateArray) => {
            return prevStateArray.filter((arrEle, index) => {
                return index !== id
            })
        })
    }
    function priorityUp(id) {
        let newArr = todoListArr
        let temp = newArr[id]
        newArr[id]=newArr[id-1]
        newArr[id-1]=temp
        console.log(newArr)
        setTodoListArr(()=>{
            return newArr.filter((arrEle, index) => {
                return arrEle
            })
        });
    }
    function priorityDown(id) {
        let newArr = todoListArr
        let temp = newArr[id]
        newArr[id]=newArr[id+1]
        newArr[id+1]=temp
        console.log(newArr)
        setTodoListArr(()=>{
            return newArr.filter((arrEle, index) => {
                return arrEle
            })
        });
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
    const [completeListArr, setCompleteListArr] = useState([]);
    const [itemValue, setItemValue] = useState("");


    return (
        <>
            <Heading />
            <div className='parentContainer'>
                <input type="text" className='EnterListItem' id='EnterListItem' placeholder='Enter the items to add' onChange={setItem} value={itemValue} />
                <button className='addIcon' onClick={addItem} disabled={itemValue === "" ? true : false}>+</button>
            </div>
            <div className="displayListContainer">
                {todoListArr.length === 0 ? "" : <h1>Your ToDo List Items</h1>}
                <div className="list">
                    <ol id='listItems'>
                        {todoListArr.map(myFunction)}
                    </ol>
                </div>
            </div>
            <div className="displayListContainer" style={{"marginTop":"30px"}}>
                {completeListArr.length === 0 ? "" : <h1>Your Completed Task</h1>}
                <div className="list">
                    <ol id='listItems'>
                        {completeListArr.map(myFunction2)}
                    </ol>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;