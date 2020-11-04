import * as ActionTypes from './actionTypes'

export const SeatAllocation = (state = {
    errMess: null,
    seatAllocation: []
}, action) => {
    switch (action.type) {
        case ActionTypes.SEATALLOCATION_SUCCESS:
            return { ...state, isLoading: false, errMess: null, seatAllocation: action.payload };

        case ActionTypes.SEATALLOCATION_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, seatAllocation: [] };

        case ActionTypes.SEATALLOCATION_LOADING:
            return { ...state, isLoading: true, errMess: [], seatAllocation: [] };

        case ActionTypes.ADD_SEATALLOCATION:
            var seats = action.payload;
            return { ...state, seatAllocation: state.seatAllocation.concat(seats) };

        default:
            return state;
    }
}