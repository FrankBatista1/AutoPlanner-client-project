import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../helpers/apiHelper";

const SignUpPage = ({ history }) => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.post(
          `${baseURL}/auth/signup`,
          { name, email, password },
          config
        );

        localStorage.setItem('jwtreservespot', data.token);

        history.push("/calendar");
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 10000);
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {error ? (
                <span style={{ color: "rgb(209, 2, 20)" }}>{error}</span>
              ) : (
                <span>Please enter your credentials</span>
              )}
            </p>
          </div>
          <form onSubmit={signUpHandler} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  value={name}
                  id="userName"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="sr-only">Email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                  id="email-address"
                  type="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-m-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  id="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-m-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label className="sr-only">Confirm Password</label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="confirmPassword"
                  value={confirmPassword}
                  type="password"
                  placeholder="Confirm password"
                  id="confirmPassword"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label
                  className="ml-2 block text-sm text-gray-900"
                >
                  <Link
                  to="/forgotpassword"
                  className="font-medium text-gray-900 hover:text-yellow-500"
                >
                  Forgot password?
                </Link>
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-medium text-yellow-600 hover:text-yellow-500"
                >
                  Already have an account?
                </Link>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
