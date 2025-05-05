"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { Schema, z, ZodType } from "zod"

interface Props<T extends FieldValues> {
    schema : ZodType<T>;
     defaultValues: T;
     onSubmit: (data: T) => Promise<{success: boolean, error?: string}>
     type: "SIGN_IN" | "SIGN_UP"
}
const AuthForm = ({ type, schema, defaultValues, onSubmit }: Props<T>) => {

    const form: UseFormReturn = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
      })
     
      // 2. Define a submit handler.
      const handleSubmit: SubmitHandler<T> = async (data) {}
    }

  return <div>AuthForm -- {type}</div>;
};

export default AuthForm;
