const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A->0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'el email ingresado no es válido';
    }
    if(!userData.email){
        errors.email= 'debe ingresar un email';
    }
    if(userData.email.length > 35){
        errors.email= 'el email no debe superar los 35 carácteres';
    }

    return errors;
}


export default validation;