import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from '../../../utils/validators';
import { TextArea } from '../../Common/FormsControls/FormsControls';

const MyPosts = React.memo(props => {
// shouldComponentUpdate(nextProps, nextState) {
//     return nextProps !== this.props || nextState !== this.state
// }
    console.log('RENDER')
    let postElements = props.posts.map(p => <Post message={p.post} like={p.likesCount} />)

    const addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addPost} />
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
})

const AddPostForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your text'} name={'newPostText'} component={TextArea} validate={[required, maxLengthCreator(30)]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    </>
}

const AddPostReduxForm = reduxForm({
    form: 'post'
})(AddPostForm)

export default MyPosts;