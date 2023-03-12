// Next
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router';

// React
import { useState } from "react";

// Form
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Components
import { TextInput } from "@/components/forms/textInput";
import { CheckboxInput } from "@/components/forms/checkbox";
import { SimpleBtn } from "@/components/buttons/simpleBtn";

const signUpValidationSchema = Yup.object({
  email: Yup.string().email().label("Email").required(),
  password: Yup.string().label("Password").min(10, "Must be more than 6 characters").required(),
  confirm_password: Yup.string()
    .label("Confirm password")
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match").min(10, "Must be more than 6 characters"),
  checkedAgree: Yup.bool()
    .oneOf([true], "You must agree to something").required(),
});

export default function SignUp() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    checkedAgree: false,
  });

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);

    localStorage.setItem(formData.email, JSON.stringify(formData));
    router.push("/logged");
  };

  const handleSubmit = (newData) => {
    setData(() => ({ ...newData }));
    makeRequest(newData);
  };

  return (
    <>
      <Head>
        <title>Sign Up | Finance App</title>
      </Head>
      <main>
        <h1 className="text-4xl text-center mb-4">SIGN UP</h1>
        <p className="mb-5 text-center">One login for all Finance products</p>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={data}
          onSubmit={handleSubmit}
          validateOnBlur={false}
          validateOnChange={false}
        >
          <Form role="form">
            <TextInput label={"Email"} name={"email"} placeholder={" finance@email.com"} type={"email"} required/>
            <TextInput
              label={"Password"}
              name={"password"}
              placeholder={"Must have at least 6 characters"}
              type={"password"}
              required
            />
            <TextInput
              label={"Confirm password"}
              name={"confirm_password"}
              placeholder={"Must have at least 6 characters"}
              type={"password"}
              required
            />
            <CheckboxInput
              label={"Agree to something"}
              name={"checkedAgree"}
              type={"checkbox"}
              required
            />

            <div className="text-center">
              <SimpleBtn type={"submit"} text={"SIGN UP"} />
              <p>Already have an account ? <Link href="/loginIn">Login In</Link></p>
            </div>
            
          </Form>
        </Formik>
      </main>
    </>
  );
}
