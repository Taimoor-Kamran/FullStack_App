import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/Validations";
import React from "react";

const page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{ email: "", password: "", fullName: "", universityId: 0}}
    onSubmit={() => {}}
  />
);

export default page;
