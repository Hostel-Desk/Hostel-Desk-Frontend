import * as ActionTypes from './actionTypes'

export const Notices = (state = {
    isLoading: true,
    errMess: null,
    notices: []
}, action) => {
    switch (action.type) {
        case ActionTypes.NOTICES_SUCCESS:
            return { ...state, isLoading: false, errMess: null, notices: action.payload };

        case ActionTypes.NOTICES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, notices: [] };

        case ActionTypes.NOTICES_LOADING:
            return { ...state, isLoading: true, errMess: [], notices: [] };

        case ActionTypes.ADD_NOTICE:
            var notice = action.payload;
            return { ...state, notices: state.notices.concat(notice) };

        default:
            return state;
    }
}