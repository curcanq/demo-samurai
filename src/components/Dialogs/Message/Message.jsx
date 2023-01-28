import React from "react";
// import { addMessageCreator, updateNewMessageTextCreator } from "../../../redux/state";

const Message = (props) => {

    // let addMessage = () => {
    //     props.dispatch( addMessageCreator() )
    // }

    // let onMessageChange = (e) => {
    //     let text = e.target.value
    //     props.dispatch( updateNewMessageTextCreator(text) )
    // }

    return (
        <div>
            <div>
                {props.message}
            </div>
            {/* <div>
                <div>
                    <textarea onChange={onMessageChange} value={props.newMessageText} ></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div> */}
        </div>
    )
}

export default Message;