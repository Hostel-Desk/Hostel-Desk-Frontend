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

export const deleteStudent = (studentId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'students/' + studentId, {
        method: "DELETE",
        headers: {
          'Authorization': bearer
        },
        credentials: "same-origin"
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
    .then(students => { console.log('Student Deleted', students); dispatch(studentsSuccess(students)); })
    .catch(error => dispatch(studentsFailed(error.message)));
};

export const employeesLoading = () => ({
    type: ActionTypes.EMPLOYEES_LOADING
});

export const employeesFailed = (errmess) => ({
    type: ActionTypes.EMPLOYEES_FAILED,
    payload: errmess
});

export const employeesSuccess = (employees) => ({
    type: ActionTypes.EMPLOYEES_SUCCESS,
    payload: employees
});

export const addEmployee = (employee) => ({
    type: ActionTypes.ADD_EMPLOYEE,
    payload: employee
}); 
student
export const postEmployee = (employee) => (dispatch) => {

    const newEmployee = {
        employeeName: employee.name,
        employeeType: employee.type,
        mobileNo: employee.mobile,
        employeeType: employee.type,
        gender: employee.gender,
        designation: employee.designation,
        address: employee.address,
        joiningDate: employee.joinDate,
        photo: employee.photo
    }
    console.log('Employee: ', newEmployee);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'employees', {
        method: 'POST',
        body: JSON.stringify(newEmployee),
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
    .then(response => dispatch(addEmployee(response)))
    .catch(error => { console.log('Post employees ', error.message);
        alert('Your employee could not be added\nError: '+ error.message); })
}

export const fetchEmployees = () => (dispatch) => {
    dispatch(employeesLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'employees', {
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
    .then(employees => dispatch(employeesSuccess(employees)))
    .catch(error => dispatch(employeesFailed(error.message)));
}

export const deleteEmployee = (employeeId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'employees/' + employeeId, {
        method: "DELETE",
        headers: {
          'Authorization': bearer
        },
        credentials: "same-origin"
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
    .then(employees => { console.log('Employee Deleted', employees); dispatch(employeesSuccess(employees)); })
    .catch(error => dispatch(employeesFailed(error.message)));
};

export const noticesLoading = () => ({
    type: ActionTypes.NOTICES_LOADING
});

export const noticesFailed = (errmess) => ({
    type: ActionTypes.NOTICES_FAILED,
    payload: errmess
});

export const noticesSuccess = (notices) => ({
    type: ActionTypes.NOTICES_SUCCESS,
    payload: notices
});

export const addNotice = (notice) => ({
    type: ActionTypes.ADD_NOTICE,
    payload: notice
}); 

export const postNotice = (notice) => (dispatch) => {

    const newNotice = {
        title: notice.title,
        description: notice.description
    }
    console.log('Notice: ', newNotice);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'notices', {
        method: 'POST',
        body: JSON.stringify(newNotice),
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
    .then(response => dispatch(addNotice(response)))
    .catch(error => { console.log('Post notices ', error.message);
        alert('Your notice could not be added\nError: '+ error.message); })
}

export const fetchNotices = () => (dispatch) => {
    dispatch(noticesLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'notices', {
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
    .then(notices => dispatch(noticesSuccess(notices)))
    .catch(error => dispatch(noticesFailed(error.message)));
}

export const deleteNotice = (noticeId) => (dispatch) => {
    const bearer = 'Bearer' + localStorage.getItem('token');

    return fetch(baseUrl + 'notices/' + noticeId, {
        method: "DELETE",
        headers:{
            'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throe error;
        }
    },
    error => {
        throw error;
    })
    .then (response => response.json())
    .then(notices => { console.log('Notice Deleted', notices); dispatch(noticesSuccess(notices)); })
    .catch(error => dispatch(noticesFailed(error.message)));
};

export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING
});

export const salaryFailed = (errmess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errmess
});

export const salarySuccess = (salaries) => ({
    type: ActionTypes.SALARY_SUCCESS,
    payload: salaries
});

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
}); 

export const postSalary = (salary) => (dispatch) => {

    const newSalary = {
        name: salary.name,
        month: salary.salaryMonth,
        salary: salary.rupees
    }
    console.log('Salary: ', newSalary);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'salaries', {
        method: 'POST',
        body: JSON.stringify(newSalary),
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
    .then(response => dispatch(addSalary(response)))
    .catch(error => { console.log('Post salary', error.message);
        alert('Your salary could not be added\nError: '+ error.message); })
}

export const fetchSalaries = () => (dispatch) => {
    dispatch(salaryLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'salaries', {
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
    .then(salaries => dispatch(salarySuccess(salaries)))
    .catch(error => dispatch(salaryFailed(error.message)));
}

export const deleteSalary = (salaryId) => (dispatch) => {
    const bearer = 'Bearer' + localStorage.getItem('token');

    return fetch(baseUrl + 'salaries/' + salaryId, {
        method: "DELETE",
        headers:{
            'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throe error;
        }
    },
    error => {
        throw error;
    })
    .then (response => response.json())
    .then(salaries => { console.log('Salary Deleted', salaries); dispatch(salarySuccess(salaries)); })
    .catch(error => dispatch(salaryFailed(error.message)));
};

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


