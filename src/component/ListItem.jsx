import React from "react"

function ListItem(props) {
    return (
        <div className='listItem' key={props.id} id={props.id}>
            <div>
                <input type="checkbox" name="done" id="done" style={{ "marginRight": "10px" }} onChange={(event)=>{
                    props.onSelection(event, props.id)
                }} />
                <li>{props.text}</li>
            </div>
            <div style={{ "display": "flex" }}>
                <ion-icon className="delete" name="trash-outline" id={props.id} onClick={() => {
                    props.onSelectDelete(props.id)
                }}></ion-icon>
                {props.id===0?"":<ion-icon className="top" name="arrow-up-circle-outline" onClick={()=>{
                    props.onSelectUp(props.id)
                }}></ion-icon>}
                {props.id===props.list.length-1?"":<ion-icon className="bottom" name="arrow-down-circle-outline" onClick={()=>{
                    props.onSelectDown(props.id)
                }}></ion-icon>}
                
            </div>
        </div>
    )
}

export default ListItem;
