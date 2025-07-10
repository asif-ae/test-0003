"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showCredentials, setShowCredentials] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const staticCredentials = {
    email: "user@example.com",
    password: "securePassword123",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === staticCredentials.email && password === staticCredentials.password) {
      Cookies.set("user", JSON.stringify({ email }), { expires: 7 }); // Store email in cookie for 7 days
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  const toggleCredentials = () => {
    setShowCredentials((prev) => !prev);
  };

  const useCredentials = () => {
    setEmail(staticCredentials.email);
    setPassword(staticCredentials.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Login</h2>
        <div className="space-y-6">
          {error && (
            <p className="text-red-500 dark:text-red-400 text-sm text-center">{error}</p>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={toggleCredentials}
            className="w-full py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            {showCredentials ? "Hide Credentials" : "Show Credentials"}
          </button>
          {showCredentials && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md transition-opacity duration-300">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Email:</strong> {staticCredentials.email}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Password:</strong> {staticCredentials.password}
              </p>
              <button
                type="button"
                onClick={useCredentials}
                className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                Use
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
