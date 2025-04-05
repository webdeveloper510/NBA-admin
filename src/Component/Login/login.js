import React, { useEffect, useState } from "react";
import Input from "../Common/input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginUser } from "../../Api"; 

import { toast } from "react-toastify";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log('Submitting values:', values);
  
      const data = await loginUser(values); 
      console.log("Login API response:", data);
  
      const token = data?.token?.access;
      console.log('Extracted Token:', token);
  
      if (token) {
        localStorage.setItem('accessToken', token);
        toast.success('Login successful!');
        navigate('/dashboard');
      } else {
        console.error('No token found in response');
        toast.error('Login failed: No access token received');
      }
    } catch (error) {
      console.error("Login error details:", {
        message: error.message,
        response: error.response ? error.response.data : 'No response',
      });
  
      const errorMsg =
        error.response?.data?.messagepassword ||
        error.response?.data?.detail ||
        'Login failed. Please try again.';
  
      toast.error(`Login failed: ${errorMsg}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[100vh] h-full  pt-12 bg-custom-gradient">
      <div className="grid grid-cols-12 gap-8 w-[960px] mx-auto bg-[#fff] p-6 rounded-lg">
        <div className="col-span-12 md:col-span-6">
          <img
            src="http://zp04.kerne.org/webpanel/static/media/img-01.4ed7df3a303c99050d13.webp"
            alt="login page"
            className="mx-auto my-12"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className=" mx-auto p-8">
            <p className="text-center text-2xl font-semibold my-8">
              Login Form
            </p>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="w-full border p-2 rounded"
                      />
                      <div className="text-red-500 text-sm">
                        <ErrorMessage name="email" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className="w-full border p-2 rounded"
                      />
                      <div className="text-red-500 text-sm">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                  </div>

                  <div className="text-end mt-2">
                    <Link to="/">Forgot Password?</Link>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
                    >
                      {isSubmitting ? 'Signing In...' : 'Sign In'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
