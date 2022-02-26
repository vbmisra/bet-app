import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="min-h-screen bg-neutral-content flex flex-col justify-center sm:py-12">
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div class="py-5">
            <div class="grid grid-cols-1 gap-1">
            <div class="flex flex-wrap justify-center">
  <div class="w-6/12 sm:w-4/12 px-4">
    <img src="https://i.ibb.co/ZzHvC8J/Untitled-design-8.png" alt="..." class="shadow-lg rounded max-w-full h-auto align-middle border-none" />
  </div>
</div>
</div>
</div>

<div className="shadow-lg rounded max-w-full h-auto align-middle border-none">
          <div className="px-5 py-3">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-">
          <label 
          htmlFor="firstName" 
          className="font-semibold text-sm text-gray-600 pb-1 block">
            First Name:
            </label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            className="border rounded-lg px-3 py- mt-1 mb-1 text-sm w-full" 
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label 
          htmlFor="lastName"
          className="font-semibold text-sm text-gray-600 pb-1 block">
            Last Name:
            </label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full" 
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label 
          htmlFor="email"
          className="font-semibold text-sm text-gray-600 pb-1 block">
            Email:
            </label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full" 
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label 
          htmlFor="pwd"
          className="font-semibold text-sm text-gray-600 pb-1 block">
            Password:
            </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full" 
            onChange={handleChange}
          />
        </div>
        <button 
            type="submit" 
            class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span 
                class="inline-block mr-2">
                  Login
                  </span>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                class="w-4 h-4 inline-block">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
  
      </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Signup;
