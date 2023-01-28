const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your nothing?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' }
    ],
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Vicktor Merkel' },
        { id: 6, name: 'Valera' }
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageText
            }
            return { 
                ...state,
                messages: [ ...state.messages, newMessage ]
            } 
        default:
            return state
    }
}

export const addMessageCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default dialogReducer