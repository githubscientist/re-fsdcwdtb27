const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return state + action.payload; // Increment by the payload value
        case 'DEC':
            return state - action.payload;
        default:
            return state; // Return the current state if action type is not recognized
    }
}

export default reducer;