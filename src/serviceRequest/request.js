import axios from "../utility/axios-utility";

export const registerRequest = (data, successFunc, errorFunc) => {
    axios.post("/teachers/register", data)
        .then(response => {
            successFunc("New user was successfully register");
        }
    ).catch(error => {
        console.log(error);
        errorFunc("Error occurred during user creation: " + error);
    });
}
