const appReducer = function appReducer(state = {}, action) {
    switch(action.type) {
        case 'SET_TITLE': {
            state = {
                ...state,
                title: action.payload
            };
            break;
        }
        default:
            return state;
    }
    return state;
}

export const setTitleCreator = title => {
    return { type: 'SET_TITLE', payload: title }
}

export default appReducer;