import profileReducer, { addPostCreator } from "./profileReducer";

it('length of posts should be incremented', () => {
    //1. test data
    let action = addPostCreator('kamasutra')
    let state = {
        posts: [
            { id: 1, post: 'Hi, how are you?', likesCount: 31 },
            { id: 2, post: 'It\'s my first post!', likesCount: 17 }
        ]
    }
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(5)
})