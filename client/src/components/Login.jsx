import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <main className="min-h-screen flex justify-center items-center bg-gray-100">
            <section className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <div>
                    <h1 className="text-3xl font-semibold text-center">Xcrypt</h1>
                    <form className="mt-8">
                        <div>
                            <label htmlFor="email-address" className="text-sm font-medium text-gray-600" >
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password" className="text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={onLogin}
                                className="w-full px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="text-sm text-gray-600 text-center mt-4">
                        No account yet?{' '}
                        <NavLink to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </NavLink>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Login;
