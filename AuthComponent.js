// AuthComponent.js

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function AuthComponent() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            {isLogin ? <LoginForm /> : <RegistrationForm />}
            <button onClick={toggleAuthMode}>
                {isLogin ? 'Switch to Registration' : 'Switch to Login'}
            </button>
        </div>
    );
}

export default AuthComponent;
