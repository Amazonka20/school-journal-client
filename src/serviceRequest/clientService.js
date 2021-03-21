import axios from "../utility/axios-utility";
import * as useToken from "../utility/useToken";

const headers = {
    headers: {'Authorization': "Bearer " + useToken.getToken()},
};

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

export const initJournal = (successesFunc, errorFunc) => {
    console.log(headers);
    axios.get("/journal", headers)
        .then(response => {
            successesFunc(response.data)
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export const initStudents = (successesFunc,  errorFunc) => {
    axios.get("/students", headers)
        .then(response => {
            successesFunc(response.data)
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}


