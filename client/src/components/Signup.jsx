import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
    
        <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 py-8 pt-8">
          <h1 className="text-3xl font-semibold text-center">Xcrypt</h1>
          <form>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-600" htmlFor="email-address">
                Email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email-address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>

            <button
              className="bg-indigo-600  hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={onSubmit}
            >
              Sign up
            </button>

          </form>

          <p className="text-center mt-4">
            Already have an account?{' '}
            <NavLink to="/login" className="text-blue-500">
              Sign in
            </NavLink>
          </p>
        </div>
      </section>
    </main>
    </>

  );
};

export default Signup;
