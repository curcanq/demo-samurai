import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from "redux-form"
import { TextArea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators';

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messageElements = state.messages
        .map(m => <Message message={m.message} key={m.id} />)

    const addMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <AddPostReduxForm onSubmit={addMessage} />
                </div>
            </div>
        </div>
    );
}

const ReduxDialogForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} validate={[required, maxLengthCreator(30)]} name={'newMessageText'} placeholder={'Enter your message'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    </>
}

const AddPostReduxForm = reduxForm({
    form: 'message'
})(ReduxDialogForm)

export default Dialogs;