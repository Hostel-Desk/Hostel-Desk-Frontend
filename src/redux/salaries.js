import * as ActionTypes from './actionTypes'

export const Salaries = (state = {
    isLoading: true,
    errMess: null,
    salaries: []
}, action) => {
    switch (action.type) {
        case ActionTypes.SALARY_SUCCESS:
            return { ...state, isLoading: false, errMess: null, salaries: action.payload };

        case ActionTypes.SALARY_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, salaries: [] };

        case ActionTypes.SALARY_LOADING:
            return { ...state, isLoading: true, errMess: [], salaries: [] };

        case ActionTypes.ADD_SALARY:
            var salary = action.payload;
            return { ...state, salaries: state.salaries.concat(salary) };

        default:
            return state;
    }
}