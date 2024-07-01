import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BAS_URL, BAS_URL2 } from "../../Redux/Api/Api";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;

const validationSchema = Yup.object({
  email: Yup.string().email(" Invalid Email").required("Email is Required!!"),
  first_name: Yup.string().required(" Fist-Name is Required!! "),
  last_name: Yup.string().required(" List-Name is Required!! "),
  password1: Yup.string()
    .min(8, "Password must be at least 8 characters") //.matches(passwordRegex , "Password must be at least 8 charector, an upercase, an number, an lowercase, an spacial charecter ") if use passwordRegex we must replace on mine.
    .required("Password is Required!!"),
  password2: Yup.string()
  .oneOf([Yup.ref("password1"),null],"password Must much!!",)
  .required("Confirm Password is Required!!")
  //.matches(passwordRegex , "Password must be at least 8 charector, an upercase, an number, an lowercase, an spacial charecter ")
});

export default function Register() {

  const handleRegister = async (value)=>{
    console.log(value);
    const res = await fetch (`${BAS_URL2}user/register/`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(value)
    })
    const data = await res.json()
    console.log("res",data)
  }
  return (
    <section className="flex justify-center items-center h-screen">
      <Formik
        initialValues={{
          email: "",
          first_name: "",
          last_name: "",
          password1: "",
          password2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(value ,  {setSubmitting , resetForm})  => {
         
          setSubmitting(false);
          handleRegister(value)
          resetForm();
          
          // console.log(value);
        }}
      >
        {({isSumitting}) => {
          return (
            <Form className="w-1/2 bg-gray-100 p-[20px] rounded-md">
              <h1 className="text-2xl text-blue-800 font-semibold text-center">
                Register
              </h1>
              {/* Email */}
              <div className="py-[10px]">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                {/* Set Errormessage */}
                <ErrorMessage name="email">
                  {msg => <div className="text-red-700 text-[14px]">{msg}</div>}
                </ErrorMessage>

              </div >

              {/* fist-name */}
              <div className="py-[10px]">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Fist-Name
                </label>
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Enter First Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                {/* Set Errormessage */}
                <ErrorMessage name="first_name">
                  {msg => <div className="text-red-700 text-[14px]">{msg}</div>}
                </ErrorMessage>

              </div>

              {/* last-name */}
              <div className="py-[10px]">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last-Name
                </label>
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Enter Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                {/* Set Errormessage */}
                <ErrorMessage name="last_name">
                  {msg => <div className="text-red-700 text-[14px]">{msg}
                </div>}</ErrorMessage>

              </div>

              {/* Password1 */}
              <div className="py-[10px]">
                <label
                  htmlFor="password1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password1"
                  name="password1"
                  placeholder="Enter Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                {/* Set Errormessage */}
                <ErrorMessage name="password1">
                  {msg => <div className="text-red-700 text-[14px]">{msg}</div>}
                </ErrorMessage>

              </div>

              {/* Password2 or confirm password */}
              <div className="py-[10px]">
                <label
                  htmlFor="password2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Enter Confirm Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                {/* Set Errormessage */}
                <ErrorMessage name="password2">
                  {msg => <div className="text-red-700 text-[14px]">{msg}</div>}
                </ErrorMessage>

              </div>

              <div className="p-[20px] flex justify-end">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </section>
  );
}
