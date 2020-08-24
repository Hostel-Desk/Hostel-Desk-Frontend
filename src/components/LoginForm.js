import React, {useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { useHistory, withRouter } from 'react-router-dom';

function LoginForm(props) {

    const [initialState, setState] = useState({
        username: '',
        password: '',
        isLoggedIn: false,
        id: '',
        link: '',
        touched: {
            username: false,
            password: false
        }
    })
    const history = useHistory();
    useEffect(() => {
        if(props.auth.isAuthenticated && props.auth.admin) history.push('/admin/dashboard');
        else if(props.auth.isAuthenticated && !props.auth.admin) history.push('/student/dashboard');
    })
    const handleLoginClick = (event) => {
        event.preventDefault();
        props.loginUser({username: initialState.username, password: initialState.password});
        // if(initialState.link === "/admin")
        // else history.push('/student/dashboard')
        // console.log(props.auth.isAuthenticated)
        // history.push('/admin/dashboard')
    }
    const handleBlur = (field) => (evt) => {
        setState({
            ...initialState,
            touched: {...initialState.touched, [field]: true}
        });
    }
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setState({
            ...initialState,
            [name]: value
        });
    }
    const validate = (username, password, id) => {
        const errors = {
            username: '',
            password: '',
            id: ''
        }
        if(initialState.touched.username && username.length < 3)
            errors.username = 'Username should be of minimum length of 3 characters';
        else if(initialState.touched.username && username.length > 30)
            errors.username = 'Username should not be greater than 30 characters';
        else if(initialState.touched.password && password.length < 8)
            errors.password = 'Password should be of minimum length of 8 characters';
        return errors;
    }
    const changelink = (event) => {
        if (event.target.value==="Admin"){
            setState({
                ...initialState,
                link: "/admin"
            })
        }
        if (event.target.value==="Student"){
            setState({
                ...initialState,
                link: "/student"
            })
        }
    }
    const errors = validate(initialState.username, initialState.password);
    return (
        <div>
            <Form className="myForm" onSubmit={handleLoginClick}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input required type="text" id="username" name="username" value={initialState.username}
                        onChange={handleInputChange} valid={errors.username === ''} invalid={errors.username !== ''} onBlur={handleBlur('username')} />
                        <FormFeedback>{errors.username}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input required type="password" id="password" name="password" value={initialState.password}
                        onChange={handleInputChange} valid={errors.password === ''} invalid={errors.password !== ''} onBlur={handleBlur('password')} 
                         />
                        <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="select">Login As</Label>
                    <Input required type="select" id="select" name="select"
                        onChange={changelink} >
                        <option value="">--Select--</option>
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="remember"
                            />
                        Remember Me
                    </Label>
                </FormGroup>
                {/*<Link onClick={this.handleLoginClick} to={this.props.changedValue}>*/}<Button type="submit" value="submit" color="primary"  ><span className="fa fa-sign-in-alt fa-lg"></span>Login</Button>{/*</Link>*/}
            </Form>
        </div>
    )
}

export default withRouter(LoginForm)
