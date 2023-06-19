// import { Outlet, Link } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { auth, signInWithGooglePopup, creteUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";


import './authentication.styles.scss'
import SignUpForm from "../../components/sign-up-form/signupform.component";
import SignInForm from "../../components/sign-in-form copy/signinform.component";
const SignIn = () => {
    // useEffect(() => {
    //     const getRedirectDate = async () => {
    //         const response = getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await creteUserDocumentFromAuth(response.user);

    //         }
    //     }
    // }, []);
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await creteUserDocumentFromAuth(user);
        // console.log(response);
    }

    return (
        <Fragment>
            <div className="authentication-container">

                <SignInForm />
                <SignUpForm />
                {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            </div>

            {/* <Outlet /> */}
        </Fragment>

    );
}

export default SignIn;