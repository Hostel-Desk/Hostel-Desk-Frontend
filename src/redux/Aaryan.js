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
        day:meals.day,
        breakfast:meals.breakfast,
        lunch:meals.lunch,
        snacks:meals.snacks,
        dinner:meals.dinner
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
    .then(response => dispatch(addMeals(response)))
    .catch(error => { console.log('Post meals ', error.message);
        alert('Your meal could not be added\nError: '+ error.message); })
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
        name:mealbill.name,
        sid:mealbill.id,
        branch:mealbill.branch,
        payment:mealbill.rupees,
        paymentDate:mealbill.paymentduedate
    }
    console.log('Meal: ', newMealbill);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealbill', {
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
    .then(response => dispatch(addMealbill(response)))
    .catch(error => { console.log('Post Mealbill ', error.message);
        alert('Meal bill could not be added\nError: '+ error.message); })
}

export const fetchMealbill = () => (dispatch) => {
    dispatch(mealbillLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealbill', {
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