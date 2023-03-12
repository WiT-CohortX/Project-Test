// Next
import Head from 'next/head'
import Link from "next/link"
import { useRouter } from 'next/router';

// React
import { useState } from "react";

// Form
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Components
import { SimpleBtn } from "@/components/buttons/simpleBtn";
import { TextInput } from "@/components/forms/textInput";

const loginValidationSchema = Yup.object({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

export default function SignIn() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const makeRequest = (formData) => {
    const localKey = JSON.parse(localStorage.getItem(formData.email));

    if (
      localStorage.getItem(formData.email) &&
      localKey.password === formData.password
    ) {
      router.push("/logged");
    } else {
      console.log("Open an account");
    }
  };

  const handleSubmit = (newData) => {
    setData(() => ({ ...newData }));
    makeRequest(newData);
  };

  return (
    <>
      <Head>
        <title>Sign In | Finance App</title>
      </Head>
      <main>
        <h1 className="text-4xl text-center mb-4">SIGN IN</h1>
        <p className="mb-5 text-center">One login for all Finance products</p>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={data}
          onSubmit={handleSubmit}
          validateOnBlur={false}
          validateOnChange={false}
        >
          <Form>
            <TextInput label={"Email"} name={"email"} placeholder={"finance@email.com"} />
            <TextInput
              label={"Password"}
              name={"password"}
              placeholder={"Must have at least 6 characters"}
              type={"password"}
            />

            <div className="text-center">
              <SimpleBtn type={"submit"} text={"SIGN IN"} />
              <p>
                Dont have an account? <Link href="/signUp">Sign Up</Link>
              </p>
            </div>
          </Form>
        </Formik>
      </main>
    </>
  );
}
