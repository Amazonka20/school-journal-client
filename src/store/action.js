import axios from "../utility/axios-utility";
import * as useToken from '../utility/useToken';
import * as actionsType from './ActionTypes';

export const logout = () => {
    useToken.clearStorage();
    return {
        type: actionsType.AUTHENTICATE_LOGOUT,
    }
}

export const authSuccess = (token) => {
    return {
        type: actionsType.AUTHENTICATE_SUCCESS,
        token: token,
    };
};

export const authFail = (error) => {
    return {
        type: actionsType.AUTHENTICATE_FAIL,
        error: error,
    };
};

export const login = (email, password, errorHandler) => {
    const data = {
        login: email,
        password: password
    }
    return dispatch => {

        axios.post("/login", data)
            .then(response => {
                    dispatch(authSuccess(response.statusText));
                    useToken.setToken(response.statusText);
                }
            ).catch(error => {
            console.log(error);
            dispatch(authFail(error));
        });
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = useToken.getToken();
        if (token) {
            dispatch(authSuccess(token));
        }
    }
}
