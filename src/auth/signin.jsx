import React, { useState } from 'react'

export const Signin = () => {

 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
console.log(email)
  };

  return (
    <div className="mt-24 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
    <h2
      className="text-center text-4xl text-black font-display font-semibold lg:text-left xl:text-5xl
        xl:text-bold"
    >
      Log in
    </h2>
    <div className="mt-12">
      <form onSubmit={submitForm}>

        <div>
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Email Address
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[black"
            placeholder="mike@gmail.com"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </div>
            <div>
              <a href="/auth/forget-password"
                className="text-xs font-display font-semibold text-black hover:text-indigo-800
                            cursor-pointer"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[black"
            placeholder="Enter your password"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
       
      </form>
      <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
        Don't have an account ?{" "}
        <a
          className="cursor-pointer text-black hover:text-indigo-800"
          href="/auth/signup"
        >
          Sign up
        </a>
      </div>
    </div>
  </div>
  )
}
