
export const Validate = (email, Password) =>
{
    const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

    if (!isEmailValidate) return "Email is not Valid";
    if (!isPasswordValidate) return "Password is not Valid.(Eg:-Testing193!)";

    return null;

}
