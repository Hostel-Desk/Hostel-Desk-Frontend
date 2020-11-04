import * as ActionTypes from './actionTypes'

export const MealBills = (state = {
    isLoading: true,
    errMess: null,
    bills: []
}, action) => {
    switch (action.type) {
        case ActionTypes.MEALBILL_SUCCESS:
            return { ...state, isLoading: false, errMess: null, bills: action.payload };

        case ActionTypes.MEALBILL_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, bills: [] };

        case ActionTypes.MEALBILL_LOADING:
            return { ...state, isLoading: true, errMess: [], bills: [] };

        case ActionTypes.ADD_MEALBILL:
            var bill = action.payload;
            return { ...state, bills: state.bills.concat(bill) };

        default:
            return state;
    }
}

