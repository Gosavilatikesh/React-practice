import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {

    const {logedInUser, setlogedInUser, registeredUsers} = useContext(Auth)

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
   
    let user = registeredUsers.find((val) => {
        return val.email === data.email && val.password === data.password;
    })

    if(!user){
        toast.error("User not found")
        reset()
        return;
    }
    setlogedInUser(user);

    localStorage.setItem('logedInUser', JSON.stringify(user))
    toast.success("Logged In")
    reset();
    navigate("/main")

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 Characters is required",
                },
              })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">
          Not registered?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
