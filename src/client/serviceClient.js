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

export const initJournal = (successesFunc, headers, errorFunc) => {
    axios.get("/journal", headers)
        .then(response => {
            successesFunc(response.data)
        })
        .catch(error => {
            console.log(error);
        });
}

export const initStudents = (successesFunc, headers, errorFunc) => {
    axios.get("/students", headers)
        .then(response => {
            successesFunc(response.data)
        })
        .catch(error => {
            console.log(error);
        });
}

export const initGroups = (successesFunc, headers, errorFunc) => {
    axios.get("/groups", headers)
        .then(response => {
            successesFunc(response.data)
        })
        .catch(error => {
            console.log(error);
        });
}

export const onSelectGroup = (groupId, successesFunc, headers) => {
    axios.get("/students?groupId=" + groupId, headers)
        .then(response => {
            successesFunc(response.data)
        })
        .catch(error => {
            console.log(error);
        });
}

export const getSubjectsList = (successesFunc, headers) => {
    axios.get("/subjects", headers)
        .then(response => {
            successesFunc(response.data)
        })
        .catch(error => {
            console.log(error);
        });
}
