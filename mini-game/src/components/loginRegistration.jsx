import {useState} from "react";
import "./login.css";

import "./login.jsx";
import "./registration.jsx";

function logInRegistration() {
    const [signUp, setSignUp] = useState('true');
        
    return (
        <div>
            {signUp ? <signup setSignUp={setSignUp}/> :
            <Register setSignUp={setSignUp}/>
    }

        </div>
    )
}

export default logInRegistration;