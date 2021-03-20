import React, {useState} from 'react';
import {validateForm} from '../utility/utility';
import classes from '../containers/UI/style.module.css'
import Input from '../containers/UI/Input';
import {NavLink} from "react-router-dom";
import Button from "../containers/UI/Button";
import {loginRequest} from "../serviceRequest/request";

const Login = (props) => {
    const [loginForm, setLoginForm] = useState({
        login: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Login'
            },
            value: '',
            validation: {
                required: true,
            },
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password',
            },
            value: '',
            validation: {
                required: true,
            },
        },
    });

    const [validationMessage, setValidationMessage] = useState(null);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let error = validateForm(loginForm);

        let data = {
            login: loginForm.login.value,
            password: loginForm.password.value,
        }
        if (error) {
            setValidationMessage(error);
        } else {
            loginRequest(data, setValidationMessage);
           console.log("Request")
        }
    }


    const inputChangeHandler = (event, controlName) => {
        const updatedFormElement = {
            ...loginForm[controlName],
            value: event.target.value,
        };
        const updatedLoginForm = {
            ...loginForm,
            [controlName]: updatedFormElement
        };

        setLoginForm(updatedLoginForm);
    }

    const formElementsArray = [];
    for (let key in loginForm) {
        formElementsArray.push({
            inputName: key,
            config: loginForm[key]
        });
    }

    let inputs = formElementsArray.map(formElement => (
        <Input
            key={formElement.inputName}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            shouldValidate={formElement.config.validation}
            changed={event => inputChangeHandler(event, formElement.inputName)}
        />
    ));

    let errorMessage = validationMessage ?
        <p className={classes.invalid}>{validationMessage}</p> : null;

    return (
        <React.Fragment>
            <form className={classes.loginForm} onSubmit={onSubmitHandler}>
                <legend>Login</legend>
                {errorMessage}
                {inputs}
                <div>
                    <Button type="submit">Login</Button>
                    <NavLink to="/register">
                        <Button>
                            Register
                        </Button>
                    </NavLink>
                </div>
            </form>
        </React.Fragment>
    );
};

export default Login;