import React, { useState } from "react";
import "./styles.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Footer from "../main_componet/Home/footer/footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ShowPassword = ({ passwordVisible, togglePasswordVisibility }) => (
  <span className="flex items-center absolute right-3 top-2/4 -translate-y-2/4 gap-1 text-[0.7rem] font-medium">
    <div className="icons">
      {passwordVisible ? (
        <AiOutlineEye
          className="text-[1.2rem] cursor-pointer" // Increase the icon size
          onClick={togglePasswordVisibility}
        />
      ) : (
        <AiOutlineEyeInvisible
          className="text-[1.2rem] cursor-pointer" // Increase the icon size
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  </span>
);

const FormField = ({ label, type, placeholder, name, value, onChange, error }) => (
  <fieldset className="w-full p-2">
    <legend className="text-[0.8rem] font-semibold capitalize">{label}</legend>
    <input
      required
      className={`p-1 text-[0.8rem] outline-none ${error ? 'border-red-500' : ''}`} // Removed 'overflow-hidden' and added 'outline-none'
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
    {error && (
      <p className="text-red-500 bg-transparent">{error}</p>
    )}
  </fieldset>
);

const AuthForm = ({
  isRegisterPage,
  isForgotPasswordPage,
  formData,
  formErrors,
  isFormValid,
  handleInputChange,
  handleSubmit,
  clearForm,
  togglePage,
  toggleForgotPassword,
}) => (
  <form
    action=""
    className="w-full font-quicksand flex flex-col gap-2 p-4 max-w-[30rem]"
    onSubmit={handleSubmit}
  >
    {isRegisterPage && (
      <FormField
        label="Username"
        type="text"
        placeholder="Enter Username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        error={formErrors.username}
      />
    )}

    <FormField
      label="Email"
      type="email"
      placeholder="Enter Email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      error={formErrors.email}
    />

    <div className="relative">
      <FormField
        label="Password"
        type={formData.passwordVisible ? "text" : "password"}
        placeholder="Enter Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        error={formErrors.password}
      />

      {isRegisterPage && (
        <ShowPassword
          passwordVisible={formData.passwordVisible}
          togglePasswordVisibility={() => handleInputChange({ target: { name: 'passwordVisible', value: !formData.passwordVisible } })}
        />
      )}
    </div>

    {!isRegisterPage && !isForgotPasswordPage && (
      <p className="text-[0.8rem] mt-2">
        <span
          className="text-blue-500 cursor-pointer"
          onClick={toggleForgotPassword}
        >
          Forgot Password?
        </span>
      </p>
    )}

    <div className="flex gap-2">
      <button
        type="submit"
        className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full ${isFormValid ? "" : "pointer-events-none opacity-50"}`}
      >
        {isRegisterPage ? "Register" : "Login"}
      </button>
      <button
        type="button"
        onClick={clearForm}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
      >
        Clear Form
      </button>
    </div>

    <p className="text-[0.8rem] mt-2">
      {isRegisterPage ? "Already have an account?" : "Don't have an account?"}{" "}
      <span
        className="text-blue-500 cursor-pointer"
        onClick={togglePage}
      >
        {isRegisterPage ? "Sign in" : "Sign up"}
      </span>
    </p>
  </form>
);

const ForgotPasswordForm = ({ handleForgotPassword, handleToggleForgotPassword, formData, handleInputChange, formErrors }) => (
  <form
    action=""
    className="w-full font-quicksand flex flex-col gap-2 p-4 max-w-[30rem]"
    onSubmit={handleForgotPassword}
  >
    <FormField
      label="Email"
      type="email"
      placeholder="Enter Email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      error={formErrors.email}
    />

    <div className="flex gap-2">
      <button
        type="submit"
        className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full`}
      >
        Submit
      </button>
      <button
        type="button"
        onClick={handleToggleForgotPassword}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
      >
        Cancel
      </button>
    </div>

    <p className="text-[0.8rem] mt-2">
      <span
        className="text-blue-500 cursor-pointer"
        onClick={handleToggleForgotPassword}
      >
        Go back to Login
      </span>
    </p>
  </form>
);

const Login_Hero = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRegisterPage, setIsRegisterPage] = useState(true);
  const [isForgotPasswordPage, setIsForgotPasswordPage] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleTogglePage = () => {
    setIsRegisterPage(!isRegisterPage);
    setIsForgotPasswordPage(false); // Reset to login mode when toggling pages
  };

  const handleToggleForgotPassword = () => {
    setIsForgotPasswordPage(!isForgotPasswordPage);
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordVisible: false,
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const errors = {};

    if (formData.username.trim() === "" && isRegisterPage) {
      errors.username = "Username is";
    }

    if (formData.email.trim() === "") {
      errors.email = "Email is required.";
    }

    if (formData.password.trim() === "") {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formData.password)) {
      errors.password = "Password must contain at least one lowercase letter.";
    } else if (!/\d/.test(formData.password)) {
      errors.password = "Password must contain at least one number.";
    }

    const isValid = Object.keys(errors).length === 0;
    setIsFormValid(isValid);
    setFormErrors(errors);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/register",
          formData
        );

        console.log("Registration successful:", response.data.message);

        const loginResponse = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        console.log("Login successful:", loginResponse.data.message);

        // You can set the user's token in your app's state or local storage
        // Example: localStorage.setItem('token', loginResponse.data.token);
        navigate('/Dashboard');

      } catch (error) {
        console.error("Registration or login failed:", error);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      try {
        const loginResponse = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        console.log("Login successful:", loginResponse.data.message);

        // You can set the user's token in your app's state or local storage
        // Example: localStorage.setItem('token', loginResponse.data.token);
      
        navigate('/Dashboard');
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Implement the logic for handling forgot password functionality here
    // ...

    console.log("Forgot Password form submitted!");
  };

  const clearForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      passwordVisible: false,
    });
    setFormErrors({
      username: "",
      email: "",
      password: "",
    });
    setIsFormValid(false);
  };

  return (
    <div className=" ">
      <div className="herocontainer  flex">
        <div className="form-content   gap-[10rem] overflow-hidden w-full h-[87vh] flex justify-between items-center">
          <div className="text w-full flex justify-center">
            <h1 className="capitalize w-full flex font-quicksand text-[2rem] font-bold ml-[2rem] text-center w-[20rem]">
            </h1>
          </div>
          <div className="form flex relative bg-white w-full flex-col rounded-[1rem] items-center p-3  mr-5 mt-10 justify-start">
            {isForgotPasswordPage ? (
              <>
                <h1 className="capitalize text-blue-400 font-bold text-[1.5rem]">
                  Forgot Password
                </h1>
                <ForgotPasswordForm
                  handleForgotPassword={handleForgotPassword}
                  handleToggleForgotPassword={handleToggleForgotPassword}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  formErrors={formErrors}
                />
              </>
            ) : (
              <>
                {isRegisterPage ? (
                  <>
                    <h1 className="capitalize text-blue-400 font-bold text-[1.5rem]">
                      Register Now
                    </h1>
                    <AuthForm
                      isRegisterPage={isRegisterPage}
                      formData={formData}
                      formErrors={formErrors}
                      isFormValid={isFormValid}
                      handleInputChange={handleInputChange}
                      handleSubmit={handleRegister}
                      clearForm={clearForm}
                      togglePage={handleTogglePage}
                      toggleForgotPassword={handleToggleForgotPassword}
                    />
                  </>
                ) : (
                  <>
                    <h1 className="capitalize text-blue-400 font-bold text-[1.5rem]">
                      Login
                    </h1>
                    <AuthForm
                      isRegisterPage={isRegisterPage}
                      isForgotPasswordPage={isForgotPasswordPage}
                      formData={formData}
                      formErrors={formErrors}
                      isFormValid={isFormValid}
                      handleInputChange={handleInputChange}
                      handleSubmit={handleLogin}
                      clearForm={clearForm}
                      togglePage={handleTogglePage}
                      toggleForgotPassword={handleToggleForgotPassword}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login_Hero;
