import axios from "../utility/axios-utility";

export const registerRequest = (data, func) => {
    axios.post("/register", data)
        .then(response => {
            func("New user was successfully registered");
        }
    ).catch(error => {
        console.log(error);
        func("Error occurred during user creation: " + error);
    });
}

export const loginRequest = (data, func) => {
    const auth = true;
    axios.post("/login", data)
        .then(response => {
                func("Success");
            }
        ).catch(error => {
        console.log(error);
        func("Error occurred during login: " + error);
    });
}