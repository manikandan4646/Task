const initialState = {
    data: []
}

const ReducerState = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_DATA": {
            return {
                ...state,
                data: action.payload
            };
        }
        default:
            return state;
    }
}

export default ReducerState;