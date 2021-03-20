import React, {useState} from 'react';
import {validateForm} from '../utility/utility';
import classes from '../containers/UI/style.module.css'
import Input from '../containers/UI/Input';
import {NavLink} from "react-router-dom";
import Button from "../containers/UI/Button";
import {registerRequest} from "../serviceRequest/request";

const Register = (props) => {
    const [registerForm, setRegisterForm] = useState({
        firstName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'First Name'
            },
            value: '',
            validation: {
                minLength: 2,
                maxLength: 255,
                onlyLetters: true,
                required: true,
            },
        },
        secondName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Second Name',
            },
            value: '',
            validation: {
                required: true,
                minLength: 2,
                maxLength: 255,
                onlyLetters: true,
            },
        },
        position: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Position',
            },
            value: '',
            validation: {
                required: true,
                minLength: 2,
                maxLength: 255,
                onlyLetters: true,
            },
        },
        login: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Login',
            },
            value: '',
            validation: {
                required: true,
                minLength: 2,
                maxLength: 255,
                onlyLetters: true,
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
        let error = validateForm(registerForm);
        let data = {
            first_name: registerForm.firstName.value,
            last_name: registerForm.secondName.value,
            login: registerForm.login.value,
            position: registerForm.position.value,
            password: registerForm.password.value,
        }

        if (error) {
            setValidationMessage(error);
        } else {
            registerRequest(data, setValidationMessage);
        }
    }


    const inputChangeHandler = (event, controlName) => {
        const updatedFormElement = {
            ...registerForm[controlName],
            value: event.target.value,
        };
        const updatedLoginForm = {
            ...registerForm,
            [controlName]: updatedFormElement
        };

        setRegisterForm(updatedLoginForm);
    }

    const formElementsArray = [];
    for (let key in registerForm) {
        formElementsArray.push({
            inputName: key,
            config: registerForm[key]
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
                <legend>Register</legend>
                {errorMessage}
                {inputs}
                <div>
                    <Button type="submit">Register</Button>
                    <NavLink to="/login">
                        <Button>Cancel</Button>
                    </NavLink>
                </div>
            </form>
        </React.Fragment>
    );
};

export default Register;