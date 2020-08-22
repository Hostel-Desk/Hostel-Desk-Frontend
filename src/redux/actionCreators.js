import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const studentsLoading = () => ({
    type: ActionTypes.STUDENTS_LOADING
});

export const studentsFailed = (errmess) => ({
    type: ActionTypes.STUDENTS_FAILED,
    payload: errmess
});

export const studentsSuccess = (students) => ({
    type: ActionTypes.STUDENTS_SUCCESS,
    payload: students
});

export const addStudent = (student) => ({
    type: ActionTypes.ADD_STUDENT,
    payload: student
}); 

export const postStudent = (student) => (dispatch) => {

    const newStudent = {
        studentName: student.name,
        sid: student.id,
        mobileNo: student.mobile,
        gender: student.gender,
        email: student.email,
        branch: student.branch,
        nationality: student.nationality,
        address: student.address,
        fatherName: student.father,
        motherName: student.mother,
        fatherMobile: student.Fnum,
        dob: student.dob,
        photo: student.photo
    }
    console.log('Student: ', newStudent);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'students', {
        method: 'POST',
        body: JSON.stringify(newStudent),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addStudent(response)))
    .catch(error => { console.log('Post students ', error.message);
        alert('Your student could not be added\nError: '+ error.message); })
}

export const fetchStudents = () => (dispatch) => {
    dispatch(studentsLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'students', {
        headers: {
            'method': 'GET',
            'Authorization': bearer
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(students => dispatch(studentsSuccess(students)))
    .catch(error => dispatch(studentsFailed(error.message)));
}

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(fetchStudents());
            dispatch(fetchEmployees());
            dispatch(fetchNotices());
            dispatch(fetchMeals());
            dispatch(fetchMealBills());
            dispatch(fetchNotices());
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(studentsFailed("Error 401: Unauthorized"));
    dispatch(noticesFailed("Error 401: Unauthorized"));
    dispatch(mealsFailed("Error 401: Unauthorized"));
    dispatch(mealBillsFailed("Error 401: Unauthorized"));
    dispatch(employeesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}