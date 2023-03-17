// Next
import { useRouter } from "next/router";

// Form
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Components
import { Button } from "../common/button";
import { TextInput } from "@/components/forms/input/textInput";

const loginValidationSchema = Yup.object({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(8, "Must be more than 8 characters").required().label("Password"),
});

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = (newData) => {
    router.push("/logged");
  };

  return (
    <>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        // validateOnBlur={false}
        validateOnChange={false}
      >
        <Form className="flex justify-between flex-col flex-grow">
          <div>
            <TextInput
              label={"Email"}
              name={"email"}
              placeholder={"finance@email.com"}
              type={"email"}
              required
            />
            <TextInput
              label={"Password"}
              name={"password"}
              placeholder={"Must have at least 8 characters"}
              type={"password"}
              required
            />
          </div>

          <Button type={"submit"} icon={"arrow"}>Log In</Button>
        </Form>
      </Formik>
    </>
  );
}
