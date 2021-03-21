import axios from "../utility/axios-utility";

export const registerRequest = (data, func) => {
    axios.post("/register", data)
        .then(response => {
                func("New user was successfully registered");
            }
        )
        .catch(error => {
            console.log(error);
            func("Error occurred during user creation: " + error);
        });
}



