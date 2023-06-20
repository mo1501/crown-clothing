
import { useState } from "react";
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component.jsx'
import './signinform.styles.scss'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {

    email: '',
    password: '',

}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {

        email,
        password,
    } = formFields;



    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();


    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            }
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email or password');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }


    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields, [name]: value,
        })
    };
    return (
        <div className="sign-in-container">
            <h2>Have an account?</h2>
            <span>SIGN IN WITH EMAIL AND PASSWORD</span>
            <form onSubmit={handleSubmit}>


                <FormInput label='Email' type="email" name="email" id="signinemail" onChange={handleChange} value={email} required />

                <FormInput label='Password' type="password" name="password" id="signinpassword" onChange={handleChange} value={password} required />
                <div className="buttons-container">
                    <Button type="submit" onClick={handleSubmit}>Sign In</Button>
                    <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>

        </div>
    );

};
export default SignInForm;