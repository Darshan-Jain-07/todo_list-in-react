import React from "react"

function CompleteListItem(props) {
    return (
        <div className='listItem' key={props.id} id={props.id}>
            <div>
                <li>{props.text}</li>
            </div>
            <div style={{ "display": "flex" }}>
                <ion-icon className="delete" name="trash-outline" id={props.id} onClick={() => {
                    props.onSelectDelete(props.id)
                }}></ion-icon>                
            </div>
        </div>
    )
}

export default CompleteListItem;
