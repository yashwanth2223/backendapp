function ValidatePassword(password)
 {
    const regex = /^(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,9}$/;

    const isValid = regex.test(password);

    if(isValid){
        console.log("Password is valid");
    }
    else
    {
        console.error("Password must contain at least 1 capital letter, 1 number, 1 special character, and be 8-9 characters long.");
    }
    return isValid;
}

const password1 = "weakPassword";
const password2 = "StrongP@ss143";

ValidatePassword(password1);
ValidatePassword(password2);

module.exports=ValidatePassword