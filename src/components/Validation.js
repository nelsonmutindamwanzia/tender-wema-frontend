function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z][a-zA-Z0-9]){8,}$/
    //For password it is a minimum of 8 characters and should also 
    //have a capital letter, small letter and a number

    if(values.email === '') {
        error.email = "Email should not be empty"
    }

    else if(!email_pattern.test(values.email)) {
        error.email = "Email did not match"
    }

    if(values.password === '') {
        error.password = "Password should not be empty"
    }

    else if(!password_pattern.test(values.password)) {
        error.password = "Password did not match"
    }

    if(String(values.confirm_password) !== String(values.password)) {
        console.log(values.confirm_password + "___" + values.password)
        error.confirm_password = "password did not match"
    }

    // else if(String(values.confirm_password) !== "" || values.confirm_password !== values.password) {
    //     error.confirm_password = "Password did not match"
    // }

    return error;
}

export default Validation