
import { useState } from "react";
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component.jsx'
import './signupform.styles.scss'
import { createAuthUserWithEmailAndPassword, creteUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
        displayName,
        email,
        password,
        confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            try {
                const { user } = await createAuthUserWithEmailAndPassword(email, password);
                resetFormFields();
                await creteUserDocumentFromAuth(user, { displayName })
                console.log(user);
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Cannot create user, email already in use')
                }
                console.log('user creation error:', error)
            }

        } else {
            alert('passwords do not match');
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields, [name]: value,
        })
    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>SIGN UP WITH EMAIL AND PASSWORD</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Display Name' input type="text" name="displayName" id="displayName" onChange={handleChange} value={displayName} required />

                <FormInput label='Email' type="email" name="email" id="email" onChange={handleChange} value={email} required />

                <FormInput label='Password' type="password" name="password" id="password" onChange={handleChange} value={password} required />

                <FormInput label='Confirm Password' type="confirmPassword" name="confirmPassword" id="confirmPassword" onChange={handleChange} value={confirmPassword} required />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );

};
export default SignUpForm;