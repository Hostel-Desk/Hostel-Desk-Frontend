import * as ActionTypes from './actionTypes'

export const Architecture = (state = {
    isLoading: true,
    errMess: null,
    architecture: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ARCHITECTURE_SUCCESS:
            return { ...state, isLoading: false, errMess: null, architecture: action.payload };

        case ActionTypes.ARCHITECTURE_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, architecture: [] };

        case ActionTypes.ARCHITECTURE_LOADING:
            return { ...state, isLoading: true, errMess: [], architecture: [] };

        case ActionTypes.ADD_ARCHITECTURE:
            var architecture = action.payload;
            return { ...state, architecture: architecture };

        default:
            return state;
    }
}