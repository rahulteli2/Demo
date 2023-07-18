export const emailValidator = (email) =>{
    if(!email)
    {
        return "Email is required "
    }else if(!new RegExp(/\S+@\S+\.\S+/).test(email))
    {
        return "Incorrect email format";
    }
    return "";
}

export const passwordValidator = (password) => {
    if(!password)
    {
        return "Password is required"
    }else if(password.length<8)
    {
        return "Password must be atleast 8 characters."
    }
    return "";
}

export const nameValidator = (name) => {
    if(!name)
    {
        return "Name is required";
    }else if (!new RegExp(/^[A-Za-z]+$/).test(name))
    {
        return "Only characters are allowed.";
    }
    return "";
}

export const confirmPasswordValidator = (cnfPassword,form) =>{
    if(!cnfPassword)
    {
        return "Confirm password is required.";
    }else if(cnfPassword.length<8)
    {
        return "Confirm Password must be atleast 8 characters.";
    }else if(form.password !== cnfPassword)
    {
        return "Passwords do not match";
    }
    return "";
}