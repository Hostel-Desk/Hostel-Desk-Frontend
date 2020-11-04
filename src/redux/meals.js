import * as ActionTypes from './actionTypes'

export const Meals = (state = {
    isLoading: true,
    errMess: null,
    meals: []
}, action) => {
    switch (action.type) {
        case ActionTypes.MEALS_SUCCESS:
            return { ...state, isLoading: false, errMess: null, meals: action.payload };

        case ActionTypes.MEALS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, meals: [] };

        case ActionTypes.MEALS_LOADING:
            return { ...state, isLoading: true, errMess: [], meals: [] };

        case ActionTypes.ADD_MEAL:
            var meals = action.payload;
            return { ...state, meals: state.meals.concat(meals) };

        default:
            return state;
    }
}