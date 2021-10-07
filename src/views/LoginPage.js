import { Link, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {error} = useContext(AuthContext)
  const { loginUser } = useContext(AuthContext);

  useEffect(() => {
    if(localStorage.getItem('jwtreservespot')){
      history.push('/calendar')
    }
  }, [history])

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      loginUser({ email, password });
      history.push("/calendar");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {error ? (
              <span style={{ color: "rgb(209, 2, 20)" }}>{error}</span>
            ) : (
              <span>Please enter your credentials</span>
            )}
          </p>
        </div>
        <form onSubmit={loginHandler} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                id="email-address"
                type="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
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
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              ><Link
                  to="/forgotpassword"
                  className="font-medium text-gray-900 hover:text-yellow-500"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/signup"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                Doesn't have an account?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
