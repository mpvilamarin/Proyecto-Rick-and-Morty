import { useState } from 'react';
import validation from "../Validation/Validation";

const Form = () => {
    const [errors, setErrors] = useState ({});
    const [userData, setUserData] = useState ({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <form>
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' value={userData.email} onChange={handleChange} />
            <label htmlFor="">Password: </label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>

            <button>Submit</button>
        </form>
    )
}

export default Form;