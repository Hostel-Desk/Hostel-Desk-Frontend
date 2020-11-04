import * as ActionTypes from './actionTypes'

export const Students = (state = {
    isLoading: true,
    errMess: null,
    students: []
}, action) => {
    switch (action.type) {
        case ActionTypes.STUDENTS_SUCCESS:
            return { ...state, isLoading: false, errMess: null, students: action.payload };

        case ActionTypes.STUDENTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, students: [] };

        case ActionTypes.STUDENTS_LOADING:
            return { ...state, isLoading: true, errMess: [], students: [] };

        case ActionTypes.ADD_STUDENT:
            var student = action.payload;
            return { ...state, students: state.students.concat(student) };

        default:
            return state;
    }
}