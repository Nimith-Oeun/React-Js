import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    fist_name : Yup.string().required(" Enter your Fist-Name "),
    Last_name : Yup.string().required(" Enter youy Last-Name "),
    email: Yup.string().email(" Invalid Email").required("Enter your Email"),
    password1: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
    password2: Yup.string().oneOf([Yup.ref("password1") , null , "password Must much!!"])
})


export default function Register() {
  return (
    <section>
        <Formik
            initialValues={{
                fist_name : "",
                Last_name : "",
                email : "",
                password1 : "",
                password2 :"",
            }}
        >
        </Formik>
    </section>
  )
}
