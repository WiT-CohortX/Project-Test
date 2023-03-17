// Next
import { useRouter } from "next/router";

// Form
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Components
import { TextInput } from "@/components/forms/input/textInput";
import { CheckboxInput } from "@/components/forms/input/checkbox";
import { Button } from "@/components/common/button";

const signUpValidationSchema = Yup.object({
  email: Yup.string().email().label("Email").required(),
  password: Yup.string()
    .label("Password")
    .min(8, "Must be more than 8 characters")
    .required(),
  checkedAgree: Yup.bool()
    .oneOf([true], "You must agree to something")
    .required(),
});

export default function SignUp() {
  const router = useRouter();

  const handleSubmit = (newData) => {
    router.push("/logged");
  };

  return (
    <Formik
      validationSchema={signUpValidationSchema}
      initialValues={{
        email: "",
        password: "",
        checkedAgree: false,
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
            placeholder={" finance@email.com"}
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
          <CheckboxInput
            label={"Agree to something"}
            name={"checkedAgree"}
            type={"checkbox"}
            required
          />
        </div>

        <Button type={"submit"} icon={"arrow"}>Sign Up</Button>
      </Form>
    </Formik>
  );
}
