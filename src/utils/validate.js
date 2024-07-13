export const checkValidateData = (names,email,password)=>{
    const isName = /([a-zA-Z0-9_\s]+)/.test(names);
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isName) return 'Please Enter Valid Name';
    if(!isEmail) return 'Please Enter Valid Email Address';
    if(!isPassword) return 'Please Enter Valid Password';

    return null;
}