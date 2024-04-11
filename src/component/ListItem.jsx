import React from "react"

function ListItem(props) {
    return(
        <div className='listItem' key={props.id} id={props.id}>
            <ion-icon name="trash-outline" id={props.id} onClick={()=>{
                props.onSelect(props.id)
            }}></ion-icon>
            <li>{props.text}</li>
        </div>
    )
}

export default ListItem;
