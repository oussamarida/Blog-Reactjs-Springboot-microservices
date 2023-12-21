import React, { useState } from "react";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const [tele, settele] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    console.log();
  };

  return (
    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
      <h2
        className="text-center text-4xl text-black font-display font-semibold lg:text-left xl:text-5xl
        xl:text-bold"
      >
        Sign up
      </h2>
      <div className="mt-12">
        <form onSubmit={submitForm}>
          {/* Validation Errors */}
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Name
            </div>
            <input
              className="w-full mb-5 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              autoFocus
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Telephone
            </div>
            <input
              className="w-full mb-5 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              id="tele"
              type="text"
              placeholder="Telephone"
              value={tele}
              onChange={(event) => settele(event.target.value)}
              required
              autoFocus
            />
          </div>
          <div>
            <div className="text-sm  font-bold text-gray-700 tracking-wide">
              Email Address
            </div>
            <input
              className="w-full mb-5  text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              type="email"
              placeholder="mike@gmail.com"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Confirm Password
              </div>
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              id="password_confirmation"
              type="password"
              value={password_confirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              required
            />
          </div>

        </form>
        <div className="mt-8 mb-3 text-sm font-display font-semibold text-gray-700 text-center">
          Don't have an account ?
          <a
            className="cursor-pointer text-black hover:text-indigo-800"
            href="/auth/signin"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};
