import React from 'react';
import * as firebase from 'firebase';
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.SignUp = this.SignUp.bind(this)
    }
    SignUp() {
        let EmailInputValue = this.refs.email.value;
        let PasswordInputValue = this.refs.password.value;
        console.log(EmailInputValue,PasswordInputValue );

        firebase.auth().createUserWithEmailAndPassword(EmailInputValue, PasswordInputValue)
            .then((user) => {
                let myObject = {
                    email: EmailInputValue
                }
                firebase.database.ref("userAuthenticaion/" + user.uid).set(myObject).then(() => {
                    console.log("user Created");

                })
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });

    }

    render() {
        return (
            <div>
                <form >
                    <label>Email</label><input type="text" ref="email" />
                    <label>Password</label><input type="password" ref="password" />
                    <button type="button" onClick={this.SignUp}>SignUp</button>

                </form>
            </div>
        );
    }
}
export default SignUp;