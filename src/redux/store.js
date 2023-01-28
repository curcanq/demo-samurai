import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Hi, how are you?', likesCount: 31 },
                { id: 2, post: 'It\'s my first post!', likesCount: 17 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your nothing?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' }
            ],
            newMessageText: '',
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Vicktor Merkel' },
                { id: 6, name: 'Valera' }
            ]
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Andreea' },
                { id: 2, name: 'Ciburecik' },
                { id: 3, name: 'Figucik' }
            ]
        }
    },
    _callSubscriber() {
        console.log('Piscun')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store