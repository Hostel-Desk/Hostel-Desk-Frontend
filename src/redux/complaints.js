import * as ActionTypes from './actionTypes'

export const Complaints = (state = {
    isLoading: true,
    errMess: null,
    complaints: []
}, action) => {
    switch (action.type) {
        case ActionTypes.COMPLAINTS_SUCCESS:
            return { ...state, isLoading: false, errMess: null, complaints: action.payload };

        case ActionTypes.COMPLAINTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, complaints: [] };

        case ActionTypes.COMPLAINTS_LOADING:
            return { ...state, isLoading: true, errMess: [], complaints: [] };

        case ActionTypes.ADD_COMPLAINT:
            var complaint = action.payload;
            return { ...state, bills: state.complaints.concat(complaint) };

        default:
            return state;
    }
}