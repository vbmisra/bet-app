import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
          <div className="px-5 py-8">
        <form onSubmit={handleFormSubmit}>
        <label className="font-semibold text-sm text-gray-600 pb-1 block" htmlFor="email">Email address:</label>
           <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            onChange={handleChange}
          />
          <label htmlFor="pwd" className="font-semibold text-sm text-gray-600 pb-1 block">Password:</label>
           <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" 
            onChange={handleChange}
          />
           {error ? (
          <div>
            <p className="error-text text-center">Incorrect Email Address or Password</p>
          </div>
        ) : null}
            <button 
            type="submit" 
            class="btn">
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
        
        <div class="py-5">
            <div class="grid grid-cols-2 gap-1">
              <div class="text-center sm:text-left whitespace-nowrap">
              <button class="btn btn-warning"><Link to="/signup">Go to Signup</Link></button>
              </div>
            </div>
          </div>
      </div>
    </div>
    
    
  );
}

export default Login;
