import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

export const mealbillLoading = () => ({
    type: ActionTypes.MEALBILL_LOADING
});

export const mealbillFailed = (errmess) => ({
    type: ActionTypes.MEALBILL_FAILED,
    payload: errmess
});

export const mealbillSuccess = (mealbill) => ({
    type: ActionTypes.MEALBILL_SUCCESS,
    payload: mealbill
});

export const addMealbill = (mealbill) => ({
    type: ActionTypes.ADD_MEALBILL,
    payload: mealbill
});

export const postMealbill = (mealbill) => (dispatch) => {

    const newMealbill = {
        name: mealbill.name,
        sid: mealbill.id,
        branch: mealbill.branch,
        payment: mealbill.rupees,
        paymentDate: mealbill.paymentduedate
    }
    console.log('Mealbill: ', newMealbill);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealBills', {
        method: 'POST',
        body: JSON.stringify(newMealbill),
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
        .then(response => { alert("Mess Bill added Successfully!!"); dispatch(addMealbill(response)); dispatch(fetchMealbill()); })
        .catch(error => {
            console.log('Post Mealbill ', error.message);
            alert('Meal bill could not be added\nError: ' + error.message);
        })
}

export const deleteMealbill = (mealId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealBills/' + mealId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
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
        .then(bill => { console.log('Bill Deleted', bill); dispatch(fetchMealbill()); })
        .catch(error => dispatch(mealbillFailed(error.message)));
};

export const updateMealbill = (mealbill) => (dispatch) => {

    const newMealbill = {
        name: mealbill.name,
        sid: mealbill.sid,
        branch: mealbill.branch,
        payment: mealbill.rupees,
        paymentDate: mealbill.paymentduedate
    }
    console.log('Mealbill: ', newMealbill);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealBills/' + mealbill.id, {
        method: 'PUT',
        body: JSON.stringify(newMealbill),
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
        .then(response => { alert("Meal Bill Updated!"); dispatch(fetchMealbill()); })
        .catch(error => {
            console.log('Update Mealbill ', error.message);
            alert('Meal bill could not be updated\nError: ' + error.message);
        })
}

export const fetchMealbill = () => (dispatch) => {
    dispatch(mealbillLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealBills', {
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
        .then(meals => dispatch(mealbillSuccess(meals)))
        .catch(error => dispatch(mealbillFailed(error.message)));
}

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
        dob: student.dob,
        gender: student.gender,
        email: student.email,
        branch: student.branch,
        nationality: student.nationality,
        address: student.address,
        fatherName: student.father,
        motherName: student.mother,
        fatherMobile: student.Fnum,
        //photo: student.photo
    }
    console.log('Student: ', newStudent);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newStudent),
        credentials: "same-origin"
    })
        .then(response => {
            console.log(response);
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
        .then(response => { alert("Student has been added Successfully!!"); dispatch(addStudent(response)); dispatch(fetchStudents()); })
        .catch(error => {
            console.log('Post students ', error.message);
            alert('Your student could not be added\nError: ' + error.message);
        })
}

export const updateStudent = (student) => (dispatch) => {

    const newStudent = {
        studentName: student.fullname,
        sid: student.sid,
        mobileNo: student.mobile,
        email: student.email,
        branch: student.program,
        address: student.address,
        fatherName: student.father,
        motherName: student.mother,
        fatherMobile: student.fnum,
    }
    console.log('Student: ', newStudent);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'students/' + student.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newStudent),
    })
        .then(response => {
            console.log(response);
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
        .then(response => { alert("Student Updated!"); dispatch(fetchStudents()); })
        .catch(error => {
            console.log('Update students ', error.message);
            alert('Your student could not be updated\nError: ' + error.message);
        })
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
        }
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
        .then(students => { console.log('Student Deleted', students); dispatch(fetchStudents()); })
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

export const updateEmployee = (employee) => (dispatch) => {
    console.log(employee.id);
    console.log(employee)
    const newemployee = {
        employeeName: employee.name,
        eid: employee.eid,
        mobileNo: employee.mobile,
        gender: employee.gender,
        employeeType: employee.type,
        designation: employee.designation,
        joiningDate: employee.joinDate,
        salary: employee.salary,
        address: employee.address,
    }
    console.log('Employee: ', newemployee);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'employees/' + employee.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newemployee),
    })
        .then(response => {
            console.log(response);
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
        .then(response => { alert("Employee Updated!"); dispatch(fetchEmployees()); })
        .catch(error => {
            console.log('Update students ', error.message);
            alert('Your employee could not be updated\nError: ' + error.message);
        })
}
export const postEmployee = (employee) => (dispatch) => {

    const newEmployee = {
        employeeName: employee.name,
        employeeType: employee.type,
        mobileNo: employee.mobile,
        gender: employee.gender,
        designation: employee.designation,
        address: employee.address,
        joiningDate: employee.joinDate,
        salary: employee.salary,
        eid: employee.eid
    }
    console.log('Employee: ', JSON.stringify(newEmployee));

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
        .then(response => { alert("Employee has been added Successfully!!"); dispatch(addEmployee(response)); dispatch(fetchEmployees()); })
        .catch(error => {
            console.log('Post employees ', error.message);
            alert('Your employee could not be added\nError: ' + error.message);
        })
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
        }
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
        .then(employees => { console.log('Employee Deleted', employees); dispatch(fetchEmployees()); })
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
        .then(response => { alert("Notice added Successfully!!"); dispatch(addNotice(response)); dispatch(fetchNotices()); })
        .catch(error => {
            console.log('Post notices ', error.message);
            alert('Your notice could not be added\nError: ' + error.message);
        })
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
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'notices/' + noticeId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(notices => { console.log('Notice Deleted', notices); dispatch(fetchNotices()); })
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
        month: salary.date,
        salary: salary.rupees
    }
    console.log('Salary: ', newSalary);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'salary', {
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
        .then(response => { alert("Employee Salary added Successfully!!"); dispatch(addSalary(response)) })
        .catch(error => {
            console.log('Post salary', error.message);
            alert('Your salary could not be added\nError: ' + error.message);
        })
}

export const updateSalary = (salary) => (dispatch) => {
    const newSalary = {
        name: salary.name,
        month: salary.date,
        salary: salary.rupees
    }
    console.log('Salary: ', newSalary);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'salary/' + salary.id, {
        method: 'PUT',
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
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { alert("Employee Salary Updated!"); dispatch(fetchSalaries()); })
        .catch(error => {
            console.log('Update Salary ', error.message);
            alert('Salary could not be updated\nError: ' + error.message);
        })
}

export const fetchSalaries = () => (dispatch) => {
    dispatch(salaryLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'salary', {
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
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'salary/' + salaryId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(salaries => { console.log('Salary Deleted', salaries); dispatch(fetchSalaries()); })
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
        token: response.token,
        admin: response.admin
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
            'Content-Type': 'application/json'
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
                localStorage.setItem('admin', response.admin);
                // Dispatch the success action
                dispatch(fetchStudents());
                dispatch(fetchEmployees());
                dispatch(fetchNotices());
                dispatch(fetchMeals());
                dispatch(fetchMealbill());
                dispatch(fetchNotices());
                dispatch(fetchArchitecture());
                dispatch(fetchComplaints());
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
    localStorage.removeItem('admin');
    dispatch(studentsFailed("Error 401: Unauthorized"));
    dispatch(noticesFailed("Error 401: Unauthorized"));
    dispatch(mealsFailed("Error 401: Unauthorized"));
    dispatch(mealbillFailed("Error 401: Unauthorized"));
    dispatch(employeesFailed("Error 401: Unauthorized"));
    dispatch(architectureFailed("Error 401: Unauthorized"));
    dispatch(complaintsFailed("Error 401: Unauthorized"))
    dispatch(receiveLogout())
}

export const mealsLoading = () => ({
    type: ActionTypes.MEALS_LOADING
});

export const mealsFailed = (errmess) => ({
    type: ActionTypes.MEALS_FAILED,
    payload: errmess
});

export const mealsSuccess = (meals) => ({
    type: ActionTypes.MEALS_SUCCESS,
    payload: meals
});

export const addMeals = (meal) => ({
    type: ActionTypes.ADD_MEAL,
    payload: meal
});

export const postMeal = (meals) => (dispatch) => {

    const newMeal = {
        day: meals.day,
        breakfast: meals.breakfast,
        lunch: meals.lunch,
        snacks: meals.snacks,
        dinner: meals.dinner
    }
    console.log('Meal: ', newMeal);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'meals', {
        method: 'POST',
        body: JSON.stringify(newMeal),
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
        .then(response => { alert("Meal added Successfully!!"); dispatch(addMeals(response)) })
        .catch(error => {
            console.log('Post meals ', error.message);
            alert('Your meal could not be added\nError: ' + error.message);
        })
}

export const fetchMeals = () => (dispatch) => {
    dispatch(mealsLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'meals', {
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
        .then(meals => dispatch(mealsSuccess(meals)))
        .catch(error => dispatch(studentsFailed(error.message)));
}

export const architectureLoading = () => ({
    type: ActionTypes.ARCHITECTURE_LOADING
});

export const architectureFailed = (errmess) => ({
    type: ActionTypes.ARCHITECTURE_FAILED,
    payload: errmess
});

export const architectureSuccess = (architecture) => ({
    type: ActionTypes.ARCHITECTURE_SUCCESS,
    payload: architecture
});

export const addArchitecture = (architecture) => ({
    type: ActionTypes.ADD_ARCHITECTURE,
    payload: architecture
});

export const postArchitecture = (architecture) => (dispatch) => {

    const newArchitecture = {
        rooms: architecture.rooms,
        blocks: architecture.blocks,
        floors: architecture.floors
    }
    console.log('Architecture: ', newArchitecture);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'architecture', {
        method: 'PUT',
        body: JSON.stringify(newArchitecture),
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
        .then(response => dispatch(addArchitecture(response)))
        .catch(error => {
            console.log('Post Architecture ', error.message);
            alert('Architecture could not be added\nError: ' + error.message);
        })
}

export const fetchArchitecture = () => (dispatch) => {
    dispatch(architectureLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'architecture', {
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
        .then(architecture => dispatch(architectureSuccess(architecture)))
        .catch(error => dispatch(architectureFailed(error.message)));
}


export const seatallocationLoading = () => ({
    type: ActionTypes.SEATALLOCATION_LOADING
});

export const seatallocationFailed = (errmess) => ({
    type: ActionTypes.SEATALLOCATION_FAILED,
    payload: errmess
});

export const seatallocationSuccess = (seatallocation) => ({
    type: ActionTypes.SEATALLOCATION_SUCCESS,
    payload: seatallocation
});

export const addseatallocation = (seatallocation) => ({
    type: ActionTypes.ADD_SEATALLOCATION,
    payload: seatallocation
});

export const postSeatallocation = (seats) => (dispatch) => {

    const newSeatAllocation = {
        name: seats.name,
        block: seats.block,
        room: seats.room,
        monthlyRent: seats.rent,

    }
    console.log('SeatAllocation: ', newSeatAllocation);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'seats', {
        method: 'POST',
        body: JSON.stringify(newSeatAllocation),
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
        .then(response => { alert("Seat has been alloted Successfully!!"); dispatch(addseatallocation(response)) })
        .catch(error => {
            console.log('Post seats ', error.message);
            alert('Your SealAllocation could not be added\nError: ' + error.message);
        })
}

export const updateSeatAllocation = (seat) => (dispatch) => {
    const newSeat = {
        name: seat.name,
        block: seat.block,
        room: seat.room,
        monthlyRent: seat.rent
    }
    console.log('Seat: ', newSeat);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'seats/' + seat.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newSeat),
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { dispatch(fetchSeatallocation()); alert("Seat allocation details updated!"); })
        .catch(error => {
            console.log('Update Seat ', error.message);
            alert('Seat could not be updated\nError: ' + error.message);
        })
}

export const deleteSeatAllocation = (seatId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'seats/' + seatId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
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
        .then(seat => { console.log('Seat Deleted', seat); dispatch(fetchSeatallocation()); })
        .catch(error => dispatch(seatallocationFailed(error.message)));
}

export const fetchSeatallocation = () => (dispatch) => {
    dispatch(seatallocationLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'seats', {
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
        .then(seats => dispatch(seatallocationSuccess(seats)))
        .catch(error => dispatch(seatallocationFailed(error.message)));
}

export const complaintsLoading = () => ({
    type: ActionTypes.COMPLAINTS_LOADING
});

export const complaintsFailed = (errmess) => ({
    type: ActionTypes.COMPLAINTS_FAILED,
    payload: errmess
});

export const complaintsSuccess = (students) => ({
    type: ActionTypes.COMPLAINTS_SUCCESS,
    payload: students
});

export const addComplaint = (student) => ({
    type: ActionTypes.ADD_COMPLAINT,
    payload: student
});

export const postComplaint = (complaint) => (dispatch) => {

    const newComplaint = {
        title: complaint.title,
        complaint: complaint.description
    }
    console.log('Complaint: ', newComplaint);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'complaints', {
        method: 'POST',
        body: JSON.stringify(newComplaint),
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
        .then(response => { alert("Complaint registered Successfully!!"); dispatch(addComplaint(response)); dispatch(fetchComplaints()); })
        .catch(error => {
            console.log('Post complaints ', error.message);
            alert('Your complaint could not be added\nError: ' + error.message);
        })
}

export const fetchComplaints = () => (dispatch) => {
    dispatch(complaintsLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'complaints', {
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
        .then(complaints => dispatch(complaintsSuccess(complaints)))
        .catch(error => dispatch(complaintsFailed(error.message)));
}

export const deleteComplaint = (complaintId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'complaints/' + complaintId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
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
        .then(complaints => { console.log('Complaint Deleted', complaints); dispatch(fetchComplaints()); })
        .catch(error => dispatch(complaintsFailed(error.message)));
};


export const updateMeal = (meal) => (dispatch) => {
    
    const time = meal.time;
    const newMeal = {
        day: meal.day,
        [time]: meal.rows
    }
    console.log('Meal: ', newMeal);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'meals/' + meal.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newMeal),
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { dispatch(fetchMeals()); alert("Meal updated!"); })
        .catch(error => {
            console.log('Update Meal ', error.message);
            alert('Meal could not be updated\nError: ' + error.message);
        })
}